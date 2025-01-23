from datetime import datetime
import time
import os
import pandas as pd
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException, NoSuchElementException
from typing import List, Dict, Optional
import glob


class Job104Scraper:
    def __init__(self, headless: bool = True):
        """
        初始化爬蟲器
        Args:
            headless: 是否使用無頭模式 (預設為True)
        """
        options = webdriver.ChromeOptions()
        if headless:
            options.add_argument('--headless')
        options.add_argument('--disable-gpu')
        options.add_argument('--no-sandbox')
        options.add_argument('--disable-dev-shm-usage')
        options.add_argument('--window-size=1920,1080')

        self.driver = webdriver.Chrome(options=options)
        self.wait = WebDriverWait(self.driver, 10)

    def __enter__(self):
        return self

    def __exit__(self, exc_type, exc_val, exc_tb):
        self.driver.quit()

    def _get_element_text(self, selector: str) -> str:
        """安全地獲取元素文字內容"""
        try:
            element = self.driver.find_element(By.CSS_SELECTOR, selector)
            return element.text.strip()
        except NoSuchElementException:
            return ""

    def _extract_job_details(self, url: str) -> Optional[Dict]:
        """
        提取單個工作的詳細信息
        Args:
            url: 工作詳情頁面URL
        Returns:
            包含工作詳情的字典，如果提取失敗則返回None
        """
        try:
            self.driver.get(url)
            time.sleep(1.5)  # 等待頁面加載

            # 定義要爬取的欄位及其對應的選擇器
            selectors = {
                'job_title': 'h1',
                'company': 'div.info-header-col a',
                'job_category': 'div.job-requirement-table div:nth-of-type(1) div.t3',
                'working_area': 'div.job-requirement-table div:nth-of-type(2) div.t3',
                'experience': 'div.job-requirement-table div:nth-of-type(3) div.t3',
                'education': 'div.job-requirement-table div:nth-of-type(4) div.t3',
                'tools': 'div.job-requirement-table div:nth-of-type(5) div.t3',
                'skills': 'div.job-requirement-table div:nth-of-type(6) div.t3',
                'salary': 'div.salary',
                'content': 'p.mb-5',
                'other_requirements': 'div.job-requirement-table div:nth-of-type(7) div.t3'
            }

            # 獲取所有欄位的值
            data = {
                'job_url': url,
                'crawl_time': datetime.now().strftime("%Y-%m-%d %H:%M:%S")
            }

            # 遍歷所有選擇器獲取數據
            for field, selector in selectors.items():
                data[field] = self._get_element_text(selector)

            return data

        except Exception as e:
            print(f"Error extracting job details from {url}: {str(e)}")
            return None

    def scrape_from_csv(self, csv_path: str, output_path: str) -> None:
        """
        從CSV文件中讀取網址並爬取工作信息
        Args:
            csv_path: CSV文件路徑
            output_path: 輸出文件路徑
        """
        try:
            # 讀取CSV文件中的網址
            df = pd.read_csv(csv_path)
            urls = df.iloc[:, 0].tolist()  # 取第一列作為網址

            print(f"\n開始處理文件: {os.path.basename(csv_path)}")
            start_time = datetime.now()
            print(f"開始時間: {start_time.strftime('%Y-%m-%d %H:%M:%S')}")
            print(f"總計需要爬取 {len(urls)} 個工作網址")

            # 爬取所有工作詳情
            jobs_data = []
            for i, url in enumerate(urls, 1):
                print(f"正在爬取第 {i}/{len(urls)} 個工作")
                job_data = self._extract_job_details(url)
                if job_data:
                    jobs_data.append(job_data)

                # 每爬取10筆資料保存一次
                if i % 10 == 0:
                    temp_df = pd.DataFrame(jobs_data)
                    temp_df.to_csv(output_path, index=False, encoding='utf-8-sig')
                    print(f"已保存 {i} 筆資料到 {output_path}")

            # 最後保存所有數據
            if jobs_data:
                final_df = pd.DataFrame(jobs_data)
                final_df.to_csv(output_path, index=False, encoding='utf-8-sig')
                print(f"所有數據已保存到 {output_path}")

            end_time = datetime.now()
            duration = end_time - start_time
            print(f"檔案處理完成: {end_time.strftime('%Y-%m-%d %H:%M:%S')}")
            print(f"耗時: {duration}\n")

        except Exception as e:
            print(f"處理檔案 {csv_path} 時發生錯誤: {str(e)}")

    def process_all_csvs(self, input_dir: str = 'urls', output_dir: str = 'webscraper') -> None:
        """
        處理指定資料夾中的所有CSV檔案
        Args:
            input_dir: 輸入CSV檔案的資料夾路徑
            output_dir: 輸出CSV檔案的資料夾路徑
        """
        # 確保輸出目錄存在
        os.makedirs(output_dir, exist_ok=True)

        # 獲取所有CSV檔案路徑
        csv_files = glob.glob(os.path.join(input_dir, '*.csv'))

        if not csv_files:
            print(f"在 {input_dir} 資料夾中未找到CSV檔案")
            return

        print(f"找到 {len(csv_files)} 個CSV檔案需要處理")
        total_start_time = datetime.now()

        # 處理每個CSV檔案
        for csv_file in csv_files:
            # 生成輸出檔案路徑
            input_filename = os.path.basename(csv_file)
            output_filename = f"scraped_{input_filename}"
            output_path = os.path.join(output_dir, output_filename)

            # 爬取該檔案中的所有網址
            self.scrape_from_csv(csv_file, output_path)

        total_end_time = datetime.now()
        total_duration = total_end_time - total_start_time
        print("\n所有檔案處理完成!")
        print(f"總耗時: {total_duration}")


def main():
    # 執行爬蟲
    with Job104Scraper(headless=True) as scraper:
        scraper.process_all_csvs()


if __name__ == "__main__":
    main()
