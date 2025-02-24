from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
import time
from _1_2_enhanced_scraper import EnhancedJobScraper


def scrape_104_jobs_enhanced(url, output_filename):
    """新的包裝函數"""
    scraper = EnhancedTime104Scraper()
    scraper.scrape_jobs(url, output_filename)


class EnhancedTime104Scraper(EnhancedJobScraper):
    # def scroll_to_bottom(driver, times=1000):
    #     driver.maximize_window()  # 最大化顯示
    #     sidebar = driver.find_element(By.CLASS_NAME, 'job-list-pc__list')
    #     for _ in range(times):
    #         driver.execute_script("arguments[0].scrollTop = arguments[0].scrollHeight;", sidebar)
    #         time.sleep(1)
    def scroll_to_bottom(self, times=1000):
        self.driver.maximize_window()  # 最大化顯示
        sidebar = self.driver.find_element(By.CLASS_NAME, 'job-list-pc__list')
        last_height = self.driver.execute_script("return arguments[0].scrollHeight", sidebar)

        for _ in range(times):
            # 滾動到底部，並等待內容加載
            self.driver.execute_script("arguments[0].scrollTop = arguments[0].scrollHeight;", sidebar)
            time.sleep(1)

            # 計算新的滾動高度，如果高度沒有變化，表示已經到達底部
            new_height = self.driver.execute_script("return arguments[0].scrollHeight", sidebar)
            if new_height == last_height:
                print("已經到達底部")
                break
            last_height = new_height

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


if __name__ == '__main__':
    url = 'https://time4jobs.104.com.tw/?transType=1&tLat=24.158315&tLon=120.7412085&time=10&address=%E5%A4%A7%E8%88%88%E5%8D%81%E4%B8%83%E8%A1%97101%E8%99%9F&jobcat=2007001000,2007002002,2007002003,2007002005,2007002007&lat=24.158315&lon=120.7412085&order=12&asc=0&dist=3&showLatLon=1'
    filename = '9.6公里內 所有工程師.csv'
    scrape_104_jobs_enhanced(url, filename)
    print(f"保存到{filename}")
