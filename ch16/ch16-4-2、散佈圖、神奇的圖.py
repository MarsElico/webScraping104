import matplotlib.pyplot as pyplot
import numpy

######################################################################################

# 神奇的圖
x = [x for x in range(1, 1000)]
y1 = numpy.sin(x)
y2 = numpy.cos(x)
pyplot.scatter(x, y1, color="lightgreen", edgecolors="b", marker="x")
pyplot.scatter(x, y2, color="lightgreen", edgecolors="g", marker="*")
pyplot.axis("off")
pyplot.show()

######################################################################################

# 神奇的圖
x = [x for x in range(1, 30)]
y1 = numpy.sin(x)
y2 = numpy.cos(x)
pyplot.scatter(x, y1, color="lightgreen", edgecolors="b", marker="x")
pyplot.scatter(x, y2, color="lightgreen", edgecolors="g", marker="*")
# pyplot.axis("off")
pyplot.show()

######################################################################################

# sin、cos圖
x = numpy.linspace(0, numpy.pi, 30)  # 建立30個點
y1 = numpy.sin(x)
y2 = numpy.cos(x)
pyplot.scatter(x, y1, color="lightgreen", edgecolors="b", marker="x")
pyplot.scatter(x, y2, color="lightgreen", edgecolors="g", marker="*")
pyplot.show()
