"""
Database有55個
Csharp有42個
Website有27個
Python有26個
Git有22個
R有18個
Java有14個
Django有12個
Data Modeling有11個
Power BI​有10個
SPSS有9個
Linux有9個
JSP有9個
SAS有8個
C有8個
C++有8個
Tableau有7個
XML有7個
Matlab有7個
Networking有6個
PHP有6個
Oracle有5個
ETL有5個
Database Management有4個
AJAX有3個
Spring有3個
vm有3個
Google Data Studio有2個
VBA有2個
ArcGis有2個
OOP有2個
SPICE有2個
Google Tag Manager有2個
MAYA有1個
J2EE有1個
VoIP有1個
TCP/IP有1個
SAN/NAS有1個
Delphi有1個
IE工業工程有1個
Database Administrator有1個
hadoop有1個
AWS有1個
Go有1個
WPS有1個
Citrix有1個
Synopsys有1個
Lightwave有1個
Wimax有1個
MFC有1個
Data Marts有1個
Firewall有1個
AS/400有1個
Apache SOAP有1個
Shell有1個
MCU有1個
Google Analytics有1個
一共27種專長
前五名
         Item  Count
4   Database     55
28    Csharp     42
14   Website     27
9     Python     26
30       Git     22
"""

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
    df.loc[df['col'].str.contains(search, case=False, regex=True), 'col'] = replace


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
    sorted_df = pandas.DataFrame(sorted_df, columns=['Item', 'Count'])
    sorted_df = sorted_df.sort_values(by='Count', ascending=False)
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
    text = ",".join(df["col"].to_list())            # 整理成文字雲可接受的檔案格式
    print(text)
    analysis(text)

    # 重複值中挑選唯一值，並只篩選出現次數大於2次的值，27/57
    skills = list(df["col"])
    unique_skills = set()
    for skill in skills:
        if skills.count(skill) <= 2:
            continue
        unique_skills.add(skill)
    sorted_skills = sorted_by_count(skills)
    for skill in sorted_skills["Item"]:
        print(f"{skill}有{skills.count(skill)}個")   # xxx有n個
    print(f"一共{len(unique_skills)}種專長")          # 一共有n種專長
    print("前五名\n", sorted_skills.head())          # 只列出前五名專長
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
