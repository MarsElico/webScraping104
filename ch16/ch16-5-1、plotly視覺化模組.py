"""
import plotly.io as pio
pio.renderers.default = 'browser'
fig = ...
fig.show()

都是為了讓 plotly 顯示，如果是在jupyter notebook就不用寫這些程式碼直接寫以下即可正常執行。請比較兩者差異，或是查看 `plotly測試.ipynb`
import pandas
import plotly.express as px

df = pandas.DataFrame([[120, 150], [150, 100], [150, 200]], columns=["x-value", "y-value"])
px.scatter(df, x="x-value", y="y-value", title="Scatter Chart")
"""

import pandas
import plotly.express as px
import plotly.io as pio
pio.renderers.default = 'browser'

df = pandas.DataFrame([[120, 150], [150, 100], [150, 200]], columns=["x-value", "y-value"])
fig = px.scatter(df, x="x-value", y="y-value", title="Scatter Chart")
fig.show()
