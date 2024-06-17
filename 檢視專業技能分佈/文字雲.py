# 匯入模組
import pandas
from matplotlib import pyplot
from wordcloud import WordCloud

# 取代用字典
dict_replace = {
    # C#
    ".net": "Csharp",
    "WinForm": "Csharp",
    "Visual Studio": "Csharp",
    "C#": "Csharp",

    # SQL
    "sql": "Database",

    # Networking
    "WAN": "Networking",
    "VLAN": "Networking",
    "VPN": "Networking",
    "DNS": "Networking",
    "LAN": "Networking",
    "WLAN": "Networking",

    "git": "Git",

    # Web
    "ReactJS": "Website",
    "css": "Website",
    "html": "Website",
    "jQuery": "Website",
    "javascript": "Website",

    "vm": "vm"
}


def replace_word(df_):
    for key, value in dict_replace.items():
        df_.loc[df_['col'].str.contains(key, case=False, regex=True), 'col'] = value
    return df_


def data_cleaning(df_):
    df_ = df_.dropna(subset=["job"])
    df_["rate"] = df_["rate"].fillna("0%")
    # 資料清理後，索引值被修改，不是從0開始的連續數字，需要重製索引值
    df_ = df_.reset_index(drop=True)
    # %轉成浮點數
    df_["rate"] = df_["rate"].str.replace("%", "").astype(float) / 100.0
    return df_


def draw_word_cloud(text):
    wordcloud = WordCloud(width=800, height=400, background_color="white").generate(text)
    pyplot.figure(figsize=(5, 2))
    pyplot.imshow(wordcloud, interpolation="bilinear")
    pyplot.axis("off")


def read_csv(file_name):
    path = "T:/Programing_RightPath/pythonProject/爬蟲_期末/job104/"
    return pandas.read_csv(path + file_name, encoding="utf-8")


def sorted_by_value(dictionary: dict):
    """根據value值，由大排到小"""
    sorted_items = sorted(dictionary.items(), key=lambda item: item[1], reverse=True)
    sorted_items = dict(sorted_items)
    return sorted_items


def savefig(file_name, dpi):
    """保存圖片到資料夾中"""
    pyplot.savefig(file_name, dpi=dpi, bbox_inches='tight')


if __name__ == '__main__':
    # 載入原始csv資料
    df = read_csv("03-28/104job-python-skill.csv")
    # 資料清理
    df = data_cleaning(df)
    # 替代文本，將細類分組成同一大類
    df = replace_word(df)
    # 重複值中挑選唯一值，並根據出現次數由大排到小
    skills = list(df["col"])
    unique_skills = dict()
    for skill in skills:
        if unique_skills.__contains__(skill):
            unique_skills[skill] += 1
        else:
            unique_skills[skill] = 1
    sorted_skills = sorted_by_value(unique_skills)
    # 某專長出現n次
    for skill, count in sorted_skills.items():
        print(f"{skill}出現{count}次")
    # 一共有n種專長
    print(f"一共{len(unique_skills)}種專長")
    # 繪製前十名文字雲
    target = list(sorted_skills.keys())[:10]    # 讀取字典前10名
    text = ",".join(target)                     # 整理成文字雲可接受的檔案格式
    draw_word_cloud(text)
    savefig("前十名.png", dpi=300)      # 保存圖片到資料夾中
    pyplot.show()                               # 顯示圖片在編譯器中
    print("圖片已保存到資料夾")
    # 繪製倒數十名文字雲
    target = list(sorted_skills.keys())[-10:]   # 讀取字典倒數10名
    text = ",".join(target)                     # 整理成文字雲可接受的檔案格式
    draw_word_cloud(text)
    savefig("倒數十名.png", dpi=300)    # 保存圖片到資料夾中
    pyplot.show()                               # 顯示圖片在編譯器中
    print("圖片已保存到資料夾")
