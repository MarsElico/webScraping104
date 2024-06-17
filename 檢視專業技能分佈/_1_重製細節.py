# 匯入模組
import numpy
import pandas
from matplotlib import pyplot
from 文字雲 import read_csv, data_cleaning, sorted_by_value, savefig


def 計算個別XX技能有YY個應徵者(df):
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


def pie_template(sorted_df, title, start, end, dpi, autopct, format_rate, extrusion_first=0.01):
    """傳入資料可畫出圓餅圖"""
    # 支援繁中zh-tw
    pyplot.rcParams["font.family"] = ["Microsoft JhengHei"]
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
    col = sorted_df[start:end]["col"]
    rate = sorted_df[start:end]["rate"]
    competitors_sum = int(sorted_df["rate"].sum())
    col = [f'{(rate[i] / float(competitors_sum) * 100.0):{format_rate}}% {col[i]}' for i in range(start, end)]
    # 分離效果
    extrusion = numpy.zeros(end-start)  # [0.01, 0.0, 0.0, 0.0]
    extrusion[0] = extrusion_first
    # 設定空標籤，使其不顯示標籤
    pie, _, autotexts = pyplot.pie(rate, autopct=autopct, colors=green_gradients[::-1], explode=extrusion)
    # 把最後一個字改成白色字，加強對比度
    autotexts[-1].set_color('white')
    pyplot.title(title, fontsize=16, color="#1e1f22")
    # 顯示指定標籤
    pyplot.legend(pie, col, bbox_to_anchor=(1.05, 0.88), title="圖例", framealpha=0.0)
    savefig(title + ".png", dpi=dpi)
    pyplot.show()


if __name__ == '__main__':
    # 載入原始csv資料
    df = read_csv("03-28/104job-python-skill.csv")
    # 資料清理
    df = data_cleaning(df)
    # 根據出現次數排序
    unique_skills = 計算個別XX技能有YY個應徵者(df)
    sorted_skills = sorted_by_value(unique_skills)      # dtype=dict
    sorted_skills_df = pandas.DataFrame({"col": sorted_skills.keys(), "rate": sorted_skills.values()})
    print(sorted_skills_df[:10])    # 印出前10名
    print(sorted_skills_df[-10:])   # 印出倒數10名

    # 開始畫圖
    competitors_sum = int(sorted_skills_df["rate"].sum())
    length = len(sorted_skills_df)
    pie_template(sorted_skills_df, f"約{competitors_sum}名應徵者中前10名技能分佈", 0, 10, dpi=750,
                 autopct="%1.0f%%", format_rate=".2f", extrusion_first=0.03)
    pie_template(sorted_skills_df, f"約{competitors_sum}名應徵者中倒數10名技能分佈", length-10, length, dpi=750,
                 autopct="%1.2f%%", format_rate=".3f", extrusion_first=0.03)
