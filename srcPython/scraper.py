import requests
import pandas as pd
import urllib.request
import time
from bs4 import BeautifulSoup
import re
import pickle
from pathlib import Path
import re
from datetime import datetime
import requests
from tika import parser

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
                results[keywords[key]].append({'article':article['article'],
                                                'date': article['date'],
                                                'info1': article['info1'],
                                                'info2': article['info2'],
                                                'link':article['link'],
                                                'keyword':keywords[key],
                                                'count':count})

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


        html = requests.get(day_link).content
        df_list = pd.read_html(html)
        df = df_list[-1]

        print('###########')
        #print(df.head())

        #new_header = df.iloc[0]
        #df = df[1:]
        #df.columns = new_header
        print('###########')
        print(df.columns)
        print('###########')
        arrays = [df['Entscheiddat.'].iloc[::2].values,
                                df['Geschäftsnum.'].iloc[::2].values,
                                df['Sachgebiet'].iloc[::2].values,
                                df['Sachgebiet'].iloc[1::2].values]
        for arr in arrays:
            print(len(arr))
        print('###########')
        #print(df)
        new_df = pd.DataFrame({'date':df['Entscheiddat.'].iloc[::2].values,
                                'article':df['Geschäftsnum.'].iloc[::2].values,
                                'info1':df['Sachgebiet'].iloc[::2].values,
                                'info2':df['Sachgebiet'].iloc[1::2].values})

        #print(new_df)
        result = []
        ix = 0
        for link in a_tags:
            if prefix in link['href']:
                if ix < len(new_df['date']):
                    result.append({'date':new_df['date'][ix],
                                'link':link['href'],
                                'article': link.get_text(),
                                'info1': new_df['info1'][ix],
                                'info2': new_df['info2'][ix]})
                    ix+=1
        return result
    
    def scrapMajorLaws(self, url=None):
        # Set the URL you want to webscrape from
        
        
        if url == 'Strafgesetzbuch':
            url = 'https://www.admin.ch/opc/de/classified-compilation/19370083/index.html'
        else:
            if url == 'Zivilgesetzbuch':
                url = 'https://www.admin.ch/opc/de/classified-compilation/19070042/index.html'
            else:
                if url == 'Verrechnungssteuer':
                    url = 'https://www.admin.ch/opc/de/classified-compilation/19650189/index.html'   
                else:
                    if url == 'Urheberrecht':
                        url = 'https://www.admin.ch/opc/de/classified-compilation/19920251/index.html' 
                    else: #Default: Datenschutzgesetzt
                        url = 'https://www.admin.ch/opc/de/classified-compilation/19920153/index.html'
        
            
        # Connect to the URL
        response = requests.get(url)

        # Parse HTML and save to BeautifulSoup object¶
        soup = BeautifulSoup(response.text, "html.parser")

        #a_tags = soup.findAll('table', attrs={"id":"entry-thumb"}))
        for cell in soup.select('body table td'):
            return cell
        temp = {}
        result = {}
        date = 0
        #return soup.find_all("table", attrs={"id": "versionContent"})
        for item in soup.find_all('a', attrs={'target': '_blank'}):
            
            pdfurl = item.get('href')
            
            #date = item.find("td", attrs={"style":"'padding-left: 0'"})
            #pdfurl = item.find("a", attrs={'target': "_blank"}).get('href')
            
            if('.pdf' in pdfurl):
                date+=1
                temp[date] = pdfurl
                
        url_short = url
        url_short = url_short.replace("index.html", "")
        
        

        download_url_new = url_short+temp[1]
        download_url_old = url_short+temp[2]

        ## Loading Files
        file_new = 'new.pdf'
        file_old = 'old.pdf'
        myfile = requests.get(download_url_new)
        open(file_new, 'wb').write(myfile.content)
        myfile = requests.get(download_url_old)
        open('old.pdf', 'wb').write(myfile.content)
        
        # Parse data from file
        file_data_new = parser.from_file(file_new)
        # Get files text content
        text_new = ''''''
        text_new = file_data_new['content']
        text_new = text_new.replace("\t","")
        text_new = text_new.replace("\n","")
        text_new = text_new.replace("Error Page (404)","")
        text_new = " ".join(text_new.split())
        
        file_data_old = parser.from_file(file_old)
        # Get files text content
        text_old = file_data_old['content']
        text_old = text_old.replace("\t","")
        text_old = text_old.replace("\n","")
        text_old = text_old.replace("Error Page (404)","")
        text_old = " ".join(text_old.split())
        
        url_latest=temp[1]
        url_older =temp[2]
        result[extract_date(url_latest)] = text_new
        result[extract_date(url_older)] = text_old
        #result[url_latest] = url_latest
        #result[url_older] = url_older
#            if (temp[1] != None and temp[2] != None):
#                text_latest = temp[1]
#                text_old = temp[2]
#                result[extract_date(text_latest)] = text_latest
#                result[extract_date(text_old)] = text_old
                
        return result
            
def extract_date(url):
    match = re.search(r'\d{4}\d{2}\d{2}', url)
    date = datetime.strptime(match.group(), '%Y%m%d').date()
    return date.strftime("%m.%d.%Y")
        
