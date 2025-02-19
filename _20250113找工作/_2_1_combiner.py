# 使用chrome擴充套件web scraper爬取的資料，透過這個處理
# 相關資料在"1. webscraper爬取.txt"
import pandas as pd
from executor import execute


def process_csv(file_path):
    # 讀取CSV文件
    df = pd.read_csv(file_path, encoding='utf-8')

    # 檢查是否存在 web-scraper-order 欄位
    if 'web-scraper-order' not in df.columns:
        print(f"檔案 {file_path} 不包含 web-scraper-order 欄位，跳過處理")
        return None

    # 刪除指定欄位
    df = df.drop(['web-scraper-order', 'web-scraper-start-webscraper'], axis=1)

    # 合併內容欄位
    content_columns = ['content', 'other', 'tools', 'skill']
    # 確保所有要合併的欄位都存在
    existing_columns = [col for col in content_columns if col in df.columns]

    if existing_columns:
        # 將所有存在的欄位合併，用逗號分隔
        df['content'] = df[existing_columns].apply(
            lambda x: ','.join([str(val) for val in x if pd.notna(val) and str(val).strip() != '']),
            axis=1
        )
        # 刪除其他已合併的欄位（除了'content'）
        df = df.drop([col for col in existing_columns if col != 'content'], axis=1)

    return df


if __name__ == "__main__":
    execute('webscraper', 'processing', process_csv)
