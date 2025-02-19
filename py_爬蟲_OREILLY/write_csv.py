import csv


def write_csv(file_name, list_tuple):
    csv_file = open(file_name, "w+", newline="\n", encoding="big5")
    try:
        writer = csv.writer(csv_file)
        for tuple_ in list_tuple:
            writer.writerow(tuple_)
    finally:
        csv_file.close()


if __name__ == '__main__':
    data = [("name", "age", "city"), ("Kanaria", 21, "vocaloid"), ("Yoasobi", 23, "東京都"), ("王凱", 41, "武漢")]
    write_csv("test.csv", data)
