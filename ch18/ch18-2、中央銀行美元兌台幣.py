# url_domain = "https://www.cbc.gov.tw/tw/"
# url = "https://www.cbc.gov.tw/tw/lp-645-1-1-20.html"
import time

import requests
from bs4 import BeautifulSoup
from 爬蟲_OREILLY.write_csv import write_csv
import csv


# print(numpy.zeros(10)[:2])
def get_data(url, data_):
    html = requests.get(url)
    bs = BeautifulSoup(html.text, "html.parser")
    table = bs.find("table")
    rows = table.find_all("tr")
    for row in rows:
        cols = row.find_all(["td", "th"])  # list
        # 跳過空列
        if not cols:
            continue
        cols = [col.text.replace("\n", "").replace("\r", "").replace("  ", "") for col in cols]  # 文字去掉換行符號或回車符號
        data_.append(cols)
    next_url = bs.find("li", class_="next")
    next_url = next_url.find("a")["href"] if next_url else None
    return next_url


def get_all_data():
    url = "https://www.cbc.gov.tw/tw/lp-645-1-1-20.html"
    url_domain = "https://www.cbc.gov.tw/tw/"
    data = []
    print("爬取中...")
    next_url = get_data(url, data)
    count = 0
    while next_url:
        time.sleep(1)
        count = waiting(count)
        next_url = get_data(url_domain + next_url, data)
    return data


def waiting(count: int):
    print("請稍等" + "." * count)
    if count < 10:
        count += 1
    else:
        count = 0
    return count


def moneyname(name):
    pos = name.find(")")
    return name[0:pos + 1].strip()  # .strip()去掉空格，效果等於.replace(" ", "")


def beauty(file_name_):
    with open(file_name_, "r", encoding="big5") as f:
        csv_ = csv.reader(f)
        list_ = list(csv_)
        list_ = list(filter(lambda x: x != ['標題(日期)', 'NTD/USD'], list_))
        list_.insert(0, ['標題(日期)', 'NTD/USD'])
        f.close()
    with open(file_name_, "w", encoding="big5", newline="") as f:
        csv_ = csv.writer(f)
        csv_.writerows(list_)
        f.close()


file_name = "USD to TWD.csv"
data = get_all_data()
write_csv(file_name, data)
beauty(file_name)
print("寫入完成")
