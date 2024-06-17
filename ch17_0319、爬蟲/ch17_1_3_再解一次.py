"""獲得今天的日期API
url = "https://www.ptt.cc/bbs/NBA/index.html"
print(time.strftime("%m/%d").lstrip("0"))
print(time.strftime("%m/%d").lstrip())
print(time.strftime("%m/%d"))
3/21
03/21
03/21
"""
"""測試儲存成json有無問題
url = "https://www.ptt.cc/bbs/NBA/index.html"
bs = get_html_soup(url)
data, prev_url = get_data(bs, "3/20")
with open("ptt NBA.json", "w", encoding="utf-8") as f:
    json.dump([data], f, indent=2, sort_keys=True, ensure_ascii=False)
print("儲存成功")
"""
"""測試儲存成json有無問題
url = "https://www.ptt.cc/bbs/NBA/index.html"
bs = get_html_soup(url)
data, prev_url = get_data(bs, "3/20")
write_json("ptt NBA.json", [data])
print("儲存成功")
"""
"""
        # 判斷文章的日期
        if div.find("div", class_="date").text.strip() == date_:
            print(div.find("div", class_="date").text)
            print(div.find("div", class_="date").text.strip())
            print(date_)
"""
# 匯入要使用的模組
import time, requests
from bs4 import BeautifulSoup
from 爬蟲_OREILLY.write_json import write_json


def get_html_soup(url_, cookies=""):
    headers = {"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"
                             "AppleWebKit/537.36 (KHTML, like Gecko)"
                             "Chrome/63.0.3239.132 Safari/537.36"}
    html = requests.get(url_, headers=headers, cookies=cookies)
    if html.status_code == requests.codes.ok:
        html.encoding = "utf8"
        soup = BeautifulSoup(html.text, "lxml")
    else:
        print("HTTP請求錯誤...", url_)
        soup = None
    return soup


def get_data(soup, date_):
    articles = []
    # 取得上一頁的超連結
    prev_url = soup.find("div", class_="btn-group-paging") \
        .find_all("a", class_="btn") \
        [1]["href"]
    # 爬取每個區塊
    tag_divs = soup.find_all("div", class_="r-ent")
    for div in tag_divs:
        # 判斷文章的日期
        if div.find("div", class_="date").text.strip() != date_:
            continue
        # 跳過已刪除的文章
        if not div.find("a"):
            continue
        # 爬取推文數，推爆：超過99讚；黑爆：超過99噓
        push_str = div.find("div", class_="nrec").text
        a = div.find("a")
        # 爬取標題
        title = a.text
        # 爬取文章網址
        href = a["href"]
        # 爬取發文日期
        date = div.find("div", class_="date").text
        # 爬取作者
        author = div.find("div", class_="author").text
        articles.append({
            "title": title,
            "href": href,
            "push_count": push_str,
            "author": author,
            "date": date
        })

    return articles, prev_url


def today():
    return time.strftime("%m/%d").lstrip("0")


def get_today_data(url, url_domain):
    dict_list = []
    print("爬取中...")
    bs = get_html_soup(url)
    if not bs:
        return
    # 取得今日的資料清單
    current_title, prev_url = get_data(bs, today())
    while current_title:
        dict_list += current_title
        print("請稍等~")
        # 時間間隔，避免網路塞車
        time.sleep(2)
        # 獲取上一頁的html檔
        bs = get_html_soup(url_domain + prev_url)
        # 繼續取得資料清單
        current_title, prev_url = get_data(bs, today())
    print(f"今天有 {len(dict_list)} 篇文章")
    return dict_list


def href_to_url(href, domain):
    return domain + href if href else ""


# 主程式
if __name__ == '__main__':
    data = get_today_data("https://www.ptt.cc/bbs/NBA/index.html", "https://www.ptt.cc")
    for x in data:
        x["href"] = href_to_url(x["href"], "https://www.ptt.cc")  # 把json中的href網址都加上"https://www.ptt.cc"
    write_json("ptt NBA.json", data)
    print("儲存成功")
