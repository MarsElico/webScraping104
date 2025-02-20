from datetime import datetime

from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException, NoSuchElementException
import pandas as pd
import time
import os
from web_scraper_test測試 import print_element, print_body


class JobScraper:
    def __init__(self):
        # 設定 Chrome 選項
        options = webdriver.ChromeOptions()
        options.add_argument('--headless')  # 無頭模式
        options.add_argument('--disable-gpu')
        options.add_argument('--no-sandbox')
        options.add_argument('--disable-dev-shm-usage')
        options.add_argument('--window-size=1920,1080')

        # 初始化 driver
        self.driver = webdriver.Chrome(options=options)
        self.wait = WebDriverWait(self.driver, 10)

    def _get_element_text(self, selector: str) -> str:
        """安全地獲取元素文字內容"""
        try:
            element = self.driver.find_element(By.CSS_SELECTOR, selector)
            return element.text.strip()
        except NoSuchElementException:
            return ""

    def scroll_to_bottom(self, scroll_pause_time=2):
        """滾動到頁面底部以加載更多內容"""
        last_height = self.driver.execute_script("return document.body.scrollHeight")

        while True:
            # 滾動到底部
            self.driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")

            # 等待加載
            time.sleep(scroll_pause_time)

            # 計算新的滾動高度並與之前的滾動高度進行比較
            new_height = self.driver.execute_script("return document.body.scrollHeight")
            if new_height == last_height:
                break
            last_height = new_height

    def get_job_links(self):
        """獲取所有職位連結"""
        items = self.driver.find_elements(By.CSS_SELECTOR, "div.info-container")
        # print("共有幾個工作=", len(items))  # DEBUG: 測試用

        # 抓取工作內容網址（job-href）
        job_links = []
        for item in items:
            job = item.find_element(By.TAG_NAME, "a")
            # print(job is not None)  # DEBUG: 測試用
            # print_element(item)  # DEBUG: 測試用
            # print_element(job)  # DEBUG: 測試用
            if job is not None:
                # 轉換網址格式
                href = job.get_attribute('href')
                job_links.append(href)
                print(job.text)  # 工作名稱網頁標題
                print(job_links[-1])  # 連結
            else:
                print("該筆欄位空白")
        if len(job_links) == 0:
            print("錯誤！找不到工作")
        return job_links

    def extract_job_detail(self, url):
        """提取單個職位的詳細信息"""
        try:
            self.driver.get(url)
            time.sleep(2)  # 等待頁面加載

            # 取得工作標題
            job_title = self.wait.until(
                EC.presence_of_element_located((By.TAG_NAME, "h1"))
            ).text
            # print(job_title)  # DEBUG: 測試用

            # 獲取各個部分的內容
            content = self._get_element_text("p.mb-5")
            types = self._get_element_text("div.category-item")
            other = self._get_element_text("p.m-0")
            tools = self._get_element_text(".job-requirement-table div:nth-of-type(5) div.t3")
            skill = self._get_element_text(".job-requirement-table div:nth-of-type(6) div.t3")

            return {
                'job': job_title,
                'job-href': url,
                'content': content,
                'types': types,
                'other': other,
                'tools': tools,
                'skill': skill
            }
        except Exception as e:
            print(f"Error extracting job details from {url}: {str(e)}")
            return None

    def scrape_jobs(self, url, output_filename):
        """主要的爬取函數"""
        try:
            # 訪問頁面
            self.driver.get(url)
            time.sleep(3)  # 等待初始加載

            # 滾動頁面以加載更多內容
            self.scroll_to_bottom()

            # 獲取所有職位連結
            job_links = self.get_job_links()
            print(f"Found {len(job_links)} jobs")

            # 爬取每個職位的詳細信息
            jobs_data = []
            for i, link in enumerate(job_links, 1):
                # if i > 5: break  # DEBUG: 測試用
                print(f"Scraping job {i}/{len(job_links)}: {link}")
                job_data = self.extract_job_detail(link)
                if job_data:
                    jobs_data.append(job_data)

            # 轉換為 DataFrame 並保存
            df = pd.DataFrame(jobs_data)

            # 確保輸出目錄存在
            os.makedirs('webscraper', exist_ok=True)
            output_path = os.path.join('webscraper', output_filename)

            # 保存為 CSV，使用 utf-8-sig 編碼以支持中文
            df.to_csv(output_path, index=False, encoding='utf-8-sig')
            print(f"Data saved to {output_path}")

        except Exception as e:
            print(f"Error during scraping: {str(e)}")
        finally:
            self.driver.quit()


def scrape_104_jobs(url, output_filename):
    """便利的包裝函數"""
    scraper = JobScraper()
    scraper.scrape_jobs(url, output_filename)


# 使用示例
if __name__ == "__main__":
    urls = [
        # "https://www.104.com.tw/jobs/search/?jobcat=2007001017&jobsource=joblist_search&area=6001008000&page=1",
        # "https://www.104.com.tw/jobs/search/?jobcat=2007001007&jobsource=joblist_search&area=6001008000&page=1",
        # "https://www.104.com.tw/jobs/search/?jobcat=2007001009&jobsource=joblist_search&area=6001008000&page=1",
        # "https://www.104.com.tw/jobs/search/?jobcat=2007001015&jobsource=joblist_search&area=6001008000&page=1",
        # "https://www.104.com.tw/jobs/search/?jobcat=2007001016&jobsource=joblist_search&area=6001008000&page=1",
        # "https://www.104.com.tw/jobs/search/?jobcat=2009003007&jobsource=joblist_search&area=6001008000&page=1",
        "https://www.104.com.tw/jobs/search/?jobcat=2007001004&jobsource=joblist_search&area=6001008000&page=1",
        "https://www.104.com.tw/jobs/search/?jobcat=2007001003&jobsource=joblist_search&area=6001008000&page=1",
        "https://www.104.com.tw/jobs/search/?jobcat=2009003005&jobsource=joblist_search&area=6001008000&page=1",
        "https://www.104.com.tw/jobs/search/?jobcat=2007001022&jobsource=joblist_search&area=6001008000&page=1",
        "https://www.104.com.tw/jobs/search/?jobcat=2007002002&jobsource=joblist_search&area=6001008000&page=1",
        "https://www.104.com.tw/jobs/search/?jobcat=2007001010&jobsource=joblist_search&area=6001008000&page=1",
        "https://www.104.com.tw/jobs/search/?jobcat=2007002007&jobsource=joblist_search&area=6001008000&page=1",
        "https://www.104.com.tw/jobs/search/?jobcat=2004002005&jobsource=joblist_search&area=6001008000&page=1",
        "https://www.104.com.tw/jobs/search/?jobcat=2007001008&jobsource=joblist_search&area=6001008000&page=1",
        "https://www.104.com.tw/jobs/search/?jobcat=2007001012&jobsource=joblist_search&area=6001008000&page=1",
        "https://www.104.com.tw/jobs/search/?jobcat=2013001006&jobsource=joblist_search&area=6001008000&page=1",
        "https://www.104.com.tw/jobs/search/?jobcat=2007002005&jobsource=joblist_search&area=6001008000&page=1",
        "https://www.104.com.tw/jobs/search/?jobcat=2007001020&jobsource=joblist_search&area=6001008000&page=1",
        "https://www.104.com.tw/jobs/search/?jobcat=2007001014&jobsource=joblist_search&area=6001008000&page=1",
        "https://www.104.com.tw/jobs/search/?jobcat=2007001006&jobsource=joblist_search&area=6001008000&page=1",
        "https://www.104.com.tw/jobs/search/?jobcat=2007001013&jobsource=joblist_search&area=6001008000&page=1",
        "https://www.104.com.tw/jobs/search/?jobcat=2007002003&jobsource=joblist_search&area=6001008000&page=1",
        "https://www.104.com.tw/jobs/search/?jobcat=2013001015&jobsource=joblist_search&area=6001008000&page=1",
        "https://www.104.com.tw/jobs/search/?jobcat=2013001016&jobsource=joblist_search&area=6001008000&page=1",
    ]

    filenames = [
        # "台中市 - 全端工程師.csv",
        # "台中市 - 系統分析師.csv",
        # "台中市 - 其他資訊專業人員.csv",
        # "台中市 - 前端工程師.csv",
        # "台中市 - 後端工程師.csv",
        # "台中市 - 軟韌體測試工程師.csv",
        "台中市 - 軟體工程師.csv",
        "台中市 - 通訊軟體工程師.csv",
        "台中市 - 測試人員.csv",
        "台中市 - 資料工程師.csv",
        "台中市 - 資料庫管理人員.csv",
        "台中市 - 資訊助理.csv",
        "台中市 - 資訊設備管制人員.csv",
        "台中市 - 遊戲企劃.csv",
        "台中市 - 電玩程式設計師.csv",
        "台中市 - 演算法工程師.csv",
        "台中市 - 網頁設計師.csv",
        "台中市 - 網路管理工程師.csv",
        "台中市 - AI工程師.csv",
        "台中市 - Android工程師.csv",
        "台中市 - Internet程式設計師.csv",
        "台中市 - iOS工程師.csv",
        "台中市 - MIS程式設計師.csv",
        "台中市 - UI設計師.csv",
        "台中市 - UX設計師.csv",
    ]
    # 印出開始時間
    start_datetime = datetime.now()
    start_time = start_datetime.strftime("%Y:%m:%d %H:%M:%S")
    print(f"{start_time}開始爬取104工作資訊")

    # 主程式
    for url, filename in zip(urls, filenames):
        scrape_104_jobs(url, filename)
        print(f"保存到{filename}")

    # 印出結束時間
    end_datetime = datetime.now()
    end_time = end_datetime.strftime("%Y:%m:%d %H:%M:%S")
    print(f"{end_time}爬取結束")

    # 計算耗時
    duration = end_time - start_datetime
    hours, remainder = divmod(duration.total_seconds(), 3600)
    minutes, seconds = divmod(remainder, 60)
    print(f"本次爬取耗時{int(hours)}時{int(minutes)}分{int(seconds)}秒")
