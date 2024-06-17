# #b18635, #fdbf4b, fffcf6
from matplotlib import pyplot as plt
import pandas as pd
import numpy as np

# 假設的股票價格
np.random.seed(0)  # 確保每次生成的數據是一樣的
dates = pd.date_range('20230101', periods=100)
prices = pd.Series(np.random.normal(0, 1, len(dates)).cumsum() + 100, dates)

# 計算布林通道
moving_avg = prices.rolling(window=20).mean()  # 中線
std_dev = prices.rolling(window=20).std()  # 標準差
upper_band = moving_avg + (std_dev * 2)  # 上線
lower_band = moving_avg - (std_dev * 2)  # 下線

# 畫圖
plt.figure(figsize=(14, 7))
plt.plot(prices, label='Price', color='blue')  # 股票價格
plt.plot(moving_avg, label='Moving Average', color='#89878a')  # 中線
plt.plot(upper_band, label='Upper Band', color='#f8cb70')  # 上線
plt.plot(lower_band, label='Lower Band', color='#f8cb70')  # 下線
plt.fill_between(dates, lower_band, upper_band, color='#fdbf4b', alpha=0.1)  # 河道填充
plt.legend(loc='best')
plt.title('Bollinger Bands')
plt.show()
