# twstock(Date,Open,High,Low,Close,turnover), yfinance都能爬取資料
"""import yfinance as yf

df = yf.download(
    '2330.tw',
    start='2023-08-01',
    end='2024-02-29',
    progress=False)
df.to_csv("final.csv")"""

# print("時間:", stock.date)
# print("成交量:", stock.capacity)
# print("成交量:", [stock.date[i].strftime('%m-%d') + ":" + str(stock.capacity[i]) for i in range(len(stock.capacity))])
# print(df.head())  # 輸出前5筆
# print(df.columns)  # 輸出欄位
# 'date', 'capacity', 'turnover', 'open', 'high', 'low', 'close', 'change', 'transaction'
# print(df.loc[0])
# capacity=成交股數
# turnover=成交金額
import pandas
from twstock import Stock

stock_data = Stock('2330').fetch_from(2023, 8)
df = pandas.DataFrame(stock_data)
df.columns = ['Date', 'Capacity', 'Turnover', 'Open', 'High', 'Low', 'Close', 'Change', 'Transaction']
df.to_csv("final.csv")
