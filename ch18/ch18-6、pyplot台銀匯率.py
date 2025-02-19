# TODO
import numpy
import pandas
from matplotlib import pyplot

import my_pyplot
from py_爬蟲_OREILLY.read_csv import read_csv_to_list

# 載入資料
data_nparr = numpy.array(read_csv_to_list("TW-money.csv", encoding="big5"))

# 使支援繁體中文
my_pyplot.使支援繁體中文()


def subplot(index):
    x = numpy.arange(4)
    y = data_nparr[index, 1:].astype(numpy.double)  # ValueError: could not convert string to float: '-'
    label = data_nparr[index, 0]
    cols = data_nparr[0, 1:]
    pyplot.plot(x, y, label=label)
    pyplot.xticks(x, cols)  # ['本行買入(現金)', '本行賣出(現金)', '本行買入(即期)', '本行賣出(即期)']
    pyplot.grid()  # 顯示格線
    pyplot.legend()  # 顯示圖例
    # my_pyplot.draw_min_max(x, y)  # 標註最高最低值
    # TypeError: 'numpy.float64' object is not callable
    pyplot.title(f"{label}即時匯率")

    xxx_start_index = label.index("(")
    pyplot.ylabel(f"NTD/{label[xxx_start_index + 1:-1]}")
    pyplot.yticks(y, y)  # 將y軸刻度對齊座標點


for i in range(1, len(data_nparr)):
    pyplot.subplot(4, 1, i % 4 + 1)
    subplot(i)
    if i % 4 == 0 and i > 3:
        pyplot.show()
        pyplot.close()
