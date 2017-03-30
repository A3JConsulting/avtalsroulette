import datetime

from db import db


class Contract(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(80), unique=True)
    summary = db.Column(db.String(500), unique=True)
    body = db.Column(db.Text)
    usage_limit = db.Column(db.Integer)
    sponsor_logo = db.Column(db.String(250))

    def __repr__(self):
        return '<Contract %r>' % self.title


class Agreement(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80))
    email = db.Column(db.String(120))
    signature = db.Column(db.Text)
    contract_id = db.Column(db.Integer, db.ForeignKey('contract.id'))
    contract = db.relationship('Contract', backref=db.backref('agreements', lazy='dynamic'))
    created_at = db.Column(db.DateTime(), default=datetime.datetime.now)
    updated_at = db.Column(db.DateTime())

    def __repr__(self):
        return '<Agreement %r>' % self.email

    def save(self, *args, **kwargs):
        self.updated_at = datetime.datetime.now
        return super(Agreement, self).save(*args, **kwargs)
