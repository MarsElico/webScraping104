"""
SettingWithCopyWarning:
A value is trying to be set on a copy of a slice from a DataFrame.
Try using .loc[row_indexer,col_indexer] = value instead
See the caveats in the documentation: https://pandas.pydata.org/pandas-docs/stable/user_guide/indexing.html#returning-a-view-versus-a-copy
  df_["rate"] = df_["rate"].fillna("0%")
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
    df = read_csv("05-19 全世界數據分析師/104job-python-education.csv")
    # 資料清理
    df = data_cleaning(df)
    # 根據出現次數排序
    unique_skills = 計算個別XX技能有YY個應徵者(df)
    sorted_skills = sorted_by_value(unique_skills)  # dtype=dict
    sorted_skills_df = pandas.DataFrame({"col": sorted_skills.keys(), "rate": sorted_skills.values()})

    # 清除0%的資料
    for data, rate in sorted_skills_df.values:
        print(data, rate)

    # 開始畫圖
    competitors_sum = int(sorted_skills_df["rate"].sum())
    length = len(sorted_skills_df)
    pie_template(sorted_skills_df, f"約{competitors_sum}名應徵者學歷分佈", 0, length, dpi=750,
                 autopct="%1.0f%%", format_rate=".2f")

    # print(df["rate"])       # col-key
    # print(df.iloc[0])       # row-index
    # print(df.loc["rate"])   # row-key
