"""
    # ValueError: 5 is not in range
    # 刪除包含 "技術士" 的行
    keys_to_delete = [key for key in sorted_skills_df if "技術士" in key]
    for key in keys_to_delete:
        del sorted_skills_df[key]
    # 資料清理
    sorted_skills_df = sorted_skills_df.reset_index(drop=True)
"""
# 導入模組所在資料夾，避免以下錯誤：ModuleNotFoundError: No module named '文字雲'
import sys
sys.path.append("T:\Programing_RightPath\爬蟲_期末_0607\檢視專業技能分佈")

# 匯入模組
import pandas
from 檢視專業技能分佈.文字雲 import read_csv, data_cleaning, sorted_by_value
from 檢視專業技能分佈._1_重製細節 import 計算個別XX技能有YY個應徵者, pie_template

if __name__ == '__main__':
    # 載入原始csv資料
    df = read_csv("03-28/104job-python-certificate.csv")
    # 資料清理
    df = data_cleaning(df)
    # 根據出現次數排序
    unique_skills = 計算個別XX技能有YY個應徵者(df)
    sorted_skills = sorted_by_value(unique_skills)  # dtype=dict
    sorted_skills_df = pandas.DataFrame({"col": sorted_skills.keys(), "rate": sorted_skills.values()})

    # ValueError: 5 is not in range
    # 刪除包含 "技術士" 的行
    rows_to_delete = sorted_skills_df[sorted_skills_df["col"].str.contains("技術士", na=False)].index
    sorted_skills_df.drop(rows_to_delete, inplace=True)
    sorted_skills_df = sorted_skills_df.reset_index(drop=True)

    # 開始畫圖
    competitors_sum = int(sum(sorted_skills.values()))
    length = len(sorted_skills_df)
    pie_template(sorted_skills_df, f"約{competitors_sum}名應徵者前10名證照分佈", 0, 10, dpi=750,
                 autopct="%1.0f%%", format_rate=".2f")
    pie_template(sorted_skills_df, f"約{competitors_sum}名應徵者倒數10名證照分佈", length-10, length, dpi=750,
                 autopct="%1.0f%%", format_rate=".2f")
