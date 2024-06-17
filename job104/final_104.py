# 匯入模組
import pandas
from matplotlib import pyplot
from final_104_文字雲 import replaces

# 修改路徑，讓spyder能抓得到檔案
import os
os.chdir("T:\Programing_RightPath\爬蟲_期末_0607\job104")


def draw(csv_file_name, title):
    # 使用pandas讀取檔案，type=DataFrame, row type=Series, datatype=str
    df = pandas.read_csv(csv_file_name, encoding="utf-8")
    print(type(df.loc[0]))  # Series
    print(type(df["job-href"]))  # Series
    print(type(df["job-href"][0]))  # str

    # 資料清理
    df = df.dropna(subset=["job"])
    df["rate"] = df["rate"].fillna("0%")
    # 資料清理後，索引值被修改，不是從0開始的連續數字，需要重製索引值
    df = df.reset_index(drop=True)

    # 安全的改變資料類型: str -> float
    df["rate"] = df["rate"].str.replace("%", "").astype(float)
    print(type(df["rate"][0]))
    print(df["rate"][0])

    # 簡化語言檔案
    if csv_file_name == "104job-python-language.csv":
        df["col"] = df["col"].str[:2]
    if csv_file_name == "104job-python-skill.csv":
        replaces(df)

    # 將資料整理成可以閱讀的格式
    job = df["job"]  # 工作標題
    job_url = df["job-href"]  # 網址
    competitors_href = df["competitors-href"]  # 網址
    col = df["col"]  # key
    rate = df["rate"]  # value

    # 搜尋所有重複值的開始&結束索引值
    def get_index_ranges(repeat_list, start, stop):
        unique_titles = []
        starts = []
        stops = []
        prev_title = None
        for i in range(start, stop):
            current_title = repeat_list[i]
            # 當遇到新的唯一標題時
            if current_title != prev_title:
                # 添加開始索引值、標題
                starts.append(i)
                unique_titles.append(current_title)
                # 除了第一次以外，每次遇到新標題時，添加結束索引值
                if prev_title is not None:
                    stops.append(i - 1)
                prev_title = current_title  # 更新
        # 添加最後一個結束索引值，其結束索引是列表的末尾
        stops[-1] = stop - 1

        for i in range(len(stops)):
            print(unique_titles[i], starts[i], stops[i])
        print(unique_titles[-1], starts[-1], stop)
        return {"title": unique_titles, "start": starts, "stop": stops}

    # 使支援繁體中文
    pyplot.rcParams["font.family"] = ["Microsoft JhengHei"]

    index = get_index_ranges(job, 0, len(job))  # 所有工作
    for i in range(len(index["title"]) - 1):
        print(index["title"][i])
        start = index["start"][i]
        stop = index["stop"][i]
        if csv_file_name == "104job-python-language.csv":
            pyplot.bar(col[start:stop], rate[start:stop],  color="#895AE9", alpha=0.1, label=job[start][:20])
        if csv_file_name == "104job-python-skill.csv":
            pyplot.barh(col[start:stop], rate[start:stop], color="#895AE9", alpha=0.1, label=job[start][:20])
        if csv_file_name == "104job-python-certificate.csv":
            pyplot.barh(col[start:stop], rate[start:stop], color="#895AE9", alpha=0.1, label=job[start][:20])
            pyplot.tick_params(axis="y", labelsize=4)
        else:
            pyplot.bar(col[start:stop], rate[start:stop], width=0.1, color="#895AE9", alpha=0.01)
            pyplot.plot(col[start:stop], rate[start:stop], lw=0.5, label=job[start][:20])
    pyplot.legend(bbox_to_anchor=(1, 1), title="圖例", facecolor="#FFFFFF", edgecolor="#2B2D30", framealpha=0.7)
    pyplot.title(title)  # 顯示標題

    # 美化x軸、y軸
    pyplot.tick_params(axis="x", direction="in", color="#969696", width=10, length=2)
    pyplot.tick_params(axis="y", direction="in", color="#969696", width=5, length=5)

    pyplot.show()
