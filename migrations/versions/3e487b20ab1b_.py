"""empty message

Revision ID: 3e487b20ab1b
Revises: 2f6aeb90337e
Create Date: 2017-03-17 14:14:19.688884

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '3e487b20ab1b'
down_revision = '2f6aeb90337e'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('contract', sa.Column('summary', sa.String(length=500), nullable=True))
    op.create_unique_constraint(None, 'contract', ['summary'])
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint(None, 'contract', type_='unique')
    op.drop_column('contract', 'summary')
    # ### end Alembic commands ###
