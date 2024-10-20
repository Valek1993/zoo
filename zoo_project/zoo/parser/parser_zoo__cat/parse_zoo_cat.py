from urllib.request import urlretrieve
import urllib.request, urllib.parse, urllib.error
from bs4 import BeautifulSoup
import requests
import urllib
import urllib.request
import urllib.request, urllib.parse, urllib.error
from db_connect import *
import time

def description_parse(url):
    response = requests.get(url, headers={
        'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36'})
    soup = BeautifulSoup(response.text, 'html.parser')
    try:
        data = soup.find("div", class_='text').text
        return data
    except AttributeError:
        data = "Нет описания"
        return data



def download_image(url, count=0):
    file_name_image = f"image/image_cat/{count}.png"
    file_name = f"../../../../frontend/public/image/image_cat/{count}.png"
    urllib.request.urlretrieve(url, file_name)
    return file_name_image


def parse_manufacurer(title):
    if "All Cats" in title:
        return "All Cats"
    elif "Felix" in title:
        return "Felix"
    elif "Brit" in title:
        return "Brit"
    elif "Friskies" in title:
        return "Friskies"
    elif "Hills" in title:
        return "Hills"
    elif "GOURMET" in title:
        return "GOURMET"
    else:
        return "Производитель не указан"


def parse_availability(data):

    if data.find("div", class_='in_stock in_stock_product'):
        return data.find("div", class_='in_stock in_stock_product').text.split(':')[1].strip()
    elif data.find("div", class_='pod_zakaz_stock_product'):
        return data.find("div", class_='pod_zakaz_stock_product').text.split(':')[1].strip()




def parse_sale(old_price):
    if old_price:
        old_price = old_price.text[:-2]
        return True, old_price
    else:
        return False, 0



conn = get_connection()




def parse_zoo():
    url1 = ["https://zoobaza.by/dlya-koshek/vlazhnyj-korm-dlya-koshek/?page=6"]
    count_image = 665
    for i in url1:
        response = requests.get(i, headers={'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36'})
        time.sleep(0.5)
        soup = BeautifulSoup(response.text, 'html.parser')
        data = soup.find_all("div", class_='product')
        time.sleep(0.5)
        for i in range(24):
            price = data[i].find("div", class_='price').text[:-2] #price
            a = data[i].find_all("a")
            dd = data[i].find_all("dd")
            title = a[1].text #title
            description = description_parse(a[1]['href']) # description
            weight = 0
            age_of_the_animal = ""
            animal_size = ""
            if len(dd) == 1:
                weight = dd[0].text
            elif len(dd) == 2:
                weight = dd[0].text
                age_of_the_animal = dd[1].text
            elif len(dd) == 3:
                weight = dd[0].text
                age_of_the_animal = dd[1].text
                animal_size = dd[2].text
            availability = parse_availability(data[i])
            name = "кошка"
            link = a[1]['href']
            image_link = a[0].find("img", class_="img-responsive")["src"]
            manufacturer = parse_manufacurer(title)
            sale, old_price = parse_sale(data[i].find("div", class_='old_price'))
            image = download_image(image_link, count_image)
            id_image = count_image
            count_product = 1
            count_image += 1
            time.sleep(1)
            print(id_image, count_product,  price,  name,  title, weight, age_of_the_animal, animal_size, availability, price, description, link, image, manufacturer, old_price, sale,  sep="\n")
            insert(conn, id_image, count_product,  name, title, weight, age_of_the_animal, animal_size, availability, price, image, description, link, manufacturer, sale, old_price)

parse_zoo()