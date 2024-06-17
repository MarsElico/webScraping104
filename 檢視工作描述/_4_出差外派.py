# 導入模組所在資料夾，避免以下錯誤：ModuleNotFoundError: No module named '文字雲'
import sys
sys.path.append('T:\Programing_RightPath\爬蟲_期末_0607\檢視專業技能分佈')

# 匯入模組
import pandas
from 檢視專業技能分佈.文字雲 import read_csv, data_cleaning, sorted_by_value
from 檢視專業技能分佈._1_重製細節 import pie_template


def get_sorted_rate_df(df, col_name:str):
    unique_skills = 計算個別工作有幾成有什麼屬性(df, col_name)
    sorted_skills = sorted_by_value(unique_skills)  # dtype=dict
    sorted_skills_df = pandas.DataFrame({"col": sorted_skills.keys(), "rate": sorted_skills.values()})
    return sorted_skills_df


def 計算個別工作有幾成有什麼屬性(df, col_name):
    data = df[col_name]
    dictionary = dict()
    for i in range(len(data)):
        if dictionary.__contains__(data[i]):
            dictionary[data[i]] += 1
        else:
            dictionary[data[i]] = 1
    print(dictionary)
    return dictionary


def 合併_無需出差外派_需外派(sorted_skills_df):
    dict_ = dict()
    for data, rate in sorted_skills_df.values:
        # print(data, rate)
        if data == "無需出差外派":
            dict_["無需出差外派"] = rate
        elif data.__contains__("需外派"):
            if dict_.__contains__("需外派"):
                dict_["需外派"] += rate
            else:
                dict_["需外派"] = rate
        elif data.__contains__("需出差"):
            if dict_.__contains__("需出差"):
                dict_["需出差"] += rate
            else:
                dict_["需出差"] = rate
    for data, rate in dict_.items():
        print(data, rate)
    return dict_


if __name__ == '__main__':
    # 載入原始csv資料
    df = read_csv("05-25 台中後端數據工程師分析師科學家/104job-python-info.csv")
    # 根據出現次數排序
    sorted_skills_df = get_sorted_rate_df(df, col_name="business_trip")

    # 合併 無需出差外派,需外派 的比例
    # competitors_sum = int(sorted_skills_df["rate"].sum())
    # dictionary = 合併_無需出差外派_需外派(sorted_skills_df)
    # sorted_skills_df = pandas.DataFrame({"col": dictionary.keys(), "rate": dictionary.values()})

    # 開始畫圖
    competitors_sum = int(sorted_skills_df["rate"].sum())
    length = len(sorted_skills_df)
    pie_template(sorted_skills_df, f"{competitors_sum}份工作的出差外派比例", 0, length, dpi=750,
                 autopct="%1.0f%%", format_rate=".2f")
