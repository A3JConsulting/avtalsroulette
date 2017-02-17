from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///db.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True
db = SQLAlchemy(app)


class Contract(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(80), unique=True)
    body = db.Column(db.Text)
    usage_limit = db.Column(db.Integer)


    def __init__(self, title, body, usage_limit):
        self.title = title
        self.body = body
        self.usage_limit = usage_limit

    def __repr__(self):
        return '<Contract %r>' % self.title

class Agreement(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), unique=True)
    email = db.Column(db.String(120), unique=True)
    contract_id = db.Column(db.Integer, db.ForeignKey('contract.id'))
    contract = db.relationship('Contract',
        backref=db.backref('agreements', lazy='dynamic'))

    def __init__(self, name, email, contract):
        self.name = name
        self.email = email
        self.contract = contract

    def __repr__(self):
        return '<Agreement %r>' % self.email


@app.route("/")
def hello():
    return "Hello World!"

if __name__ == "__main__":
    app.run()
