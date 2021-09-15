"""
This script runs the application using a development server.
It contains the definition of routes and views for the application.
"""

from flask import Flask, render_template, request, redirect
from bs4 import BeautifulSoup

app = Flask(__name__)
# Make the WSGI interface available at the top level so wfastcgi can get it.
wsgi_app = app.wsgi_app

item_count = 1
items = []
categories = ['None', 'Fruit&Veg']

# Reads item.html so it can be injected to the website
with open("templates/item.html", "r") as f:
    html_item = f.read()

@app.route('/', methods=['GET', 'POST'])
def index():
    """Renders a sample page."""

    if request.method == "POST":
        for i in range(item_count):
            item = {}
            item['quantity'] = request.form.get("quantity-" + str(i))
            item['name'] = request.form.get("name-" + str(i))
            item['cathegory'] = request.form.get('cathegory-' + str(i))
            items.append(item)

        return redirect('/results')

    if request.method == "GET":
        return render_template("shopping.html", html_item=html_item, categories=categories)

@app.route('/results', methods=['GET'])
def results():
    return render_template("results.html", items=items)

@app.route('/getitemcount/<jsdata>')
def get_javascript_data(jsdata):
    global item_count
    item_count = int(jsdata)
    print(jsdata)
    print('Number of items in the list is ' + str(item_count))
    return jsdata

if __name__ == '__main__':
    import os
    HOST = os.environ.get('SERVER_HOST', 'localhost')
    try:
        PORT = int(os.environ.get('SERVER_PORT', '5555'))
    except ValueError:
        PORT = 5555
    app.run(HOST, PORT)
