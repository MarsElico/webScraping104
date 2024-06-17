import time, requests, csv
from bs4 import BeautifulSoup

# 爬取網站
URL = "https://www.ptt.cc"
url = URL + "/bbs/beauty/index.html"


# 函數功用為送出請求並解析回傳網頁資訊
def get_html(url):
    headers = {"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"
                             "AppleWebKit/537.36 (KHTML, like Gecko)"
                             "Chrome/63.0.3239.132 Safari/537.36"}
    r = requests.get(url, headers=headers, cookies={"over18": '1'})
    if r.status_code == requests.codes.ok:
        r.encoding = 'utf-8'
        soup = BeautifulSoup(r.text, 'lxml')
    else:
        print("HTTP請求失敗...")
        soup = None
    return soup


def get_data(soup, date):
    articles = []
    pag_div = soup.find('div', class_='btn-group btn-group-paging')
    pag_a = pag_div.find_all("a", class_='btn')
    prev_url = pag_a[1]["href"]

    tag_div = soup.find_all("div", class_="r-ent")
    for tag in tag_div:
        if tag.find("div", class_='date').text.strip() == date:
            push_number = 0
            push_str = tag.find("div", class_="nrec").text
            if push_str:
                try:
                    push_number = int(push_str)
                except ValueError:
                    if push_str == "爆":
                        push_number = 100
                    elif push_str.startswith("X"):
                        push_number = -100

            if tag.find("a"):
                href = tag.find("a")['href']
                title = tag.find("a").text
                author = tag.find("div", class_="author").string

                b_soup = get_html(URL + href)
                b_div = b_soup.find("div", id='main-content')
                photos = b_div.find_all("a")
                for photo in photos:
                    url_photo = photo['href']
                    if url_photo.startswith("https://i.imgur"):
                        articles.append([title, href, push_number, author, url_photo])
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

print("今天有: " + str(len(all_title)) + "張圖片")
with open("pttbeauty.csv", "w+", encoding="utf-8") as fp:
    writer = csv.writer(fp)
    writer.writerow(["title", "href", "push_number", "author", "photo-src"])
    for article in all_title:
        writer.writerow(article)
