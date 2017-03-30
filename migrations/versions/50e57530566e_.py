"""empty message

Revision ID: 50e57530566e
Revises: d14f398ceffe
Create Date: 2017-03-30 15:43:43.511825

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '50e57530566e'
down_revision = 'd14f398ceffe'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('contract', sa.Column('sponsor_logo', sa.String(length=250), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('contract', 'sponsor_logo')
    # ### end Alembic commands ###