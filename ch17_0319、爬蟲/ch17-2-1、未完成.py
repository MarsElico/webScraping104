import ch17_1_3_再解一次 as prev_solution


def get_data(soup, date_, url_domain, cookies_):
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
        # 爬取圖片
        # 點進去文章頁再爬取
        page_bs = prev_solution.get_html_soup(url_domain + href, cookies=cookies_)
        div = page_bs.find("div", id='main-content')
        imgs = div.find_all("a")
        img_urls = [img["href"] for img in imgs if img["href"].startswith("https://i.imgur")]
        for img_url in img_urls:
            articles.append({
                "title": title,
                "href": href,
                "push_count": push_str,
                "author": author,
                "date": date,
                "img": img_url
            })

    return articles, prev_url


url = "https//www.ptt.cc"
cookies = {"over18": "1"}
bs = prev_solution.get_html_soup("https://www.ptt.cc/bbs/beauty/index.html", cookies=cookies)
# print(bs)
current_title, prev_url = get_data(bs, "3/21", "https://www.ptt.cc", cookies_=cookies)
print(current_title)
