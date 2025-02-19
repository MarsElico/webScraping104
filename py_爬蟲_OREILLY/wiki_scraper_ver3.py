from urllib.parse import urlparse


# scheme |> "https"
# hostname = netloc
# geturl = encode |> 詳細資訊
# query |> 問號後的參數
def parse(page_url):
    parsed = urlparse(page_url)
    # 測下來有用的
    print(f"{parsed.scheme}://{parsed.netloc}")
    print(parsed.scheme)
    print(parsed.hostname, parsed.netloc, parsed.hostname == parsed.netloc)
    print(parsed.encode, parsed.geturl)
    print(parsed.query)
    # 測下來沒用的
    # print(parsed.count)
    # print(parsed.index)
    # print(parsed.params)
    # print(parsed.password)
    # print(parsed.path)
    # print(parsed.port)
    # print(parsed.username)


print(dir(urlparse("")))
parse("https://zh.wikipedia.org/zh-tw/【我推的孩子】")  # https://zh.wikipedia.org
parse("https://example.com/path/to/resource?query=example&lang=en")  # https://example.com
parse("https://www.google.com/")  # https://www.google.com
parse("https://photos.google.com/u/0/?pli=1&pageId=none")  # https://photos.google.com
parse("https://www.youtube.com/")  # https://www.youtube.com
parse("https://regex101.com/")  # https://regex101.com
