import csv


def read_csv_to_list(file_name: str, encoding="utf-8"):
    datalist = []
    with open(file_name, "r", newline="", encoding=encoding) as file:
        reader = csv.reader(file)
        for row in reader:
            datalist.append(row)
    return datalist


if __name__ == '__main__':
    list_ = read_csv_to_list("ptt_nba.csv")
    print(type(list_[0]))
    print(list_[0])
    print(list_[0][2])
