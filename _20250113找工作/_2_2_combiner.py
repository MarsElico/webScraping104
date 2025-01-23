# 透過1-1或1-2爬取程式爬到的資料，用這個來處理
import pandas as pd
from executor import execute


def process_csv(file_path):
    # 讀取CSV文件
    df = pd.read_csv(file_path, encoding='utf-8')

    # 合併內容欄位
    content_columns = ['content', 'other', 'tools', 'skill']

    # 將指定欄位合併，用逗號分隔
    df['content'] = df[content_columns].apply(
        lambda x: ','.join([str(val) for val in x if pd.notna(val) and str(val).strip() != '']),
        axis=1
    )

    # 刪除其他已合併的欄位（除了'content'）
    df = df.drop(['other', 'tools', 'skill'], axis=1)

    return df


if __name__ == "__main__":
    execute('url', 'processing', process_csv)