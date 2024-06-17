from ptt_nba import get_nba_data
import pandas


# TODO 原版
# TODO write_csv
# data_frame.to_csv("ptt_nba.csv", encoding="utf-8")  # TODO 亂碼
# print("資料已儲存成 ptt_nba.csv")
def write_excel(file_name, data_list):
    """使用pandas，原版的還要再看情況"""
    data_frame = pandas.DataFrame(data_list)
    data_frame.to_excel(file_name, index=False, engine="openpyxl")
    print("資料已儲存成", file_name)


if __name__ == '__main__':
    data_list = get_nba_data()
    write_excel("ptt_nba.xlsx", data_list)
