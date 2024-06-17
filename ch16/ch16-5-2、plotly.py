import pandas
import plotly.express as px
import plotly.io as pio

pio.renderers.default = 'browser'

# 畫單個長條圖
df = pandas.DataFrame([["Yoasobi", 150], ["米津玄師", 100], ["5pb.", 200]], columns=["Student", "Python Score"])
fig = px.bar(df, x="Student", y="Python Score", title="Final Exam")
fig.show()

# 畫水平長條圖，類似pyplot.barh
df = pandas.DataFrame([["Yoasobi", 150], ["米津玄師", 100], ["5pb.", 200]], columns=["Student", "Python Score"])
fig = px.bar(df, x="Python Score", y="Student", title="Final Exam", orientation="h")
fig.show()

# 畫堆疊長條圖
df = pandas.DataFrame([["Yoasobi", 150, 130], ["米津玄師", 100, 90], ["5pb.", 200, 210]],
                      columns=["Student", "Python Score", "Csharp Score"])
fig = px.bar(df, x="Student", y=["Python Score", "Csharp Score"], title="Final Exam")
fig.show()

# 畫多個長條圖barmode="group"
df = pandas.DataFrame([["Yoasobi", 150, 130], ["米津玄師", 100, 90], ["5pb.", 200, 210]],
                      columns=["Student", "Python Score", "Csharp Score"])
fig = px.bar(df, x="Student", y=["Python Score", "Csharp Score"], title="Final Exam", barmode="group")
fig.show()
