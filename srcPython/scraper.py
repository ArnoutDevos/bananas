import requests
import urllib.request
import time
from bs4 import BeautifulSoup
import re
import pickle
from pathlib import Path

class Scraper:
    
    def __init__(self):
        self.laws = [{'count':5, 'link':'http://www.arnoutdevos.net'}, {'count':4, 'link':'http://www.epfl.ch'}]
        self.data_map = {}
        self.keyword_list = ["VStG", "Strafprozess"] #"BGG","StHG", "BGG",
            
    def getLaw(self, keyword):
        result = "empty"
        print(self.data_map.keys())
        if keyword in self.data_map.keys():
            result = self.data_map.get(keyword)
        #if result == None:
        #    result = self.do_scrape(keyword)
        #    self.data_map[keyword]=result
        return result
            
        
    def masterScrape(self):
        my_file = Path('law_data.pkl')
        if False and my_file.is_file():
            with open('law_data.pkl', 'rb') as input:
                self.data_map = pickle.load(input)
            return "Scrape data loaded from file."
        else:
            self.data_map = self.do_scrape(self.keyword_list)

            with open('law_data.pkl', 'wb') as output:
                pickle.dump(self.data_map, output, pickle.HIGHEST_PROTOCOL)
            return "Scraped from scratch."

    def do_scrape(self, keywords):
        articles = self.get_articles(day_link=None)

        results = {}

        for keyword in keywords:
            results[keyword] = []

        print('Starting scraping for: ', str(keywords))
        for article in articles:
            response = requests.get(article['link'])
            soup = BeautifulSoup(response.text, "html.parser")
            texts = soup.find("div", {"class":"content"})
            
            

            count = 0
            key = 0
            article_text = texts.text

            for ix, keyword in enumerate(keywords):
                new_count = article_text.count(keyword)
                if new_count > count:
                    count = new_count
                    key = ix

            if count > 0:
                results[keywords[key]].append({'article':article['article'], 'link':article['link'], 'keyword':keywords[key], 'count':count})
        
        print('Finished scraping for: ', str(keywords))
        return results
    def get_news(self, keyword):
        url = 'https://www.law-news.ch/kategorie/news'
        response = requests.get(url)

        results = []

        soup = BeautifulSoup(response.text, 'lxml')

        for item in soup.find_all("div", attrs={"class": "td_module_16 td_module_wrap td-animation-stack"}):
            title = item.find("h3").get_text()
            image_link = item.find("img", attrs={"class":"entry-thumb"}).get("src")
            url = item.find("a", attrs={'href': re.compile("^https://")}).get('href')
            date = item.find("time", attrs={"class":"entry-date updated td-module-date"}).get("datetime")
            
            if(keyword in title):
                results.append({'title':title, 'image_link':image_link, 'url':url, 'date': date})
        
        #for headline in headlines:
        #    results.append(headline.text)

        return results

    def get_articles(self, day_link):
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
                result.append({'link':link['href'], 'article': link.get_text()})
        
        return result