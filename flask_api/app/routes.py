# need to import app varibales
from app import app
# render html files
from flask import render_template, jsonify, request
import requests

@app.route('/')
@app.route('/index')
def index():
    url = "https://learnwebcode.github.io/json-example/animals-1.json"
    value = requests.get(url).json()
    return render_template('index.html', value=value)

@app.route('/api', methods=['GET'])
def api():
    people = [
        {"name": "Max", "age":27},
        {"name": "Ford", "age":40},
        {"name": "Henry", "age":22},
        {"name": "John", "age":25},
    ]
    return jsonify(people)
