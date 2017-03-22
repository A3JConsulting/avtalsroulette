def serialize_contract(c):
    return {'id': c.id, 'title': c.title, 'body': c.body,
            'usage_limit': c.usage_limit, 'agreement_count': c.agreements.count()}


def serialize_agreement(a):
    print a.__dict__
    return {'id': a.id, 'name': a.name, 'email': a.email,
            'contract': serialize_contract(a.contract),
            'created_at': a.created_at.strftime("%Y-%m-%d %H:%M:%S"),
            'signature': a.signature}
