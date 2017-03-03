from db import db


class Contract(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(80), unique=True)
    body = db.Column(db.Text)
    usage_limit = db.Column(db.Integer)

    def __repr__(self):
        return '<Contract %r>' % self.title


class Agreement(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80))
    email = db.Column(db.String(120))
    signature = db.Column(db.Text)
    contract_id = db.Column(db.Integer, db.ForeignKey('contract.id'))
    contract = db.relationship('Contract', backref=db.backref('agreements', lazy='dynamic'))

    def __repr__(self):
        return '<Agreement %r>' % self.email

