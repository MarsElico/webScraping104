import pandas as pd
import plotly.graph_objs as go
from plotly.offline import plot
# 使plotly圖正常顯示
import plotly.io as pio
pio.renderers.default = 'browser'

# 讀取數據
df = pd.read_csv("final.csv")

# 計算簡單移動平均（SMA）
sma = df['Close'].rolling(window=10).mean()

# 創建收盤價的折線圖
closes_trace = go.Scatter(x=df['Date'], y=df['Close'], mode='lines', name='收盤價')

# 創建SMA的折線圖
sma_trace = go.Scatter(x=df['Date'], y=sma, mode='lines', name='SMA 10')

# 定義布局
layout = go.Layout(
    title='股票收盤價與10日SMA',
    xaxis=dict(title='日期'),
    yaxis=dict(title='價格'),
)

# 組合圖表
fig = go.Figure(data=[closes_trace, sma_trace], layout=layout)

# 繪製圖表
fig.show()
