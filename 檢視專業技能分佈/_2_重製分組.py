# 匯入模組
import numpy
import pandas
from matplotlib import pyplot
from 文字雲 import read_csv, data_cleaning, sorted_by_value, savefig, replace_word
from _1_重製細節 import 計算個別XX技能有YY個應徵者, pie_template

if __name__ == '__main__':
    # 載入原始csv資料
    df = read_csv("03-28/104job-python-skill.csv")
    # 資料清理
    df = data_cleaning(df)
    # 替代文本，將細類分組成同一大類
    df = replace_word(df)
    # 根據出現次數排序
    unique_skills = 計算個別XX技能有YY個應徵者(df)
    sorted_skills = sorted_by_value(unique_skills)      # dtype=dict
    sorted_skills_df = pandas.DataFrame({"col": sorted_skills.keys(), "rate": sorted_skills.values()})
    print(sorted_skills_df[:10])  # 印出前10名

    # 開始畫圖
    competitors_sum = int(sorted_skills_df["rate"].sum())
    length = len(sorted_skills_df)
    pie_template(sorted_skills_df, f"約{competitors_sum}名應徵者中前10名技能分佈(分組後)", 0, 10, dpi=750,
                 autopct="%1.0f%%", format_rate=".2f", extrusion_first=0.03)
    pie_template(sorted_skills_df, f"約{competitors_sum}名應徵者中倒數10名技能分佈(分組後)", length-10, length, dpi=750,
                 autopct="%1.2f%%", format_rate=".3f", extrusion_first=0.03)