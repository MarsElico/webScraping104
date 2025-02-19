import requests
from bs4 import BeautifulSoup


def get_nba_data():
    data_list = []
    url = "https://www.ptt.cc/bbs/NBA/index.html"
    params = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"}
    html = requests.get(url, headers=params)
    if html.status_code == 200:
        bs = BeautifulSoup(html.text, "html.parser")
        blocks = bs.find_all("div", class_="r-ent")
        titles = [block.find("div", class_="title") for block in blocks]
        populars = [block.find("div", class_="nrec") for block in blocks]
        dates = [block.find("div", class_="date") for block in blocks]
        for i in range(len(titles)):
            t = titles[i].a.text if titles[i].a else "N/A"
            p = populars[i].span.text if populars[i].span else "N/A"
            d = dates[i].text
            data_list.append({"標題": t, "人氣": p, "日期": d})
            # print(t, p, d)
        return data_list
    else:
        print("沒有抓到網頁")
        return None


if __name__ == '__main__':
    for data in get_nba_data():
        print(data)
