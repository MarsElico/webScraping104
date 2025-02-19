import pandas


def read_csv_to_DataFrame(file_name: str):
    return pandas.read_csv(file_name, encoding="utf-8")


if __name__ == '__main__':
    df = read_csv_to_DataFrame("ptt_nba.csv")
    print(df)
    print(type(df), end="\n\n\n")
    print(df["標題"], end="\n\n\n")
    print(df.loc[1])
