# 匯入模組
import pandas
from matplotlib import pyplot
from wordcloud import WordCloud

# 修改路徑，讓spyder能抓得到檔案
import os
os.chdir("T:\Programing_RightPath\爬蟲_期末_0607\job104")


def replaces(df):
    replace(df, ".net", "Csharp")
    replace(df, "WinForm", "Csharp")
    replace(df, "Visual Studio", "Csharp")
    replace(df, "C#", "Csharp")

    replace(df, "sql", "Database")

    replace(df, "WAN", "Networking")
    replace(df, "VLAN", "Networking")
    replace(df, "VPN", "Networking")
    replace(df, "DNS", "Networking")
    replace(df, "LAN", "Networking")
    replace(df, "WLAN", "Networking")

    replace(df, "git", "Git")

    # Website
    replace(df, "ReactJS", "Website")
    replace(df, "css", "Website")
    replace(df, "html", "Website")
    replace(df, "jQuery", "Website")
    replace(df, "javascript", "Website")

    replace(df, "vm", "vm")
    df["col"].to_csv("104job-python-language-classified.csv", index=False)
    print("暫存語言檔")


def replace(df, search: str, replace: str):
    df.loc[df["col"].str.contains(search, case=False, regex=True), "col"] = replace


def analysis(text):
    wordcloud = WordCloud(width=800, height=400, background_color="white").generate(text)

    pyplot.figure(figsize=(5, 2))
    pyplot.imshow(wordcloud, interpolation="bilinear")
    pyplot.axis("off")
    pyplot.show()


def read(csv_file_name):
    return pandas.read_csv(csv_file_name, encoding="utf-8")


def sorted_by_count(array):
    array = list(array)
    unique = set()
    sorted_df = list()
    for element in array:
        unique.add(element)
    for element in unique:
        sorted_df.append([element, array.count(element)])
    sorted_df = pandas.DataFrame(sorted_df, columns=["Item", "Count"])
    sorted_df = sorted_df.sort_values(by="Count", ascending=False)
    return sorted_df


def data_cleaning(df):
    df = df.dropna(subset=["job"])
    df["rate"] = df["rate"].fillna("0%")
    # 資料清理後，索引值被修改，不是從0開始的連續數字，需要重製索引值
    df = df.reset_index(drop=True)
    return df


if __name__ == '__main__':
    df = read("03-28/104job-python-skill.csv")      # 讀取檔案

    df = data_cleaning(df)                          # 資料清理

    replaces(df)                                    # 修整、合併文字

    # 重複值中挑選唯一值
    skills = list(df["col"])
    unique_skills = set()
    for skill in skills:
        unique_skills.add(skill)

    # 根據出現次數排序
    sorted_skills = sorted_by_count(skills)

    for skill in sorted_skills["Item"]:
        print(f"{skill}有{skills.count(skill)}個")   # xxx有n個
    print(f"一共{len(unique_skills)}種專長")          # 一共有n種專長
    print("前10名\n", sorted_skills[:10])            # 只列出前五名專長
    text = ",".join(unique_skills)                  # 整理成文字雲可接受的檔案格式
    analysis(text)

    df = read("03-28/104job-python-skill.csv")      # 讀取檔案

    # 發現 Website 有 27 個，分析原本分佈比例
    original = list(df["col"])
    for i in range(len(original)):
        original[i] = original[i].lower()
    print("ReactJS", original.count("ReactJS".lower()))  # 1
    print("css", original.count("css"))                  # 7
    print("html", original.count("html"))                # 4
    print("jQuery", original.count("jQuery".lower()))    # 8
    print("javascript", original.count("javascript"))    # 7

    # 發現 Database 有 55 個，分析原本分佈比例
    original = list(df["col"])
    sqls = set()
    for i in range(len(original)):
        if original[i].lower().__contains__("sql"):
            sqls.add(original[i])
    print("MySQL", original.count("MySQL"))             # 24
    print("MS SQL", original.count("MS SQL"))           # 17
    print("PostgreSQL", original.count("PostgreSQL"))   # 11
    print("PL/SQL", original.count("PL/SQL"))           # 3
    print(sqls)
