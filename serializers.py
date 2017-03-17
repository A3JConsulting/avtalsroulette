def serialize_contract(c):
    return {'id': c.id, 'title': c.title, 'body': c.body,
            'usage_limit': c.usage_limit, 'agreement_count': c.agreements.count()}


def serialize_agreement(a):
    return {'id': a.id, 'name': a.name, 'email': a.email,
            'contract': serialize_contract(a.contract),
            'created_at': a.created_at,
            'updated_at': a.updated_at,
            'signature': a.signature}
