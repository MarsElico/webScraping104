# sort_keys=True 參數，這會讓JSON文件中的鍵按字母順序排列。第二段代碼沒有使用這個參數，所以鍵的順序會是原始順序。
# ensure_ascii 參數控制著輸出的JSON字符串中的非ASCII字符是否被轉義。如果設置為 False，非ASCII字符（比如中文）會按原樣輸出，不會被轉成\uXXXX的形式。這對於保持文件的可讀性很有幫助。
import json


def write_json(file_name, dict_list):
    with open(file_name, "w", encoding="utf-8") as f:
        json.dump(dict_list, f, indent=4, ensure_ascii=False, sort_keys=True)
        print("資料已儲存成", file_name)


if __name__ == '__main__':
    from ptt_nba import get_nba_data
    data = get_nba_data()
    write_json("ptt_nba.json", data)
