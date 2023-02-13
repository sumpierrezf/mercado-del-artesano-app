"""empty message

<<<<<<<< HEAD:migrations/versions/ca1d89e554de_.py
Revision ID: ca1d89e554de
Revises: 
Create Date: 2023-02-10 20:35:41.123123
========
Revision ID: 967a78ea23af
Revises: 
Create Date: 2023-02-10 20:40:00.491411
>>>>>>>> fe688e193c0279ccf5aa92d5bb5ab16de9b71ba0:migrations/versions/967a78ea23af_.py

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
<<<<<<<< HEAD:migrations/versions/ca1d89e554de_.py
revision = 'ca1d89e554de'
========
revision = '967a78ea23af'
>>>>>>>> fe688e193c0279ccf5aa92d5bb5ab16de9b71ba0:migrations/versions/967a78ea23af_.py
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('user',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.Column('password', sa.String(length=80), nullable=False),
    sa.Column('first_name', sa.String(length=120), nullable=False),
    sa.Column('last_name', sa.String(length=120), nullable=False),
    sa.Column('birth', sa.String(length=120), nullable=True),
    sa.Column('address', sa.String(length=120), nullable=True),
    sa.Column('country', sa.String(length=120), nullable=True),
    sa.Column('city', sa.String(length=120), nullable=True),
    sa.Column('postal_code', sa.Integer(), nullable=True),
    sa.Column('phone_number', sa.Integer(), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email')
    )
    op.create_table('products',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=120), nullable=False),
    sa.Column('category', sa.String(length=120), nullable=False),
    sa.Column('price', sa.Integer(), nullable=False),
    sa.Column('amount', sa.Integer(), nullable=False),
    sa.Column('description', sa.String(length=120), nullable=False),
    sa.Column('condition', sa.String(length=120), nullable=False),
    sa.Column('img1', sa.String(length=120), nullable=True),
    sa.Column('img2', sa.String(length=120), nullable=True),
    sa.Column('img3', sa.String(length=120), nullable=True),
    sa.Column('img4', sa.String(length=120), nullable=True),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('cart',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('amount', sa.Integer(), nullable=True),
    sa.Column('product_id', sa.Integer(), nullable=True),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['product_id'], ['products.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('favorites',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('product_id', sa.Integer(), nullable=True),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['product_id'], ['products.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('favorites')
    op.drop_table('cart')
    op.drop_table('products')
    op.drop_table('user')
    # ### end Alembic commands ###
