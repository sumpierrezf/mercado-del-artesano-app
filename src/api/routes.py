"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint, current_app
from api.models import db, User, Products, Favorites, Cart
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
import json

# # importamos Message() de flask_mail
# from flask_mail import Message
# from flask_cors import CORS

# # importamos ramdom y string para generar una clave aleatoria nueva
# import random
# import string

api = Blueprint("api", __name__)


@api.route("/hello", methods=["POST", "GET"])
def handle_hello():
    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200


@api.route("/user", methods=["GET"])
def get_user():
    allusers = User.query.all()
    print(allusers)
    results = list(map(lambda item: item.serialize(), allusers))
    print(results)
    return jsonify(results), 200


@api.route("/product", methods=["GET"])
def get_product():
    allproducts = Products.query.all()
    print(allproducts)
    results = list(map(lambda item: item.serialize(), allproducts))
    print(results)
    return jsonify(results), 200


@api.route("/product/<int:product_id>", methods=["GET"])
def get_info_characters(product_id):
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
    return jsonify(access_token=access_token)


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
            birth=request_body["birth"],
            address=request_body["address"],
            country=request_body["country"],
            city=request_body["city"],
            postal_code=request_body["postal_code"],
            phone_number=request_body["phone_number"],
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

    products = Products(
        name=request_body["name"],
        category=request_body["category"],
        price=request_body["price"],
        amount=request_body["amount"],
        description=request_body["description"],
        condition=request_body["condition"],
        img1=request_body["img1"],
        # img2=request_body["img2"], img3=request_body["img3"], img4=request_body["img4"],
        user_id=user_id,
    )
    print(products.serialize())

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

    cart_filter = Cart.query.filter_by(
        user_id=request_body["user_id"], product_id=request_body["product_id"]
    ).first()
    cart = Cart(user_id=request_body["user_id"], product_id=request_body["product_id"])

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

@api.route('/cart', methods=['PUT'])
def select_product_amount():
    
    request_body = request.json

    cart_filter = Cart.query.filter_by(user_id=request_body["user_id"],product_id=request_body["product_id"]).first()
    
    if cart_filter is None:
        return jsonify({"msg":"No tienes ese producto en el carrito"}),404

    cart_filter.amount=request_body["amount"]
    db.session.commit()
    return jsonify(cart_filter.serialize()), 200
    
