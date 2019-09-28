from flask import Flask, request, jsonify
from scraper import Scraper
import os

# Init app
app = Flask(__name__)

scraper = Scraper()

@app.route('/laws/<keyword>', methods=['GET'])
def get_laws(keyword):
    result = scraper.scrape(keyword=keyword)
    return str(result)

@app.route('/news/<keyword>', methods=['GET'])
def get_news(keyword):
    result = scraper.get_news(keyword=keyword)
    return str(result)

if __name__ == '__main__':
    app.run(debug=True)