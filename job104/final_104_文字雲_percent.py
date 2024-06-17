# 匯入模組
import numpy
import pandas
from matplotlib import pyplot
from wordcloud import WordCloud

import my_pyplot
from final_104_文字雲 import *

# 修改路徑，讓spyder能抓得到檔案
import os
os.chdir("T:\Programing_RightPath\爬蟲_期末_0607\job104")


def 分析應徵人數中位數_測試():
    competitors = df["competitors"]
    competitors = competitors.str.replace("30人以上應徵", "30")
    competitors = competitors.str.replace("人應徵", "").str.split("~")
    for i in range(len(competitors)):
        for j in range(len(competitors[i])):
            competitors[i][j] = float(competitors[i][j])
        print(f"{competitors[i]}->{numpy.array(competitors[i]).mean()}")
    print(type(competitors))
    print(type(competitors[0]))
    print(type(competitors[0][0]))
    # ~t~o~d~o~ return


def 計算比例_測試():
    skills = df["col"]
    rates = df["rate"]
    dictionary = dict()
    for i in range(len(skills)):
        if dictionary.__contains__(skills[i]):
            dictionary[skills[i]] += rates[i]
        else:
            dictionary[skills[i]] = rates[i]
    print(dictionary)
    return dictionary


def 計算個別XX技能有YY個應徵者有(df):
    skills = df["col"]
    rates = df["rate"]
    # 2dtype:Series, 1dtype:list
    competitors = df["competitors"]
    competitors = competitors.str.replace("30人以上應徵", "30")
    competitors = competitors.str.replace("人應徵", "").str.split("~")
    dictionary = dict()
    length = len(skills)
    for i in range(length):
        # 計算中位數
        for j in range(len(competitors[i])):
            competitors[i][j] = float(competitors[i][j])
        competitor_mean = numpy.array(competitors[i]).mean()

        # YY(單位:人數) = 應徵者人數*百分比
        # print(competitor_mean, rates[i])
        YY = competitor_mean * rates[i]
        if dictionary.__contains__(skills[i]):
            dictionary[skills[i]] += YY
        else:
            dictionary[skills[i]] = YY
        # print(f"中位數={competitor_mean}, 百分比={rates[i]}, YY={YY}")
    print(dictionary)
    return dictionary


def 資料清理(df):
    # 資料清理
    df = df.dropna(subset=["job"])
    df["rate"] = df["rate"].fillna("0%")
    # 資料清理後，索引值被修改，不是從0開始的連續數字，需要重製索引值
    df = df.reset_index(drop=True)
    # %轉成浮點數
    df["rate"] = df["rate"].str.replace("%", "").astype(float) / 100.0
    return df


def sorted_by_count(dictionary, reverse=True):
    """由大排到小"""
    sorted_items = sorted(dictionary.items(), key=lambda item: item[1], reverse=reverse)
    sorted_items = dict(sorted_items)
    return sorted_items


if __name__ == '__main__':
    df = read("03-28/104job-python-skill.csv")      # 讀取檔案
    replaces(df)                                    # 修整、合併文字
    text = ",".join(df["col"].to_list())            # 整理成文字雲可接受的檔案格式

    df = 資料清理(df)

    # 計算比例_測試()

    # 分析應徵人數中位數_測試()

    dictionary = 計算個別XX技能有YY個應徵者有(df)

    # 重複值中挑選唯一值
    unique_skills = dictionary.keys()
    print(unique_skills)

    # 根據出現次數排序
    sorted_skills = sorted_by_count(dictionary)
    sorted_skills_df = pandas.DataFrame({"col":sorted_skills.keys(), "rate":sorted_skills.values()})
    print(sorted_skills_df[:10])

    ### 開始畫圖
    # 支援繁中zh-tw
    my_pyplot.使支援繁體中文()

    # 套用漸變綠色到藍色
    green_gradients = [
        '#6341ff', '#5b54ff', '#4b82ff', '#3caaff', '#2ed4fe',
        '#40dcf1', '#56e5e3', '#68edd6', '#7df6c8', '#93ffba'
    ]

    # 往左偏移0.2，往下偏移0.1
    fig, ax = pyplot.subplots()
    pos = ax.get_position()
    new_pos = [pos.x0 - 0.2, pos.y0 - 0.05, pos.width, pos.height]
    ax.set_position(new_pos)

    # 計算非pyplot.pie計算的比例
    col = sorted_skills_df[:10]["col"]
    rate = sorted_skills_df[:10]["rate"]
    competitors_sum = int(sorted_skills_df["rate"].sum())
    col = [f'{float.__floor__(rate[i] / float(competitors_sum) * 100.0)}% {col[i]}' for i in range(len(col))]

    _, _, autotexts = pyplot.pie(rate, labels=col, autopct="%1.0f%%", colors=green_gradients[::-1], labeldistance=999)

    # 把最後一個字改成白色字，加強對比度
    autotexts[-1].set_color('white')

    pyplot.title(f"約{competitors_sum}名應徵者中前10名技能分佈", fontsize=16, color="#1e1f22")
    pyplot.legend(bbox_to_anchor=(1.05, 0.88), title="圖例", framealpha=0.0)
    pyplot.show()
