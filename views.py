import traceback
import random

from flask.ext.restful import abort, Resource
from flask.ext.restful import reqparse

from db import db
from models import Contract, Agreement
from serializers import serialize_agreement, serialize_contract


class ContractList(Resource):
    @staticmethod
    def get():
        return {'results': map(serialize_contract, Contract.query.all())}

    @staticmethod
    def post():
        try:
            parser = reqparse.RequestParser()
            parser.add_argument('title')
            parser.add_argument('body')
            parser.add_argument('usage_limit', type=int)
            data = parser.parse_args(strict=True)
            contract = Contract(**data)
            db.session.add(contract)
            db.session.commit()
        except Exception as e:
            abort(400, message=str(e))
        return serialize_contract(contract), 201


class ContractDetail(Resource):
    @staticmethod
    def get(contract_id):
        contract = Contract.query.get_or_404(contract_id)
        return serialize_contract(contract)

    @staticmethod
    def put(contract_id):
        try:
            parser = reqparse.RequestParser()
            parser.add_argument('title')
            parser.add_argument('body')
            parser.add_argument('usage_limit', type=int)
            data = parser.parse_args(strict=True)

            contract = Contract.query.get_or_404(contract_id)
            contract.title = data.get('title', None) or contract.title
            contract.body = data.get('body', None) or contract.body
            contract.usage_limit = data.get('usage_limit', None) or contract.usage_limit

            db.session.commit()
        except Exception as e:
            abort(400, message=str(e))
        return serialize_contract(contract), 201


class AgreementList(Resource):
    @staticmethod
    def get():
        return {'results': map(serialize_agreement, Agreement.query.all())}

    @staticmethod
    def post():
        try:
            parser = reqparse.RequestParser()
            parser.add_argument('name')
            parser.add_argument('email')
            parser.add_argument('contract_id', type=int)
            parser.add_argument('signature')
            data = parser.parse_args(strict=True)
            agreement = Agreement(**data)
            db.session.add(agreement)
            db.session.commit()
        except Exception as e:
            abort(400, message=str(e))
        return serialize_agreement(agreement), 201


class AgreementDetail(Resource):
    @staticmethod
    def get(agreement_id):
        agreement = Agreement.query.get_or_404(agreement_id)
        return serialize_agreement(agreement)

    @staticmethod
    def put(agreement_id):
        try:
            parser = reqparse.RequestParser()
            parser.add_argument('name')
            parser.add_argument('email')
            parser.add_argument('contract_id', type=int)
            data = parser.parse_args(strict=True)

            agreement = Agreement.query.get_or_404(agreement_id)
            agreement.name = data.get('name', None) or agreement.name
            agreement.email = data.get('email', None) or agreement.email

            db.session.commit()
        except Exception as e:
            abort(400, message=str(e))
        return serialize_agreement(agreement), 201


class Random(Resource):
    def get(self):
        contracts = Contract.query.all()
        contract = self.randomize(contracts)
        return serialize_contract(contract)

    @staticmethod
    def randomize(contracts):
        ids = map(lambda c: c.id, contracts)
        random_idx = random.randint(0, len(ids) - 1)
        return contracts[random_idx]
