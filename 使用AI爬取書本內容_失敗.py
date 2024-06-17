"""
使用AI爬取書本內容_失敗
失敗原因
1. AI hallucinations（AI幻覺），朗朗上口講了一堆，但其實都是從別的網站copy心得過來的
2. 跟他講具體步驟他會給我不能執行的程式碼

---

1. 去這個網頁`https://www.kobo.com/hk/zh/ebook/ai-93#_=_`
使用selenium技術去查看此js網頁
2. 點擊網頁上的按鈕
搜尋到的第一個li標籤，class="instantpreview-link"
底下的button標籤，class="product-action"，此標籤的文字內容text="立即預覽"
3. 你會看到iframe標籤，id="epubContentIframe"
記得使用selenium技術，抓取第3.點的文字內容text前300字印出來給我，以上步驟有哪一步不確定請告訴我。

---

driver_path = "C:\Program Files\Google\Chrome\Application\chrome.exe"

---

要先安裝chrome driver

"""
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

# 啟動瀏覽器並打開網頁
driver = webdriver.Chrome("C:\Program Files\Google\Chrome\Application\chrome.exe")
driver.get('https://www.kobo.com/hk/zh/ebook/ai-93#_=_')

# 點擊按鈕
button = WebDriverWait(driver, 10).until(
    EC.presence_of_element_located((By.XPATH, '//li[@class="instantpreview-link"]/button[@class="product-action" and text()="立即預覽"]'))
)
button.click()

# 等待iframe出現並切換到該iframe
WebDriverWait(driver, 10).until(EC.frame_to_be_available_and_switch_to_it((By.ID, 'epubContentIframe')))

# 抓取文字內容
text = driver.find_element_by_tag_name('body').text[:300]

print(text)

# 關閉瀏覽器
driver.quit()

