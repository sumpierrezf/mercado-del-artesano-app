"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint, current_app
from api.models import db, User, Products, Favorites, Cart, Reviews
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
import json
# importamos Message() de flask_mail
from flask_mail import Message
# importamos ramdom y string para generar una clave aleatoria nueva
import random
import string

# SDK de Mercado Pago
import mercadopago
# Agrega credenciales
sdk = mercadopago.SDK("APP_USR-2815099995655791-092911-c238fdac299eadc66456257445c5457d-1160950667")


api = Blueprint("api", __name__)


@api.route("/hello", methods=["POST", "GET"])
def handle_hello():
    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200


@api.route("/user", methods=["GET"])
def get_users():
    allusers = User.query.all()
    print(allusers)
    results = list(map(lambda item: item.serialize(), allusers))
    print(results)
    return jsonify(results), 200

@api.route("/user/<int:user_id>", methods=["GET"])
def get_user(user_id):
    user = User.query.filter_by(id=user_id).first()

    return jsonify(user.serialize()), 200

@api.route("/product", methods=["GET"])
def get_product():
    allproducts = Products.query.all()
    print(allproducts)
    results = list(map(lambda item: item.serialize(), allproducts))
    print(results)
    return jsonify(results), 200


@api.route("/product/<int:product_id>", methods=["GET"])
def get_info_product(product_id):
    product = Products.query.filter_by(id=product_id).first()
    print(product.serialize())

    return jsonify(product.serialize()), 200


@api.route("/user/favorites/<int:user_id>", methods=["GET"])
def handle_user_favorites(user_id):
    alluserfavs = Favorites.query.filter_by(user_id=user_id).all()

    results = list(
        map(lambda item: {**item.serializeProducts(), **item.serialize()}, alluserfavs)
    )

    return jsonify(results), 200


@api.route("/user/cart/<int:user_id>", methods=["GET"])
def products_in_cart(user_id):
    alluserproducts = Cart.query.filter_by(user_id=user_id).all()

    results = list(
        map(
            lambda item: {**item.serializeProducts(), **item.serialize()},
            alluserproducts,
        )
    )

    return jsonify(results), 200


@api.route("/login", methods=["POST"])
def login():
    email = request.json.get("email", None)
    password = request.json.get("password", None)

    user = User.query.filter_by(email=email).first()
    print(user.email)

    if email != user.email or password != user.password:
        return jsonify({"msg": "Bad email or password"}), 401

    access_token = create_access_token(identity=email)
    return jsonify(access_token=access_token, user_id=user.id)


@api.route("/signup", methods=["POST"])
def add_new_user():
    request_body = json.loads(request.data)
    print(request_body)

    user = User.query.filter_by(email=request_body["email"]).first()
    print(user)

    if user is None:
        usuario = User(
            email=request_body["email"],
            password=request_body["password"],
            first_name=request_body["first_name"],
            last_name=request_body["last_name"],
            birth=request_body["birth"] or None,
            address=request_body["address"] or None,
            country=request_body["country"] or None,
            city=request_body["city"] or None,
            postal_code=request_body["postal_code"] or None,
            phone_number=request_body["phone_number"] or None,
        )
        # print(usuario)

        db.session.add(usuario)
        db.session.commit()

        # return jsonify(request_body.serialize()), 200
        return jsonify({"msg": "Usuario creado"}), 200

    return jsonify({"msg": "Ese email ya está registrado"}), 401


@api.route("/upload_product/<int:user_id>", methods=["POST"])
def add_new_product(user_id):
    request_body = json.loads(request.data)
    print(request_body)
    print(request_body["img1"][0])

    products = Products(
        name=request_body["name"],
        category=request_body["category"],
        price=request_body["price"],
        amount=request_body["amount"],
        description=request_body["description"],
        condition=request_body["condition"],
        img1=request_body["img1"][0],
        img2=request_body["img2"][1] or None,
        img3=request_body["img3"][2] or None,
        img4=request_body["img4"][3] or None,
        user_id=user_id,
    )
    # print(products.serialize())

    db.session.add(products)
    db.session.commit()

    return jsonify({"msg": "Producto subido"}), 200


@api.route("/favorites", methods=["POST"])
def add_new_fav():
    request_body = request.json

    fav_products = Favorites.query.filter_by(
        user_id=request_body["user_id"], product_id=request_body["product_id"]
    ).first()
    fav = Favorites(
        user_id=request_body["user_id"], product_id=request_body["product_id"]
    )

    if fav_products is None:
        db.session.add(fav)
        db.session.commit()
        return jsonify(fav.serialize()), 200

    return jsonify({"msg": "Ya tienes ese producto en favoritos"}), 404


@api.route("/cart", methods=["POST"])
def add_to_cart():
    request_body = request.json

    cart_filter = Cart.query.filter_by(user_id=request_body["user_id"],product_id=request_body["product_id"]).first()
    cart = Cart(user_id=request_body["user_id"], product_id=request_body["product_id"], amount=request_body["amount"])

    if cart_filter is None:
        db.session.add(cart)
        db.session.commit()
        return jsonify(cart.serialize()), 200

    return jsonify({"msg": "Ya tienes ese producto en el carrito"}), 404


@api.route("/user/favorites/<int:user_id>", methods=["DELETE"])
def delete_favorite(user_id):
    request_body = request.json
    print(request_body)

    fav = Favorites.query.filter_by(
        user_id=user_id, product_id=request_body["product_id"]
    ).first()
    print(fav)

    if fav is None:
        return jsonify({"msg": "No tienes ese favorito"}), 404

    db.session.delete(fav)
    db.session.commit()

    return jsonify({"msg": "El favorito ha sido eliminado"}), 200


@api.route("/user/cart/<int:user_id>", methods=["DELETE"])
def delete_product_in_cart(user_id):
    request_body = request.json
    print(request_body)

    cart = Cart.query.filter_by(
        user_id=user_id, product_id=request_body["product_id"]
    ).first()
    print(cart)

    if cart is None:
        return jsonify({"msg": "No tienes ese producto en el carrito"}), 404

    db.session.delete(cart)
    db.session.commit()

    return jsonify({"msg":"El producto ha sido eliminado del carrito"}), 200

@api.route("/user/cart/delete/<int:user_id>", methods=["DELETE"])
def delete_all_products_in_cart(user_id):

    cart = Cart.query.filter_by(
        user_id=user_id).all()
    print(cart)

    if cart is None:
        return jsonify({"msg": "No tienes productos en el carrito"}), 404
    list(map(lambda item: db.session.delete(item), cart))
    db.session.commit()

    return jsonify({"msg":"Los productos han sido eliminados del carrito"}), 200

@api.route('/cart', methods=['PUT'])
def select_product_amount():
    
    request_body = request.json

    cart_filter = Cart.query.filter_by(user_id=request_body["user_id"],product_id=request_body["product_id"]).first()
    
    if cart_filter is None:
        return jsonify({"msg":"No tienes ese producto en el carrito"}),404

    cart_filter.amount=request_body["amount"]
    db.session.commit()
    return jsonify(cart_filter.serialize()), 200
    
#RECUPERACION CONTRASEÑA OLVIDADA 
@api.route("/resetPassword", methods=["POST"])
def resetPassword():
    recover_email = request.json['email']
    recover_password = ''.join(random.choice(string.ascii_uppercase + string.digits) for x in range(8)) 
    #clave aleatoria nueva
    if not recover_email:
        return jsonify({"msg": "Debe ingresar el correo"}), 401
	#   #busco si el correo existe en mi base de datos
    user = User.query.filter_by(email=recover_email).first()
    if not user:
    # recover_email != user.email:
        return jsonify({"msg": "El correo ingresado no existe en nuestros registros"}), 400
    # #si existe guardo la nueva contraseña aleatoria
    user.password = recover_password
    db.session.commit()
	  #luego se la envio al usuario por correo para que pueda ingresar
    
    msg = Message("Hi", recipients=[recover_email])
    msg.recipients=[recover_email]
    msg.html = f"""<h1>Su nueva contraseña es: {recover_password}</h1>"""
    current_app.mail.send(msg)
    return jsonify({"msg": "Su nueva clave ha sido enviada al correo electrónico ingresado"}), 200

# ACA CREAMOS LA RUTA PARA PAGAR CON MERCADO PAGO
@api.route("/preference", methods=["POST"])
def preference():
    body = json.loads(request.data)
    total = body["total"]
    # Crea un ítem en la preferencia
    preference_data = {
        "items": [
            {
                "title": "Mercado del Artesano",
                "quantity": 1,
                "unit_price": total,
            }
        ],
        "payer":{
            "email":"test_user_17805074@testuser.com"
        },
        "back_urls": {
            "success": "https://3000-sumpierrezf-mercadodela-bbmztxwdm6h.ws-us87.gitpod.io",#esta url es del front
            "failure": "https://3000-sumpierrezf-mercadodela-bbmztxwdm6h.ws-us87.gitpod.io",#esta url es del front
            "pending": "https://3000-sumpierrezf-mercadodela-bbmztxwdm6h.ws-us87.gitpod.io"#esta url es del front
	},
        "auto_return": "approved"
    }

    preference_response = sdk.preference().create(preference_data)
    preference = preference_response["response"]
    return preference, 200
    # FIN RUTA DE PAGO MERCADO PAGO

@api.route('/profile', methods=['PUT'])
def edit_profile():
    
    request_body = request.json

    profile = User.query.filter_by(id=request_body["id"]).first()
    
    if profile is None:
        return jsonify({"msg":"Este usuario no existe"}),404

    print(request_body["phone_number"])

    profile.password=request_body["password"] or profile.password
    profile.first_name=request_body["first_name"] or profile.first_name
    profile.last_name=request_body["last_name"] or profile.last_name
    profile.birth=request_body["birth"] or profile.birth or None
    profile.address=request_body["address"] or profile.address or None
    profile.country=request_body["country"] or profile.country or None
    profile.city=request_body["city"] or profile.city or None
    profile.postal_code=request_body["postal_code"] or profile.postal_code or None
    profile.phone_number=request_body["phone_number"] or profile.phone_number or None
    profile.profile_picture=request_body["profile_picture"] or profile.profile_picture or None
    # if request_body["phone_number"] is not None:
    
    db.session.commit()
    return jsonify(profile.serialize()), 200

    #RUTAS PARA LAS REVIEWS DE USUARIOS
@api.route("/reviews/product/<int:product_id>", methods=["GET"])
def get_product_reviews(product_id):
    reviews = Reviews.query.filter_by(product_id=product_id).all()

    results = list(
        map(lambda item:item.serialize(), reviews)
    )
    return jsonify(results), 200

@api.route('/reviews/product/<int:product_id>', methods=['POST'])
def add_new_review(product_id):
    request_body = request.json
    print(request_body)
    print(request_body["reviews"])
    query_review = Reviews.query.filter_by(user_id=request_body["user"], product_id=product_id).first()
    if query_review is None:
        new_review = Reviews(reviews=request_body["reviews"],calification=request_body["calification"], product_id=product_id, user_id=request_body["user"])
        db.session.add(new_review)
        db.session.commit()
        return jsonify({"msg": "Comentario subido"}), 200
    else:
        return jsonify({"msg": "Ya hiciste un comentario sobre este producto"}), 400
    

    


    
