import requests
import urllib.request
import time
from bs4 import BeautifulSoup

class Scraper:
  def __init__(self):
    self.laws = [{'count':5, 'link':'http://www.arnoutdevos.net'}, {'count':4, 'link':'http://www.epfl.ch'}]

  def scrape(self, keyword):
    # Set the URL you want to webscrape from
    url = 'https://www.bger.ch/ext/eurospider/live/de/php/aza/http/index_aza.php?date=20190927&lang=de&mode=news'

    # Connect to the URL
    response = requests.get(url)

    # Parse HTML and save to BeautifulSoup object¶
    soup = BeautifulSoup(response.text, "html.parser")

    r = soup.find(class_="r")

    a_tags = soup.findAll('a', href=True)

    prefix = 'https://www.bger.ch/ext/eurospider/live/de/php/aza/http/index.php'
    
    result = []
    
    for link in a_tags:
        if prefix in link['href']:
            result.append({'count':0, 'link':link['href']})
      
    return result