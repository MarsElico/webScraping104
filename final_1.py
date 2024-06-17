# print(len(sma), len(closes_))
# 查不到成交量，用成交金額代替
from numpy import arange, array, double
import pandas
from matplotlib import pyplot
import my_pyplot
import my_boxplot
import k線圖

def add_sma(closes_, period, color="#00FF00"):
    """對應x軸資料；closes_收盤價資料；period單位(天)"""
    sma = closes_.rolling(window=period).mean()
    pyplot.plot(arange(len(sma)), sma, color=color, label=f"SMA {period}")


df = pandas.read_csv("final.csv")
my_pyplot.使支援繁體中文()
dates = df["Date"]
closes = df["Close"]
pyplot.subplot(2, 1, 1)
k線圖.invoke(dates, df["Open"], df["High"], df["Low"], closes)  # 放上k線日線圖
# pyplot.plot(dates, closes, label="收盤價")  # 放上收盤價/日期
add_sma(closes, 10)  # 10天價格平均值
pyplot.legend()  # 添加圖示
pyplot.xlabel("日期")  # 添加x軸標示
pyplot.ylabel("NT$/每張")
pyplot.grid(axis="y")  # 添加格線
pyplot.xticks(dates[::len(dates) // 5], rotation=15, fontsize=8)  # 減少x軸刻度不要太密集
pyplot.tick_params(direction="inout", color="#969696", length=10)  # 美化刻度線

# 畫出成交金額走勢，單位(億)，min, 25%, 50%, 75%, 100%, max
pyplot.subplot(2, 1, 2)
turnovers = array(df["Turnover"]) // 100000000
pyplot.bar(dates, turnovers, label="成交金額")  # 放上成交金額/日期
pyplot.legend()  # 添加圖示
pyplot.xticks([])  # 隱藏x軸刻度，功能類似`pyplot.axis("off")`

# 減少y軸刻度不要太密集
box = my_boxplot.get_data(turnovers)
new_y = [min(turnovers), box["q1"], box["median"], box["q3"], max(turnovers)]
pyplot.yticks(new_y)
pyplot.ylabel("NT$(億)")

pyplot.grid(axis="y")  # 添加格線
pyplot.tick_params(direction="inout", color="#969696", length=10)  # 美化刻度線

pyplot.show()
