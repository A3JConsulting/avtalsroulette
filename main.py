import random

from flask import Flask
from flask_restful import Api

from db import db
from views import ContractList, ContractDetail, AgreementList, AgreementDetail, Random

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///db.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True
db.init_app(app)
api = Api(app)


api.add_resource(ContractList, '/api/contracts')
api.add_resource(ContractDetail, '/api/contracts/<contract_id>')
api.add_resource(AgreementList, '/api/agreements')
api.add_resource(AgreementDetail, '/api/agreements/<agreement_id>')
api.add_resource(Random, '/api/random')


if __name__ == "__main__":
    app.run(debug=True)
