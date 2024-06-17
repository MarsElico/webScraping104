import matplotlib.pyplot as pyplot
import pandas as pandas
import my_pyplot


def invoke(date, open, high, low, close):
    # 日期、開盤價、最高價、最低價和收盤價
    data = {
        'Date': date,
        'Open': open,
        'High': high,
        'Low': low,
        'Close': close
    }
    df = pandas.DataFrame(data)
    # df['Date'] = pandas.to_datetime(df['Date'])

    # fig, ax = pyplot.subplots(label="日線圖")
    for i, row in df.iterrows():
        color = 'r' if row['Close'] > row['Open'] else 'g'
        # 繪製柱狀體
        height = abs(row['Close'] - row['Open'])
        bottom = min(row['Close'], row['Open'])
        pyplot.bar(row['Date'], height, bottom=bottom, color=color, width=0.1)

        # 繪製細線（影線）
        pyplot.plot([row['Date'], row['Date']], [row['Low'], row['High']], color=color, linewidth=1)


if __name__ == '__main__':
    my_pyplot.使支援繁體中文()
    date_ = ['2023-01-01', '2023-01-02', '2023-01-03', '2023-01-04', '2023-01-05']
    open_ = [100, 102, 101, 105, 104]
    high_ = [105, 103, 106, 108, 107]
    low_ = [95, 98, 99, 104, 102]
    close_ = [102, 101, 105, 107, 105]
    invoke(date_, open_, high_, low_, close_)

    pyplot.xticks(rotation=45)
    pyplot.title('K線圖柱狀體示例')
    pyplot.xlabel('日期')
    pyplot.ylabel('價格')
    pyplot.show()
