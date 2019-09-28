class Scraper:
  def __init__(self):
    self.laws = [{'count':5, 'link':'http://www.arnoutdevos.net'}, {'count':4, 'link':'http://www.epfl.ch'}]

  def scrape(self, keyword):
    return self.laws