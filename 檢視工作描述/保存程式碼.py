from 檢視專業技能分佈.文字雲 import read_csv

df = read_csv("06-05 台中後端數據工程師分析師科學家/104job-python-info.csv")
data = list()
for i in range(df.shape[0]):
    data.append((df.iloc[i, 0], df.iloc[i, 1]))  # 添加每row 的 第1第2col
print(data[1])