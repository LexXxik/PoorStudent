from bs4 import BeautifulSoup as soup
from bs4 import *
import requests

def storeSearch (product, store):
    url = store['url']
    if product["name"] == "":
        return ""
    else:
        url += store["search"] + product["name"]

    if product['cathegory'] == "Fruit&Veg":
        url += store['Fruit&Veg']
    elif product['cathegory'] == 'Meat':
        url += store['Meat']

    url += store['sort']
    return url

def getItemsTesco(url):
    url="https://www.tesco.com/groceries/en-GB/search?query=chicken&department=Fresh%20Meat%20%26%20Poultry&viewAll=department"
    print('Starting the method')
    headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.76 Safari/537.36', "Upgrade-Insecure-Requests": "1","DNT": "1","Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8","Accept-Language": "en-US,en;q=0.5","Accept-Encoding": "gzip, deflate"}
    uClient = requests.get(url, headers=headers, allow_redirects=True)
    print(uClient.status_code)
    print('Page requested')
    page_soup = soup(uClient.text, "html.parser")
    print('Page parsed to soup')
    print('Page closed')

    all_results = page_soup.find_all("li", class_="product-list--list-item")
    print('Items found')
    if len(all_results) == 0:
        return []

    # for result in all_results:

    return all_results