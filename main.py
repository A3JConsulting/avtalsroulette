# -*- coding: utf-8 -*-
from flask import Flask
from randomizer import randomizer

app = Flask(__name__)

@app.route("/")
def hello():
    html=u"""
    <html style='font-size:0.8em;'>
        <head>
        </head>
        <body>
        {agreement}
        </body>
    </html>
    """.format(
    agreement=randomizer(u"Jens Bäckbom", u"handla i god tro")
    )
    return html

if __name__ == "__main__":
    app.run()
