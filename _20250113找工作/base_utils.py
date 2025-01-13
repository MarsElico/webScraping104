import os

def ensure_directory_exists(directory):
    """確保目錄存在，如果不存在則創建"""
    if not os.path.exists(directory):
        os.makedirs(directory)
        print(f"已創建目錄: {directory}")