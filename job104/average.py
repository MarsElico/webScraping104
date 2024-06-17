# 匯入模組
import pandas
from matplotlib import pyplot

import my_pyplot
from final_104_文字雲 import analysis

# 修改路徑，讓spyder能抓得到檔案
import os
os.chdir("T:\Programing_RightPath\爬蟲_期末_0607\job104")


df_info = pandas.read_csv("04-07/104job-python-info.csv", encoding="utf-8")
df_education = pandas.read_csv("03-28/104job-python-education.csv", encoding="utf-8")

# 資料清理
df_education = df_education.dropna(subset=["job"])
df_education["rate"] = df_education["rate"].fillna("0%")
# 資料清理後，索引值被修改，不是從0開始的連續數字，需要重製索引值
df_education = df_education.reset_index(drop=True)
# 資料清理
df_info = df_info.dropna()
# 資料清理後，索引值被修改，不是從0開始的連續數字，需要重製索引值
df_info = df_info.reset_index(drop=True)

# 印出所有工作
for i in df_info["job"]:
    print(i)


def get_unique(Series, msg):
    result = set()
    for i in Series:
        result.add(i)
    print(msg, result, "，共", len(result), "個")
    return result

# 發現工作有所增減
get_unique(df_education["col"], "有幾種教育:")
old_job = get_unique(df_education["job"], "有幾個工作:")
job = get_unique(df_info["job"], "有幾個工作:")
print("2024/3/28相比4/7多了幾份工作:", old_job - job)
old_job = get_unique(df_education["job-href"], "有幾個工作:")
job = get_unique(df_info["job-href"], "有幾個工作:")
print("2024/3/28相比4/7多了幾份工作:", old_job - job)


# 印出福利制度關鍵字
my_pyplot.使支援繁體中文()
text = " ".join(df_info["law"].to_list())    # 整理成文字雲可接受的檔案格式
analysis(text)
