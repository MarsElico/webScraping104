import requests
from bs4 import BeautifulSoup
# from ptt_nba import get_nba_data  # TODO:ModuleNotFoundError: No module named 'ptt_nba'


def write_html(file_name, html):
    write_text(file_name, html.text)


def write_text(file_name, html_text):
    with open(file_name, "w", encoding="utf-8") as f:
        bs = BeautifulSoup(html_text, "html.parser")
        prettify_text = bs.prettify()
        f.write(prettify_text)
        print("寫入成功")


if __name__ == '__main__':
    url = "https://www.ptt.cc/bbs/NBA/index.html"
    params = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"}
    html = requests.get(url, params=params)
    write_html("ptt_nba.html", html)
