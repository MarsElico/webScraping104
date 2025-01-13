import glob
import os
from base_utils import ensure_directory_exists


def execute(source_dir, processing_dir, operation):
    # 確保目錄存在
    ensure_directory_exists(processing_dir)

    # 獲取指定資料夾中的所有CSV文件
    csv_files = glob.glob(f'{source_dir}/*.csv')

    if not csv_files:
        print("沒有找到CSV文件")
        return

    # 處理所有CSV文件
    for file_path in csv_files:
        print(f"處理文件: {file_path}")
        processed_df = operation(file_path)

        if processed_df is not None:
            # 獲取原始檔名
            original_filename = os.path.basename(file_path)
            # 構建輸出路徑
            output_path = os.path.join(processing_dir, original_filename)

            # 使用 UTF-8-BOM 編碼保存文件
            processed_df.to_csv(output_path, index=False, encoding='utf-8-sig')
            print(f"處理完成，結果已儲存至: {output_path}")
