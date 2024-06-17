import matplotlib.pyplot as pyplot
import numpy

import my_pyplot

my_pyplot.使支援繁體中文()

# 先列再欄，先打一筆筆資料
data = [[200, 300],
        [350, 500],
        [150, 250]]
column_labels = ["2023年", "2024年"]
col_colors = ["lightblue"] * len(column_labels)

row_labels = ["台北", "台中", "高雄"]
row_colors = ["lightblue"] * 3

pyplot.table(cellText=data,
             colLabels=column_labels,
             colColours=col_colors,
             rowLabels=row_labels,
             rowColours=row_colors,
             loc="upper left")  # 從左上角開始放表格
pyplot.axis("off")  # 隱藏軸線，避免不美觀，複習："equal"、"square"
pyplot.title("各分區員工人數", fontsize=18, color="b")

# 建立"堆疊長條圖"的漸層色彩
lins = numpy.linspace(0.1, 0.8, len(data))
colors = pyplot.cm.Greens(lins)
print(lins, "\n\n\n", colors, "\n\n\n")

# 從哪裡開始放置堆疊長條圖， [0, 0]
y_bottom = numpy.zeros(len(column_labels))
print("y_bottom=", y_bottom)

# 以下程式用來繪製堆疊長條圖
index = numpy.arange(len(column_labels)) + 0.3
n_rows = len(data)
print("index=", index, "有幾筆資料(len(row))=", n_rows)
cell_text=[]
for row in range(n_rows):
    pyplot.bar(index)

pyplot.show()
