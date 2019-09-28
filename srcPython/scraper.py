import requests
import urllib.request
import time
from bs4 import BeautifulSoup

class Scraper:
    
    def __init__(self):
        self.laws = [{'count':5, 'link':'http://www.arnoutdevos.net'}, {'count':4, 'link':'http://www.epfl.ch'}]
        self.data_map = {}
        self.keyword_list = ["URG","VStG","DSG"] #"BGG","StHG", "BGG",
        
            
    def getLaw(self, keyword):
        result = "empty"
        if keyword in self.data_map.keys():
            result = self.data_map.get(keyword)
        #if result == None:
        #    result = self.do_scrape(keyword)
        #    self.data_map[keyword]=result
        return result
            
        
    def masterScrape(self):
        for keyword in self.keyword_list:
            self.data_map[keyword] = self.do_scrape(keyword)
        return "done"

    def do_scrape(self, keyword):
        links = self.get_links(day_link=None)

        response = requests.get(links[0])
        soup = BeautifulSoup(response.text, "html.parser")
        result = soup.find("div", {"class":"content"})

        results = []

        for link in links:
            response = requests.get(link)
            soup = BeautifulSoup(response.text, "html.parser")
            texts = soup.find("div", {"class":"content"})

            count = texts.text.count(keyword)

            if count > 0:
                results.append({'link':link, 'count':count})

        return results
    def get_news(self, keyword):
        url = 'https://www.law-news.ch/kategorie/news'
        response = requests.get(url)

        results = []

        soup = BeautifulSoup(response.text, 'lxml')

        for item in soup.find_all("div", attrs={"class": "td_module_16 td_module_wrap td-animation-stack"}):
            title = item.find("h3").get_text()
            image_link = item.find("img", attrs={"class":"entry-thumb"}).get("src")

            results.append({'title':title, 'image_link':image_link})
        
        #for headline in headlines:
        #    results.append(headline.text)

        return results

    def get_links(self, day_link):
        # Set the URL you want to webscrape from
        if day_link is None:
            day_link = 'https://www.bger.ch/ext/eurospider/live/de/php/aza/http/index_aza.php?date=20190927&lang=de&mode=news'

        # Connect to the URL
        response = requests.get(day_link)

        # Parse HTML and save to BeautifulSoup object¶
        soup = BeautifulSoup(response.text, "html.parser")

        a_tags = soup.findAll('a', href=True)

        prefix = 'https://www.bger.ch/ext/eurospider/live/de/php/aza/http/index.php'
        
        result = []
        
        for link in a_tags:
            if prefix in link['href']:
                result.append(link['href'])
        
        return result