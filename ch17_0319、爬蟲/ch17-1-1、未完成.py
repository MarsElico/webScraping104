import json
import time

import requests
from bs4 import BeautifulSoup


def get_today_data(url1_, url2_):
    all_titles = []
    print("爬取中...")
    soup = get_html_soup(url2_)
    if soup:
        # 取得今天日期並符合日期格式
        # today = time.strftime("%m/%d").lstrip("0")
        today = "3/20"
        # 取得文章清單
        current_title, prev_url = get_data(soup, today)

        while current_title:
            all_titles += current_title
            print("請稍等~")
            time.sleep(2)
            # 繼續尋找是否有今日文章
            soup = get_html_soup(url1_ + prev_url)
            current_title, prev_url = get_data(soup, today)
            # print(prev_url)
    print("今天有:" + str(len(all_titles)) + " 篇文章")
    return all_titles

def get_data(soup, date_):
    articles = []
    # 上一頁連結
    # AttributeError: 'NoneType' object has no attribute 'find_all'
    pag_div = soup.find("div", class_="btn-group-paging")
    pag_a = pag_div.find_all("a", class_="btn")
    prev_url = pag_a[1]["href"]

    # 爬取每個區塊
    tag_divs = soup.find_all("div", class_="r-ent")
    for div in tag_divs:
        # 發文日期
        date = find_text(div, "div", "date")
        # 停止條件
        # ValueError: not enough values to unpack (expected 2, got 0)
        if date.lstrip() != date_:
            continue
        # 標題
        title = find_(div, "div", "title")
        if title.a:
            title = title.a.text
        # 作者
        writer = find_text(div, "div", "author")
        # 讚數
        # 推爆：超過99讚；黑爆：超過99噓
        popular = find_text(div, "div", "nrec")
        # 文章網址
        url = find_(div, "a", "")
        if url:
            url = url["href"]
        articles.append({
            "title": title,
            "href": url,
            "push_count": popular,
            "author": writer,
            "date": date
        })
        # print(articles)
    # print(html.text)
    return articles, prev_url


def find_text(parent, tag, class_):
    return parent.find(tag, class_=class_).text


def find_(parent, tag, class_):
    return parent.find(tag, class_=class_)


def get_html_soup(url_):
    headers = {"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"
                             "AppleWebKit/537.36 (KHTML, like Gecko)"
                             "Chrome/63.0.3239.132 Safari/537.36"}
    html = requests.get(url_, headers=headers)
    html.encoding = "utf8"
    soup = BeautifulSoup(html.text, "html.parser")
    return soup


url1 = "https://www.ptt.cc"
url2 = url1 + "/bbs/NBA/index.html"
# bs = get_html_soup(url2)
# get_data(bs)
results = get_today_data(url1, url2)
with open("ptt NBA.json", "w", encoding="utf-8") as f:
    json.dump(results, f, indent=2, sort_keys=True, ensure_ascii=False)
print("儲存成功")
