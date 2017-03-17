"""empty message

Revision ID: d14f398ceffe
Revises: 3e487b20ab1b
Create Date: 2017-03-17 14:47:38.446859

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'd14f398ceffe'
down_revision = '3e487b20ab1b'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('agreement', sa.Column('created_at', sa.DateTime(), nullable=True))
    op.add_column('agreement', sa.Column('updated_at', sa.DateTime(), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('agreement', 'updated_at')
    op.drop_column('agreement', 'created_at')
    # ### end Alembic commands ###
