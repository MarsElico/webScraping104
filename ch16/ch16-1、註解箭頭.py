# xy=(箭頭位置)
# xytext=(註釋文字位置)
# fontsize=註釋文字大小
# arrowprops=dict(shrink=箭頭粗細, facecolor="箭頭底色")
# plt.annotate，可在圖片上增加註釋文字、箭頭
import matplotlib.pyplot as pyplot
import my_pyplot

##############################################################################
# ※↓試圖在長條圖畫 pyplot.annotate 失敗，但是 pyplot.text 成功※

my_pyplot.使支援繁體中文()
x_courses = ["C++", "Java", "Rust", "C#"]
y_students = [45, 52, 71, 88]
pyplot.bar(x_courses, y_students, width=0.7, color="m")  # 使用bar()函數繪製長條圖or直方圖，(橫軸-, 縱軸|)
# 註釋annotate
pyplot.annotate("最大值", xytext=(5, 16), fontsize=16, color="g",  # 設定註釋文字
                xy=(4, 16), arrowprops=dict(shrink=0.01, facecolor="g"))  # 設定箭頭
# 文字text
x, y = 2, 30
pyplot.plot(x, y, "ro")
pyplot.text(x, y, "the text", fontsize=16)
pyplot.show()

##############################################################################
# ※↓試圖在折線圖畫 pyplot.annotate 和 pyplot.text 都成功※

x = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
y1 = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
y2 = [8, 7, 6, 9, 7, 5, 12, 13, 4, 5]
pyplot.plot(x, y1, color="black", lw=2.4, ls=":")
pyplot.plot(x, y2, color="#FF7F0E", lw=2.4, ls="-.")
# 註釋annotate
pyplot.annotate("最大值", xytext=(5, 15), fontsize=16, color="g",  # 設定註釋文字
                xy=(4, 16), arrowprops=dict(shrink=0.01, facecolor="g"))  # 設定箭頭
# 文字text
# alpha=透明度float, rotation=旋轉角度float,
# backgroundcolor=背景顏色, color=文字顏色,
# ha=座標開始點水平置中str, va=座標開始點垂直置中str, wrap=自動換行布林值
# 例如ha="center"、ha="right"
# s=欲寫入的文字
# bbox=dict()
# bbox=dict()參數：1. ec，edgecolor邊框顏色；2. fc，facecolor背景顏色，3. boxstyle，圖形樣式
# boxstyle="circle"
x, y = 2, 30
pyplot.plot(x, y, "ro")
pyplot.text(x, y, "the text", fontsize=16, bbox=dict(boxstyle="darrow"))
pyplot.plot(x, y, "ro")
pyplot.text(x, y, "the text", fontsize=16, bbox=dict(boxstyle="darrow"), ha="center", va="center")
pyplot.show()

##############################################################################
# ↓畫多個pyplot.annotate

import matplotlib.pyplot as pyplot
import my_pyplot

my_pyplot.使支援繁體中文()
x = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
y1 = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
y2 = [8, 7, 6, 9, 7, 5, 12, 13, 4, 5]
pyplot.plot(x, y1, color="black", lw=2.4, ls=":")
pyplot.plot(x, y2, color="#FF7F0E", lw=2.4, ls="-.")
pyplot.annotate("最大值", xytext=(8, 12), fontsize=16,  # 設定註釋文字
                xy=(7.2, 12), arrowprops=dict(shrink=0.01, facecolor="g"))  # 設定箭頭
pyplot.annotate("最小值", xytext=(3, 5), fontsize=16,  # 設定註釋文字
                xy=(5, 5), arrowprops=dict(shrink=0.01, facecolor="g"))  # 設定箭頭
pyplot.show()
