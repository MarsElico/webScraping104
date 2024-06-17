from urllib.request import urlopen
from bs4 import BeautifulSoup

url = "https://www.momoshop.com.tw/main/Main.jsp"
html = urlopen(url)     # requests.get也可以
bs = BeautifulSoup(html, "html.parser")  # 美化排版
product = bs.find_all("span", class_="prdName")
product = [element.get_text() for element in product]
price = bs.find_all("span", class_="price")
price = [element.get_text() for element in price]
# print(product, price)
for i in range(len(product)):
    print(price[i], "|", product[i])
