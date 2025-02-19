# external_link = f'{webscraper}{link["href"]}'
# print(external_link)
# from requests.exceptions import InvalidURL
# UnicodeEncodeError: 'ascii' codec can't encode characters in position 11-17: ordinal not in range(128)
# from urllib.request import urlopen
# from urllib.error import HTTPError
# from urllib.error import URLError
# TODO 只能下載一些奇怪的文件

from bs4 import BeautifulSoup
import requests
from requests.exceptions import InvalidURL
from requests.exceptions import HTTPError
from write_html import write_text
import re

pages = []
count_limit = 100


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
        a_tags = bs.find("div", id="bodyContent").find_all("a", href=re.compile("^((/wiki/)(?!([A-Z][a-z]*:)))"))
    except AttributeError:
        print(f'不存在的標籤，網址為{page_url}')
        return
    for a in a_tags:
        external_link = f'{prefix}{a["href"]}'
        if external_link not in pages:
            pages.append(external_link)
            # 避免遞迴錯誤
            global count_limit
            if count_limit <= 0:
                return
            try:
                count_limit -= 1
                get_external_links(external_link)
            except RecursionError:
                count_limit -= 1
                return


def write_html_for_unittest(file_name, page_url):
    html = requests.get(page_url)
    bs = BeautifulSoup(html.text, "html.parser")
    html_text = bs.find("div", id="bodyContent").prettify()
    write_text(file_name, html_text)


url = "https://zh.wikipedia.org/zh-tw/【我推的孩子】"
prefix = "https://zh.wikipedia.org"
get_external_links(url)
print(pages)
# write_html_for_unittest("我推的孩子.html", webscraper)
