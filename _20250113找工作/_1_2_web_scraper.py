# 相比1-1增加了反104偵測機器人，避免爬不到資料
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException, NoSuchElementException
import pandas as pd
import time
import os
import random
from fake_useragent import UserAgent
import logging
from datetime import datetime


class JobScraper:
    def __init__(self):
        # 設定日誌
        self.setup_logging()

        # 設定 Chrome 選項
        self.options = webdriver.ChromeOptions()

        # 使用隨機 User-Agent
        ua = UserAgent()
        self.options.add_argument(f'user-agent={ua.random}')

        # 其他瀏覽器設定
        self.options.add_argument('--disable-gpu')
        self.options.add_argument('--no-sandbox')
        self.options.add_argument('--disable-dev-shm-usage')
        self.options.add_argument('--window-size=1920,1080')

        # 添加瀏覽器指紋偽裝
        self.options.add_argument('--disable-blink-features=AutomationControlled')
        self.options.add_experimental_option("excludeSwitches", ["enable-automation"])
        self.options.add_experimental_option('useAutomationExtension', False)

        # 初始化 driver
        self.driver = webdriver.Chrome(options=self.options)
        self.driver.execute_script("Object.defineProperty(navigator, 'webdriver', {get: () => undefined})")

        # 設定較長的等待時間
        self.wait = WebDriverWait(self.driver, 15)

    def setup_logging(self):
        """設定日誌"""
        log_dir = 'scraper_logs'
        os.makedirs(log_dir, exist_ok=True)

        timestamp = datetime.now().strftime("%Y-%m-%d_%H-%M-%S")
        log_file = os.path.join(log_dir, f'scraper_{timestamp}.log')

        logging.basicConfig(
            level=logging.INFO,
            format='%(asctime)s - %(levelname)s - %(message)s',
            handlers=[
                logging.FileHandler(log_file, encoding='utf-8'),
                logging.StreamHandler()
            ]
        )
        self.logger = logging.getLogger(__name__)

    def random_sleep(self, min_seconds=3, max_seconds=7):
        """隨機等待時間"""
        time.sleep(random.uniform(min_seconds, max_seconds))

    def human_like_scroll(self):
        """模擬人類的滾動行為"""
        total_height = self.driver.execute_script("return document.body.scrollHeight")
        viewport_height = self.driver.execute_script("return window.innerHeight")
        sections = random.randint(5, 8)  # 隨機分段滾動次數

        for i in range(sections):
            target_scroll = random.uniform(
                (i / sections) * total_height,
                ((i + 1) / sections) * total_height
            )
            self.driver.execute_script(f"window.scrollTo(0, {target_scroll});")
            self.random_sleep(2, 4)  # 每次滾動後隨機等待

    def get_job_links(self):
        """獲取所有職位連結"""
        try:
            items = self.wait.until(
                EC.presence_of_all_elements_located((By.CSS_SELECTOR, "div.info-container"))
            )
            self.logger.info(f"找到 {len(items)} 個工作項目")

            job_links = []
            for item in items:
                try:
                    job = item.find_element(By.TAG_NAME, "a")
                    if job:
                        href = job.get_attribute('href')
                        job_links.append(href)
                        self.logger.info(f"已找到工作: {job.text} - {href}")
                        # 短暫停頓，模擬人類行為
                        time.sleep(random.uniform(0.1, 0.3))
                except NoSuchElementException:
                    self.logger.warning("無法在項目中找到連結")
                    continue

            return job_links
        except Exception as e:
            self.logger.error(f"獲取工作連結時發生錯誤: {str(e)}")
            return []

    def extract_job_detail(self, url):
        """提取單個職位的詳細信息"""
        try:
            self.logger.info(f"開始抓取工作詳情: {url}")

            # 隨機延遲訪問
            self.random_sleep(4, 8)
            self.driver.get(url)

            # 模擬人類滾動行為
            self.human_like_scroll()

            job_data = {
                'job': self._safe_get_element("h1", By.TAG_NAME),
                'job-href': url,
                'content': self._safe_get_element("p.mb-5", By.CSS_SELECTOR),
                'types': self._safe_get_element("div.category-item", By.CSS_SELECTOR),
                'other': self._safe_get_element("p.m-0", By.CSS_SELECTOR),
                'tools': self._safe_get_element(
                    ".job-requirement-table div:nth-of-type(5) div.t3",
                    By.CSS_SELECTOR
                ),
                'skill': self._safe_get_element(
                    ".job-requirement-table div:nth-of-type(6) div.t3",
                    By.CSS_SELECTOR
                )
            }

            self.logger.info(f"成功抓取工作詳情: {job_data['job']}")
            return job_data

        except Exception as e:
            self.logger.error(f"抓取工作詳情時發生錯誤: {str(e)}")
            return None

    def _safe_get_element(self, selector, by):
        """安全地獲取元素文本"""
        try:
            element = self.wait.until(EC.presence_of_element_located((by, selector)))
            return element.text
        except:
            return ""

    def scrape_jobs(self, url, output_filename):
        """主要的爬取函數"""
        try:
            self.logger.info(f"開始抓取網頁: {url}")

            # 訪問頁面
            self.driver.get(url)
            self.random_sleep(4, 7)

            # 模擬人類滾動
            self.human_like_scroll()

            # 獲取所有職位連結
            job_links = self.get_job_links()
            self.logger.info(f"總共找到 {len(job_links)} 個工作連結")

            # 爬取每個職位的詳細信息
            jobs_data = []
            for i, link in enumerate(job_links, 1):
                job_data = self.extract_job_detail(link)
                if job_data:
                    jobs_data.append(job_data)

                # 每抓取一定數量的工作後，加入較長的隨機休息
                if i % 5 == 0:
                    sleep_time = random.uniform(15, 30)
                    self.logger.info(f"已完成 {i} 個工作的抓取，休息 {sleep_time:.2f} 秒")
                    time.sleep(sleep_time)

            # 保存數據
            if jobs_data:
                df = pd.DataFrame(jobs_data)
                os.makedirs('webscraper', exist_ok=True)
                output_path = os.path.join('webscraper', output_filename)
                df.to_csv(output_path, index=False, encoding='utf-8-sig')
                self.logger.info(f"數據已保存到 {output_path}")
            else:
                self.logger.warning("沒有找到任何工作數據")

        except Exception as e:
            self.logger.error(f"抓取過程中發生錯誤: {str(e)}")
        finally:
            self.driver.quit()


def scrape_104_jobs(url, output_filename):
    """便利的包裝函數"""
    scraper = JobScraper()
    scraper.scrape_jobs(url, output_filename)


if __name__ == "__main__":
    # 讀取待爬取的 URL 和對應的檔案名稱
    urls = [
        "https://www.104.com.tw/jobs/search/?jobcat=2007001022&jobsource=joblist_search&area=6001008000&page=1",
        # ... 其他 URL ...
    ]

    filenames = [
        "資料工程師.csv",
        # ... 其他檔案名稱 ...
    ]

    # 依序爬取每個類別，每個類別之間加入較長的休息時間
    for url, filename in zip(urls, filenames):
        scrape_104_jobs(url, filename)
        sleep_time = random.uniform(60, 120)  # 每個類別之間休息 1-2 分鐘
        print(f"完成 {filename} 的抓取，休息 {sleep_time:.2f} 秒")
        time.sleep(sleep_time)
