import random

from flask import Flask
from flask_migrate import Migrate
from flask_restful import Api
from flask_cors import CORS, cross_origin

from db import db
from views import ContractList, ContractDetail, AgreementList, AgreementDetail, Random

app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///db.db'
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
