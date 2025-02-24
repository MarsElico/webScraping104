import pandas as pd
import os
from _1_1_web_scraper import JobScraper  # 假設原始檔案名為 web_scraper.py
from datetime import datetime
import time


class EnhancedJobScraper(JobScraper):
    def __init__(self):
        super().__init__()
        self.batch_size = 5

    def get_existing_links(self, output_filename):
        """檢查現有CSV文件中的連結"""
        try:
            filepath = os.path.join('webscraper', output_filename)
            if os.path.exists(filepath):
                df = pd.read_csv(filepath, encoding='utf-8-sig')
                return set(df['job-href'].tolist())
            return set()
        except Exception as e:
            print(f"Error reading existing links: {str(e)}")
            return set()

    def save_batch(self, jobs_data, output_filename):
        """保存一批工作數據"""
        try:
            df = pd.DataFrame(jobs_data)
            os.makedirs('webscraper', exist_ok=True)
            output_path = os.path.join('webscraper', output_filename)

            # 如果文件已存在，則附加數據
            if os.path.exists(output_path):
                existing_df = pd.read_csv(output_path, encoding='utf-8-sig')
                df = pd.concat([existing_df, df], ignore_index=True)

            df.to_csv(output_path, index=False, encoding='utf-8-sig')
            print(f"Batch saved to {output_path}")
        except Exception as e:
            print(f"Error saving batch: {str(e)}")

    def scrape_jobs(self, url, output_filename):
        """重寫的爬取函數，包含批次保存和重複檢查"""
        try:
            self.driver.get(url)
            time.sleep(3)  # 等待初始加載

            self.scroll_to_bottom()

            # 獲取所有職位連結
            job_links = self.get_job_links()
            print(f"Found {len(job_links)} jobs")

            # 獲取已存在的連結
            existing_links = self.get_existing_links(output_filename)
            print(f"Found {len(existing_links)} existing links")

            # 過濾掉重複的連結
            new_links = [link for link in job_links if link not in existing_links]
            new_links = list(set(new_links))
            print(f"Found {len(new_links)} new jobs to scrape")

            # 批次處理
            jobs_data = []
            for i, link in enumerate(new_links, 1):
                print(f"Scraping job {i}/{len(new_links)}: {link}")
                job_data = self.extract_job_detail(link)
                if job_data:
                    jobs_data.append(job_data)

                # 每5個工作保存一次
                if (i % self.batch_size) == 0:
                    self.save_batch(jobs_data, output_filename)
                    jobs_data = []  # 清空暫存

            # 保存剩餘的工作
            if jobs_data:
                self.save_batch(jobs_data, output_filename)

        except Exception as e:
            print(f"Error during scraping: {str(e)}")
        finally:
            self.driver.quit()


def scrape_104_jobs_enhanced(url, output_filename):
    """新的包裝函數"""
    scraper = EnhancedJobScraper()
    scraper.scrape_jobs(url, output_filename)


# 使用示例
if __name__ == "__main__":
    # 使用與原始程式相同的 urls 和 filenames 列表
    urls = [
        # Ajax Restful
        "https://www.104.com.tw/jobs/search/?jobcat=2007000000&jobsource=joblist_search&area=6001008000&page=1&keyword=ajax&order=15"
        # "https://www.104.com.tw/jobs/search/?jobcat=2007000000&jobsource=joblist_search&area=6001008000&page=2&keyword=RESTful&order=15"

        # React.js
        # "https://www.104.com.tw/jobs/search/?jobcat=2007000000&jobsource=joblist_search&area=6001008000&page=1&keyword=React.js&order=15",
        # "https://www.104.com.tw/jobs/search/?jobcat=2007000000&jobsource=joblist_search&area=6001008000&page=1&keyword=vue.js&order=15"
        # "https://www.104.com.tw/jobs/search/?jobcat=2007000000&jobsource=joblist_search&area=6001008000&page=1&keyword=react&order=15",
        # "https://www.104.com.tw/jobs/search/?jobcat=2007000000&jobsource=joblist_search&area=6001008000&page=1&keyword=vue&order=15",

        # C#
        # "https://www.104.com.tw/jobs/search/?jobcat=2007000000&jobsource=joblist_search&area=6001008000&page=1&keyword=.NET&order=15",
        # "https://www.104.com.tw/jobs/search/?jobcat=2007000000&jobsource=joblist_search&area=6001008000&page=1&keyword=mvc&order=15",
        # "https://www.104.com.tw/jobs/search/?jobcat=2007000000&jobsource=joblist_search&area=6001008000&page=2&keyword=C%23&order=15",

        # "https://www.104.com.tw/jobs/search/?jobcat=2007001017&jobsource=joblist_search&area=6001008000&page=1",
        # "https://www.104.com.tw/jobs/search/?jobcat=2007001007&jobsource=joblist_search&area=6001008000&page=1",
        # "https://www.104.com.tw/jobs/search/?jobcat=2007001009&jobsource=joblist_search&area=6001008000&page=1",
        # "https://www.104.com.tw/jobs/search/?jobcat=2007001015&jobsource=joblist_search&area=6001008000&page=1",
        # "https://www.104.com.tw/jobs/search/?jobcat=2007001016&jobsource=joblist_search&area=6001008000&page=1",
        # "https://www.104.com.tw/jobs/search/?jobcat=2009003007&jobsource=joblist_search&area=6001008000&page=1",
        # "https://www.104.com.tw/jobs/search/?jobcat=2007001004&jobsource=joblist_search&area=6001008000&page=1",
        # "https://www.104.com.tw/jobs/search/?jobcat=2007001003&jobsource=joblist_search&area=6001008000&page=1",
        # "https://www.104.com.tw/jobs/search/?jobcat=2009003005&jobsource=joblist_search&area=6001008000&page=1",
        # "https://www.104.com.tw/jobs/search/?jobcat=2007001022&jobsource=joblist_search&area=6001008000&page=1",
        # "https://www.104.com.tw/jobs/search/?jobcat=2007002002&jobsource=joblist_search&area=6001008000&page=1",
        # "https://www.104.com.tw/jobs/search/?jobcat=2007001010&jobsource=joblist_search&area=6001008000&page=1",
        # "https://www.104.com.tw/jobs/search/?jobcat=2007002007&jobsource=joblist_search&area=6001008000&page=1",
        # "https://www.104.com.tw/jobs/search/?jobcat=2004002005&jobsource=joblist_search&area=6001008000&page=1",
        # "https://www.104.com.tw/jobs/search/?jobcat=2007001008&jobsource=joblist_search&area=6001008000&page=1",
        # "https://www.104.com.tw/jobs/search/?jobcat=2007001012&jobsource=joblist_search&area=6001008000&page=1",
        # "https://www.104.com.tw/jobs/search/?jobcat=2013001006&jobsource=joblist_search&area=6001008000&page=1",
        # "https://www.104.com.tw/jobs/search/?jobcat=2007002005&jobsource=joblist_search&area=6001008000&page=1",
        # "https://www.104.com.tw/jobs/search/?jobcat=2007001020&jobsource=joblist_search&area=6001008000&page=1",
        # "https://www.104.com.tw/jobs/search/?jobcat=2007001014&jobsource=joblist_search&area=6001008000&page=1",
        # "https://www.104.com.tw/jobs/search/?jobcat=2007001006&jobsource=joblist_search&area=6001008000&page=1",
        # "https://www.104.com.tw/jobs/search/?jobcat=2007001013&jobsource=joblist_search&area=6001008000&page=1",
        # "https://www.104.com.tw/jobs/search/?jobcat=2007002003&jobsource=joblist_search&area=6001008000&page=1",
        # "https://www.104.com.tw/jobs/search/?jobcat=2013001015&jobsource=joblist_search&area=6001008000&page=1",
        # "https://www.104.com.tw/jobs/search/?jobcat=2013001016&jobsource=joblist_search&area=6001008000&page=1",
    ]
    filenames = [
        "台中市 - Ajax Restful.csv",
        # "台中市 - Ajax Restful.csv",
        # "台中市 - React.js.csv",
        # "台中市 - React.js.csv",
        # "台中市 - React.js.csv",
        # "台中市 - React.js.csv",
        # "台中市 - C#.csv",
        # "台中市 - C#.csv",
        # "台中市 - C#.csv",
        # "台中市 - 全端工程師.csv",
        # "台中市 - 系統分析師.csv",
        # "台中市 - 其他資訊專業人員.csv",
        # "台中市 - 前端工程師.csv",
        # "台中市 - 後端工程師.csv",
        # "台中市 - 軟韌體測試工程師.csv",
        # "台中市 - 軟體工程師.csv",
        # "台中市 - 通訊軟體工程師.csv",
        # "台中市 - 測試人員.csv",
        # "台中市 - 資料工程師.csv",
        # "台中市 - 資料庫管理人員.csv",
        # "台中市 - 資訊助理.csv",
        # "台中市 - 資訊設備管制人員.csv",
        # "台中市 - 遊戲企劃.csv",
        # "台中市 - 電玩程式設計師.csv",
        # "台中市 - 演算法工程師.csv",
        # "台中市 - 網頁設計師.csv",
        # "台中市 - 網路管理工程師.csv",
        # "台中市 - AI工程師.csv",
        # "台中市 - Android工程師.csv",
        # "台中市 - Internet程式設計師.csv",
        # "台中市 - iOS工程師.csv",
        # "台中市 - MIS程式設計師.csv",
        # "台中市 - UI設計師.csv",
        # "台中市 - UX設計師.csv",
    ]

    # 印出開始時間
    start_datetime = datetime.now()
    start_time = start_datetime.strftime("%Y:%m:%d %H:%M:%S")
    print(f"{start_time}開始爬取104工作資訊")

    # 主程式
    for url, filename in zip(urls, filenames):
        scrape_104_jobs_enhanced(url, filename)
        print(f"保存到{filename}")

    # 印出結束時間
    end_datetime = datetime.now()
    end_time = end_datetime.strftime("%Y:%m:%d %H:%M:%S")
    print(f"{end_time}爬取結束")

    # 計算耗時
    duration = end_datetime - start_datetime
    hours, remainder = divmod(duration.total_seconds(), 3600)
    minutes, seconds = divmod(remainder, 60)
    print(f"本次爬取耗時{int(hours)}時{int(minutes)}分{int(seconds)}秒")
