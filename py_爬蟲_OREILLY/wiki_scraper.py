# external_link = f'{webscraper}{link["href"]}'
# print(external_link)
# from requests.exceptions import InvalidURL
# UnicodeEncodeError: 'ascii' codec can't encode characters in position 11-17: ordinal not in range(128)
# from urllib.request import urlopen
# from urllib.error import HTTPError
# from urllib.error import URLError

from bs4 import BeautifulSoup
import requests
from requests.exceptions import InvalidURL
from requests.exceptions import HTTPError
from write_html import write_text

pages = set()


def get_external_links(page_url):
    # open html file
    try:
        html = requests.get(page_url)
    except HTTPError:
        print(f"HTTP錯誤，網址為：{page_url}")
        return
    except InvalidURL:
        print(f"伺服器錯誤 或 URL輸入錯誤，網址為：{page_url}")
        return
    # 搜尋所有a標籤
    try:
        bs = BeautifulSoup(html.text, "html.parser")
        a_tags = bs.find("div", id="bodyContent").find_all("a")
    except AttributeError:
        print(f'不存在的標籤，網址為{page_url}')
        return

    for link in a_tags:
        external_link = ""
        # 不是href連結
        if "href" not in link.attrs:
            continue
        # 頁面不存在
        if "title" in link.attrs and "頁面不存在" in link["title"]:
            continue
        # 內部連結
        if "#" in link["href"]:
            continue
        # 網址只有/wiki/，不完整
        if "http" not in link["href"]:
            external_link = f'{prefix}{link["href"]}'

        # 避免重複
        if external_link != "" and external_link not in pages:
            pages.add(external_link)
            get_external_links(external_link)


def write_html_for_unittest(file_name, page_url):
    html = requests.get(page_url)
    bs = BeautifulSoup(html.text, "html.parser")
    html_text = bs.find("div", id="bodyContent").prettify()
    write_text(file_name, html_text)


url = "https://zh.wikipedia.org/zh-tw/【我推的孩子】"
prefix = "https://zh.wikipedia.org"
get_external_links(url)
print(pages)
write_html_for_unittest("我推的孩子.html", url)
