import re

import pandas
from _4_出差外派 import get_sorted_rate_df
from 檢視專業技能分佈._1_重製細節 import pie_template
from 檢視專業技能分佈.文字雲 import read_csv


def template(col_name, template_name):
    # 根據出現次數排序
    sorted_skills_df = get_sorted_rate_df(df, col_name=col_name)
    # 開始畫圖
    competitors_sum = int(sorted_skills_df["rate"].sum())
    length = len(sorted_skills_df)
    pie_template(sorted_skills_df, f"{competitors_sum}{template_name}", 0, length, dpi=750,
                 autopct="%1.0f%%", format_rate=".2f")


def apply_searched_keyword(keyword, if_found, if_not_found, new_col_name):
    result = list()
    target = pandas.DataFrame({"benefit": df["benefit"], "law": df["law"], "other": df["other"]})
    target.fillna("", inplace=True)
    for i in range(target.shape[0]):
        result.append(if_not_found)
        for col in target.iloc[i]:
            if keyword in str(col):
                result[i] = if_found
                break
    df[new_col_name] = result


def findall(pattern, text, index=0):
    match = re.findall(pattern, text)
    return match[index] if match and len(match) > index else None


def hour12to24(text):
    am = re.search(r"am", text, re.IGNORECASE)      # `re.IGNORECASE` 不分大小寫
    pm = re.search(r"pm", text, re.IGNORECASE)
    time = re.findall(r"[0-9]+", text)
    time = [f"0{i}" if len(i) == 3 else i for i in time]    # 900 -> 0900
    if am and pm:
        result = f"{time[0]}~{int(time[-1])+1200}"
    elif time:
        result = f"{time[0]}~{time[-1]}"
    else:
        result = ""
    return result


if __name__ == '__main__':
    # 載入原始csv資料
    df = read_csv("06-05 台中後端數據工程師分析師科學家/104job-python-info.csv")

    template(col_name="vacation", template_name="份工作的週休二日比例")
    template(col_name="management", template_name="份工作的管理責任比例")
    template(col_name="competitors", template_name="份工作的已應徵人數比例")
    template(col_name="need", template_name="份工作的需求人數比例")           # 應該更適合中位數

    #%% 整理成最早上班時間、最晚下班時間
    df["shift"] = df["shift"].str.replace(r":|：", "", regex=True)
    df["shift"] = df["shift"].apply(lambda x: hour12to24(x))
    df["on_duty"] = df["shift"].apply(lambda x: findall(r"[0-9]+", x) if x != "" else "無明確時間")
    df["off_duty"] = df["shift"].apply(lambda x: findall(r"[0-9]+", x, -1) if x != "" else "無明確時間")
    template(col_name="on_duty", template_name="份工作的最早上班時間")
    template(col_name="off_duty", template_name="份工作的最晚下班時間")
    # template(col_name="shift", template_name="份工作的上班時段比例")

    #%% 整理基本薪資+
    # "月薪30,000" 或 "月薪30000"
    df["base_salary"] = df["salary"].apply(lambda x: findall(r"月薪[0-9]+,*[0-9]*", x) if "月薪" in x else x)
    df["base_salary"] = df["base_salary"].str.replace(r"(31)|(32)|(33)|(34)", "35", regex=True)
    df["base_salary"] = df["base_salary"].str.replace(r"(36)|(37)|(38)|(39)", "37", regex=True)
    df["base_salary"] = df["base_salary"].str.replace(r"(41)|(42)|(43)|(44)", "42", regex=True)
    df["base_salary"] = df["base_salary"].str.replace(r"(46)|(47)|(48)|(49)", "47", regex=True)
    df["base_salary"] = df["base_salary"].apply(lambda x: findall(r"年薪[0-9]+,*[0-9]*", x) if "年薪" in x else x)
    template(col_name="base_salary", template_name="份工作的底薪比例")
    # template(col_name="salary", template_name="份工作的薪水比例")

    apply_searched_keyword("生日", "有生日假", "沒有生日假", new_col_name="birthday")
    template(col_name="birthday", template_name="份工作的是否有生日假比例")

    apply_searched_keyword("國定", "有國定假日", "沒有國定假日", new_col_name="national_holiday")
    template(col_name="national_holiday", template_name="份工作的是否有國定假日比例")

    apply_searched_keyword("彈性", "彈性上下班", "沒有彈性上下班", new_col_name="flextime")
    template(col_name="flextime", template_name="份工作的是否彈性上下班比例")

    apply_searched_keyword("年終", "年終", "沒有年終", new_col_name="flextime")
    template(col_name="flextime", template_name="份工作的是否有年終比例")

    apply_searched_keyword("停車場", "停車場", "沒有停車場", new_col_name="parking")
    template(col_name="parking", template_name="份工作的有停車場比例")
