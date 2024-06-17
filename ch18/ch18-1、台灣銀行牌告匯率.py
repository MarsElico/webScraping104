# table > tr > td = th
# print(cols[0])
"""
data = get_twbank_rate()
write_csv("TW-money.csv", data)
print("寫入完成")
"""
"""這兩個做法都是為了取得csv每個row的數字資料
# df = pandas.read_csv(file_name, encoding="big5")
# for row in df.itertuples(index=True):  # for row in df.loc
#     print(row[2:])


with open(file_name, encoding="big5") as f:
    csv = csv.reader(f)
    list_ = list(csv)
    f.close()
print(list_)
"""
import numpy
import pandas
import requests
from bs4 import BeautifulSoup
from 爬蟲_OREILLY.write_csv import write_csv
from matplotlib import pyplot
import csv


# print(numpy.zeros(10)[:2])
def get_twbank_rate():
    data_ = []
    url = "https://rate.bot.com.tw/xrt?Lang=zh-TW"
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
    return data_


def moneyname(name):
    pos = name.find(")")
    return name[0:pos + 1].strip()  # .strip()去掉空格，效果等於.replace(" ", "")


def beauty_moneyname(df_):
    """把第一欄的 '美金(USD) 美金(USD)' 改成 '美金(USD)'"""
    money = [moneyname(i) for i in df_["幣別"]]
    money.insert(0, "幣別")
    df_["幣別"] = pandas.Series(money)


def beauty(file_name_):
    df_ = pandas.read_csv(file_name_, encoding="big5")
    df_ = df_.drop(df_.index[0])
    df_ = df_.iloc[:, 0:5]  # [rows, cols]
    beauty_moneyname(df_)
    df_.columns = ["幣別", "本行買入(現金)", "本行賣出(現金)", "本行買入(即期)", "本行賣出(即期)"]
    df_.to_csv(file_name_, index=False, encoding="big5")


file_name = "TW-money.csv"
data = get_twbank_rate()
write_csv(file_name, data)
beauty(file_name)
print("寫入完成")

with open(file_name, encoding="big5") as f:
    csv = csv.reader(f)
    data_list = list(csv)
    f.close()
first_row = data_list[0]  # TODO
first_col = data_list[:][0]
data_list = data_list[1:][1:]
print(data_list)
data_list = [float(f) for row in data_list for f in row]
# print(data_list)
pyplot.plot(numpy.zeros(4), data_list[1][1:])
pyplot.show()
