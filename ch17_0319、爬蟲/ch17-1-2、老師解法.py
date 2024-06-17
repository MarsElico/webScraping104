# 匯入要使用的模組
import time, requests, json
from bs4 import BeautifulSoup

# 欲爬取的HTML網頁的URL網址
URL = "https://www.ptt.cc"
url = URL + "/bbs/NBA/index.html"


# 建立函數 , 其功能為送出請求以及取得網頁資料並使用BeautifulSoup解析網頁
def get_html(url):
    headers = {"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"
                             "AppleWebKit/537.36 (KHTML, like Gecko)"
                             "Chrome/63.0.3239.132 Safari/537.36"}
    r = requests.get(url, headers=headers)
    if r.status_code == requests.codes.ok:
        r.encoding = "utf8"
        soup = BeautifulSoup(r.text, "lxml")
    else:
        print("HTTP請求錯誤..." + url)
        soup = None
    return soup


# 建立函數 , 其功能為爬取所有文章資料
def get_data(soup, date):
    articles = []
    # 取得上一頁的超連結
    pag_div = soup.find("div", class_="btn-group btn-group-paging")
    pag_a = pag_div.find_all("a", class_="btn")
    prev_url = pag_a[1]["href"]

    tag_div = soup.find_all("div", class_="r-ent")
    for tag in tag_div:
        # 判斷文章的日期
        if tag.find("div", class_="date").text.strip() == date:
            # 爬取推文數
            push_number = 0
            push_str = tag.find("div", class_="nrec").text
            if push_str:
                try:
                    push_number = int(push_str)
                except ValueError:
                    if push_str == '爆':
                        push_number = 99
                    elif push_str.startswith('X'):
                        push_number = -10
            # 爬取超連結和標題文字
            if tag.find("a"):
                href = tag.find("a")["href"]
                title = tag.find("a").text
                author = tag.find("div", class_="author").string
                articles.append({
                    "title": title,
                    "href": href,
                    "push_count": push_number,
                    "author": author
                })

    return articles, prev_url


all_title = []
print("爬取中...")
soup = get_html(url)
if soup:
    # 取得今天日期並符合日期格式
    today = time.strftime("%m/%d").lstrip('0')
    # 取得文章清單
    current_title, prev_url = get_data(soup, today)
    while current_title:
        all_title += current_title
        print("請稍等~")
        time.sleep(2)
        # 尋找是否有今日文章
        soup = get_html(URL + prev_url)
        current_title, prev_url = get_data(soup, today)

print("今天有: " + str(len(all_title)) + " 篇文章")
with open("ptt_NBA.json", "w", encoding="utf-8") as fp:
    json.dump(all_title, fp, indent=2, sort_keys=True, ensure_ascii=False)
