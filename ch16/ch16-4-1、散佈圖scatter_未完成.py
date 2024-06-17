import matplotlib.pyplot as pyplot
import numpy

#################################################################


x = [x for x in range(1, 6)]  # [1,2,3,4,5]
# x = numpy.arange(5) + 1       # 效果相同
# x = numpy.linspace(1, 6, 6)
print(x)
y = [z * z + 2 for z in x]  # 創建一個斜率2的二元一次式
pyplot.scatter(x, y, color="lightgreen", edgecolors="b", s=60)  # s=每個點的半徑
pyplot.show()

#################################################################


# 創建n個點，就會有類似折線圖的效果
x = [x for x in range(1, 1000)]
y = [z * z + 2 for z in x]  # 創建一個斜率2的二元一次式
pyplot.scatter(x, y, color="lightgreen", edgecolors="b", s=60)  # s=每個點的半徑
pyplot.show()

#################################################################
import itertools  # 匯入itertools模組

# 建立顏色包
my_colors = itertools.cycle(["b", "c", "g", "k", "m", "y"])
# 建立x，[1,2,3,4,5,6,7,8,9,10]，linspace(最小值, 最大值, 中間要切幾個數字)
x = numpy.linspace(1, 10, 10)
# 建立y
y = numpy.random.random((7, 10))
for z in y:
    pyplot.scatter(x, z, color=next(my_colors), marker="o")
# 美化x刻度
pyplot.xticks(numpy.arange(0, 11, step=1.0))
pyplot.show()

#################################################################
