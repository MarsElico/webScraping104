import twstock, pandas, sqlite3


def get_twstock_df(ticker_symbol: str, year: int, month: int):
    ### (股票代號, 年, 月)
    data = twstock.Stock(ticker_symbol).fetch_from(year, month)
    df = pandas.DataFrame(data)
    return df


def df_to_csv(file_path, df):
    df.to_csv(file_path)


def df_to_sqlite(db_path, table_name, df):
    sql_connect = open_or_create_sql(db_path)
    df.to_sql(table_name, sql_connect, if_exists="replace")
    sql_connect.close()

# 創建sqlite或連接現有sqlite檔案
def open_or_create_sql(db_path: str):
    # 连接到SQLite数据库
    # 如果文件不存在，会自动在当前文件夹创建
    return sqlite3.connect(db_path)


if __name__ == '__main__':
    df = get_twstock_df("2330", 2024, 2)
    df_to_csv("test.csv", df)
    df_to_sqlite("EX1.db", "2330 2024-02", df)
