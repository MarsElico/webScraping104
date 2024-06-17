import matplotlib.pyplot as pyplot
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
pyplot.show()
