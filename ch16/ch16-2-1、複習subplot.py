import matplotlib.pyplot as pyplot
import my_pyplot

my_pyplot.使支援繁體中文()
x = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
y1 = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
y2 = [8, 7, 6, 9, 7, 5, 12, 13, 4, 5]
# 從這行開始畫第1張子圖
pyplot.subplot(2, 2, 1)
pyplot.plot(x, y1, color="black", lw=2.4, ls=":")

# 從這行開始畫第2張子圖
pyplot.subplot(2, 2, 2)
pyplot.plot(x, y2, color="#FF7F0E", lw=2.4, ls="-.")
pyplot.annotate("最大值", xytext=(8, 12), fontsize=16,  # 設定註釋文字
                xy=(7.2, 12), arrowprops=dict(shrink=0.01, facecolor="g"))  # 設定箭頭
pyplot.annotate("最小值", xytext=(3, 5), fontsize=16,  # 設定註釋文字
                xy=(5, 5), arrowprops=dict(shrink=0.01, facecolor="g"))  # 設定箭頭

# 從這行開始畫第3張子圖
pyplot.subplot(2, 2, 3)
pyplot.plot(x, y1, color="black", lw=2.4, ls=":")

# 從這行開始畫第4張子圖
pyplot.subplot(2, 2, 4)
pyplot.plot(x, y2, color="#FF7F0E", lw=2.4, ls="-.")

# 畫整張圖
pyplot.show()
