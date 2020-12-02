#! /media/root/persistence/Code/pyvenv/bin/python
from flask import *
from core import *

app = Flask(__name__)

@app.route('/')
def hello_world():
    return render_template('index.html')

@app.route('/search', methods=['GET', 'POST'])
def search():
    
    query = request.args.get('query','')
    ud=coreInit(query)
    return render_template('index2.html',ud=ud)

app.run(host='',debug=True)