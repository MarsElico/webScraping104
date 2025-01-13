from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException, NoSuchElementException
import pandas as pd
import time
import os


class JobScraper:
    def __init__(self):
        # 設定 Chrome 選項
        options = webdriver.ChromeOptions()
        # options.add_argument('--headless')  # 無頭模式
        # options.add_argument('--disable-gpu')
        # options.add_argument('--no-sandbox')
        # options.add_argument('--disable-dev-shm-usage')
        # options.add_argument('--window-size=1920,1080')

        # 初始化 driver
        self.driver = webdriver.Chrome(options=options)
        self.wait = WebDriverWait(self.driver, 10)

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
        job_links = []
        job_elements = self.driver.find_elements(By.CSS_SELECTOR, "a.info-job__text")
        for element in job_elements:
            href = element.get_attribute('href')
            if href:
                # 轉換網址格式
                job_id = href.split('/')[-1].split('?')[0]
                converted_url = f"https://www.104.com.tw/job/{job_id}?jobsource=joblist_search"
                job_links.append(converted_url)
        return job_links

    def extract_job_detail(self, url):
        """提取單個職位的詳細信息"""
        try:
            self.driver.get(url)
            time.sleep(2)  # 等待頁面加載

            # 取得工作標題
            job_title = self.wait.until(
                EC.presence_of_element_located((By.CSS_SELECTOR, "h1.job-header__title"))
            ).text

            # 獲取各個部分的內容
            try:
                content = self.driver.find_element(By.CSS_SELECTOR, "p.mb-5").text
            except NoSuchElementException:
                content = ""

            try:
                types = self.driver.find_element(By.CSS_SELECTOR, "div.category-item").text
            except NoSuchElementException:
                types = ""

            try:
                other = self.driver.find_element(By.CSS_SELECTOR, "p.m-0").text
            except NoSuchElementException:
                other = ""

            try:
                tools = self.driver.find_element(
                    By.CSS_SELECTOR,
                    ".job-requirement-table div:nth-of-type(5) div.t3"
                ).text
            except NoSuchElementException:
                tools = ""

            try:
                skill = self.driver.find_element(
                    By.CSS_SELECTOR,
                    ".job-requirement-table div:nth-of-type(6) div.t3"
                ).text
            except NoSuchElementException:
                skill = ""

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
        "https://www.104.com.tw/jobs/search/?jobcat=2007001017&jobsource=joblist_search&area=6001008000&page=1",
        # "https://www.104.com.tw/jobs/search/?jobcat=2007001007&jobsource=joblist_search&area=6001008000&page=1",
        # "https://www.104.com.tw/jobs/search/?jobcat=2007001009&jobsource=joblist_search&area=6001008000&page=1",
        # "https://www.104.com.tw/jobs/search/?jobcat=2007001015&jobsource=joblist_search&area=6001008000&page=1",
    ]
    filenames = [
        "全端工程師.csv",
        # "系統分析師.csv",
        # "其他資訊專業人員.csv",
        # "前端工程師.csv",
    ]
    for url, filename in zip(urls, filenames):
        scrape_104_jobs(url, filename)
