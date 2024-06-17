# ch18-2、中央銀行美元兌台幣.py 延續
# data_list[:, 1] => TypeError: list indices must be integers or slices, not tuple
# data_list[:][1] => ["2024/03/21", "31.832"]
# type(data_list) => <class 'list'>
# type(data_list[0]) => <class 'list'>
# 所以只能轉成numpy陣列才能正常讀取資料，轉完後print如下：
# print(data_list[1:, 1]) => ['31.832' '31.868' '31.772' ... '29.585' '29.580' '29.668']
# print(len(data_list)) => 2760
# len(dates) // 5 => 無條件進位
# dates = numpy.arange(99)
import my_pyplot
from 爬蟲_OREILLY.read_csv import read_csv_to_list
import numpy
from matplotlib import pyplot

# 載入資料
data_nparr = numpy.array(read_csv_to_list("USD to TWD.csv", "big5"))

# 使支援繁體中文，如果把它移到約第43行位置，會報錯`UserWarning: Glyph 26085 (\N{CJK UNIFIED IDEOGRAPH-65E5}) missing from current font.`
my_pyplot.使支援繁體中文()

# 畫圖，100筆資料，天數為第0欄，匯率為第1欄，去掉標題列
dates = data_nparr[1:101, 0]                        # 元素類型str，陣列類型numpy.ndarray
rates = data_nparr[1:101, 1].astype(numpy.double)   # 元素類型numpy.double，陣列類型numpy.ndarray
pyplot.plot(dates, rates, lw=0.7, color="#1e1f22")
pyplot.scatter(dates, rates, marker="+", s=50, color="#c6c6c6")
print(type(dates))

# 使x軸刻度只顯示5個(每20天為1個月)
ticks_to_use = dates[::len(dates) // 5]
pyplot.xticks(ticks_to_use, rotation=15, color="#1e1f22")
print(type(ticks_to_use[0]))

# 顯示格線
pyplot.grid(lw=0.5)

# 美化x軸、y軸
pyplot.tick_params(axis="x", direction="in", color="#969696", width=10, length=2)
pyplot.tick_params(axis="y", direction="in", color="#969696", width=5, length=5)

# 標示最高點、最低點
my_pyplot.draw_min_max(dates, rates, offset=1)

# x軸和y軸標籤
pyplot.xlabel("日期")
pyplot.ylabel("TWD/USD")
pyplot.title("最新央行美金匯率")

# 繪製!
pyplot.show()
