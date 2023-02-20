from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    first_name = db.Column(db.String(120), unique=False, nullable=False)
    last_name = db.Column(db.String(120), unique=False, nullable=False)
    birth = db.Column(db.String(120), unique=False, nullable=True)
    address = db.Column(db.String(120), unique=False, nullable=True)
    country = db.Column(db.String(120), unique=False, nullable=True)
    city = db.Column(db.String(120), unique=False, nullable=True)
    postal_code = db.Column(db.Integer, unique=False, nullable=True)
    phone_number = db.Column(db.Integer, unique=False, nullable=True)
    profile_picture = db.Column(db.String(120), unique=False, nullable=True)
    favorites = db.relationship('Favorites', backref='user', lazy=True)
    cart = db.relationship('Cart', backref='user', lazy=True)
    reviews = db.relationship('Reviews', backref='user', lazy=True)
    products = db.relationship('Products', backref='user', lazy=True)

    def __repr__(self):
        return f'<User {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "first_name": self.first_name,
            "last_name": self.last_name,
            "birth": self.birth,
            "address": self.address,
            "country": self.country,
            "city": self.city,
            "postal_code": self.postal_code,
            "phone_number": self.phone_number,
            "password": self.password,
            "profile_picture": self.profile_picture
            # do not serialize the password, its a security breach
        }

class Favorites(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    product_id = db.Column(db.Integer, db.ForeignKey('products.id'), nullable=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=True)

    def __repr__(self):
        return f'<Favorites {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "product_id": self.product_id,
            "user_id": self.user_id
            # do not serialize the password, its a security breach
        }
    def serializeProducts(self):
        results = Products.query.filter_by(id = self.product_id).first()
        return{
            "productsInfo": results.serialize()
        }
            
        

class Cart(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    amount = db.Column(db.Integer, unique=False, nullable=True)
    product_id = db.Column(db.Integer, db.ForeignKey('products.id'), nullable=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=True)

    def __repr__(self):
        return f'<Cart {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "product_id": self.product_id,
            "user_id": self.user_id,
            "amount": self.amount
            # do not serialize the password, its a security breach
        }
    
    def serializeProducts(self):
        results = Products.query.filter_by(id = self.product_id).first()
        return{
            "productsInfo": results.serialize()
        }

class Products(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=False, nullable=False)
    category = db.Column(db.String(120), unique=False, nullable=False)
    price = db.Column(db.Integer, unique=False, nullable=False)
    amount = db.Column(db.Integer, unique=False, nullable=False)
    description = db.Column(db.String(120), unique=False, nullable=False)
    condition = db.Column(db.String(120), unique=False, nullable=False)
    img1 = db.Column(db.String(120), unique=False)
    img2 = db.Column(db.String(120), unique=False)
    # img3 = db.Column(db.String(120), unique=False)
    # img4 = db.Column(db.String(120), unique=False)
    favorites = db.relationship('Favorites', backref='products', lazy=True)
    cart = db.relationship('Cart', backref='products', lazy=True)
    reviews = db.relationship('Reviews', backref='products', lazy=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=True)

    def __repr__(self):
        return f'<Products {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "category": self.category,
            "price": self.price,
            "amount": self.amount,
            "description": self.description,
            "condition": self.condition,
            "user_id": self.user_id,
            "img1": self.img1,
            "reviews": list(map(lambda item: item.serialize(), self.reviews)),
            "img2": self.img2,
            # "img3": self.img3,
            # "img4": self.img4
            # do not serialize the password, its a security breach
        }

    def serializeUser(self):
        results = User.query.filter_by(id = self.user_id).first()
        return{
            "sellerInfo": results.serialize()
        }

class Reviews(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    reviews = db.Column(db.String(220), unique=False, nullable=True)
    calification = db.Column(db.Integer, unique=False, nullable=True)
    product_id = db.Column(db.Integer, db.ForeignKey('products.id'), nullable=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=True)

    def __repr__(self):
        return f'<Reviews {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "reviews": self.reviews,
            "calification": self.calification,
            "product_id": self.product_id,
            "user_id": self.user_id,
            # do not serialize the password, its a security breach
        }
    
