import random
import os
from os.path import join, dirname
from dotenv import load_dotenv

dotenv_path = join(dirname(__file__), '.env')
load_dotenv(dotenv_path)

from flask import Flask
from flask_migrate import Migrate
from flask_restful import Api
from flask_cors import CORS, cross_origin
from flask.ext.mysql import MySQL

from db import db
from views import ContractList, ContractDetail, AgreementList, AgreementDetail, Random

app = Flask(__name__)


mysql = MySQL()

app.config['MYSQL_DATABASE_USER'] = os.getenv('DB_USER')
app.config['MYSQL_DATABASE_PASSWORD'] = os.getenv('DB_PASS')
app.config['MYSQL_DATABASE_DB'] = os.getenv('DB_NAME')
app.config['MYSQL_DATABASE_HOST'] = os.getenv('DB_HOST')

app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://{}:{}@{}/{}'.format(
    app.config['MYSQL_DATABASE_USER'],
    app.config['MYSQL_DATABASE_PASSWORD'],
    app.config['MYSQL_DATABASE_HOST'],
    app.config['MYSQL_DATABASE_DB'])

mysql.init_app(app)

CORS(app)
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True
db.init_app(app)
migrate = Migrate(app, db)
api = Api(app)


api.add_resource(ContractList, '/api/contracts')
api.add_resource(Random, '/api/contracts/random')
api.add_resource(ContractDetail, '/api/contracts/<contract_id>')
api.add_resource(AgreementList, '/api/agreements')
api.add_resource(AgreementDetail, '/api/agreements/<agreement_id>')


if __name__ == "__main__":
    app.run(debug=True)
