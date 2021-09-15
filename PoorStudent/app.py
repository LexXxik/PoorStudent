"""
This script runs the application using a development server.
It contains the definition of routes and views for the application.
"""

from flask import Flask, render_template
from bs4 import BeautifulSoup

app = Flask(__name__)

# Make the WSGI interface available at the top level so wfastcgi can get it.
wsgi_app = app.wsgi_app

item_count = 0;

# Reads item.html so it can be injected to the website
with open("templates/item.html", "r") as f:
    html_item = f.read()

@app.route('/')
def hello():
    """Renders a sample page."""
    return render_template("shopping.html", html_item=html_item)

@app.route('/getitemcount/<jsdata>')
def get_javascript_data(jsdata):
    item_count = jsdata
    print()
    print('Number of items in the list is ' + item_count)
    return jsdata

if __name__ == '__main__':
    import os
    HOST = os.environ.get('SERVER_HOST', 'localhost')
    try:
        PORT = int(os.environ.get('SERVER_PORT', '5555'))
    except ValueError:
        PORT = 5555
    app.run(HOST, PORT)
