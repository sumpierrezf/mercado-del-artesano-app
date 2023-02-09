"""empty message

<<<<<<<< HEAD:migrations/versions/02773dd977e4_.py
<<<<<<< HEAD:migrations/versions/02773dd977e4_.py
Revision ID: 02773dd977e4
Revises: 
Create Date: 2023-02-07 20:29:40.904627
=======
<<<<<<<< HEAD:migrations/versions/14c208dbda3a_.py
Revision ID: 14c208dbda3a
Revises: 
Create Date: 2023-02-06 18:24:37.158607
========
Revision ID: 99f1b225f01a
Revises: 
Create Date: 2023-02-06 17:07:21.770238
>>>>>>>> 5f7e75f7764b3723114d5ef0b822a3a177d97d95:migrations/versions/99f1b225f01a_.py
>>>>>>> 9856aac6c55ae65435d547369885278888e4b447:migrations/versions/99f1b225f01a_.py
========
Revision ID: 490d08d4cf52
Revises: 
Create Date: 2023-02-09 12:39:02.169003
>>>>>>>> ec5973ebe76ee96fef9cd0391d18c845c3084cc4:migrations/versions/490d08d4cf52_.py

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
<<<<<<<< HEAD:migrations/versions/02773dd977e4_.py
<<<<<<< HEAD:migrations/versions/02773dd977e4_.py
revision = '02773dd977e4'
=======
<<<<<<<< HEAD:migrations/versions/14c208dbda3a_.py
revision = '14c208dbda3a'
========
revision = '99f1b225f01a'
>>>>>>>> 5f7e75f7764b3723114d5ef0b822a3a177d97d95:migrations/versions/99f1b225f01a_.py
>>>>>>> 9856aac6c55ae65435d547369885278888e4b447:migrations/versions/99f1b225f01a_.py
========
revision = '490d08d4cf52'
>>>>>>>> ec5973ebe76ee96fef9cd0391d18c845c3084cc4:migrations/versions/490d08d4cf52_.py
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
    sa.Column('img1', sa.String(length=120), nullable=False),
    sa.Column('img2', sa.String(length=120), nullable=True),
    sa.Column('img3', sa.String(length=120), nullable=True),
    sa.Column('img4', sa.String(length=120), nullable=True),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('cart',
    sa.Column('id', sa.Integer(), nullable=False),
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
