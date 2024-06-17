# pip install selenium
# pip install webdriver_manager
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from bs4 import BeautifulSoup

# 設置瀏覽器驅動
service = Service(ChromeDriverManager().install())
browser = webdriver.Chrome(service=service)

# 打開網頁
browser.get('https://time4jobs.104.com.tw/?transType=1&tLat=24.158315&tLon=120.7412085&time=20&address=%E5%8F%B0%E4%B8%AD%E5%B8%82%E5%A4%AA%E5%B9%B3%E5%8D%80%E5%A4%A7%E8%88%88%E5%8D%81%E4%B8%83%E8%A1%97101%E8%99%9F&keyword=python&lat=24.158315&lon=120.7412085&order=12&asc=0&dist=6&showLatLon=1')

# 獲取網頁的 HTML
html_content = browser.page_source

# 這裡可以加入更多操作，如點擊、滾動等

# 關閉瀏覽器
browser.quit()


# 处理页面内容
# 这里可以使用任何你想要的方法来解析页面内容，如使用 BeautifulSoup、正则表达式等等
# 例如：
soup = BeautifulSoup(html_content, 'html.parser')
print(soup.text)
