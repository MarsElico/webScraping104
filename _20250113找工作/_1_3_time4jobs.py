import requests
import time
from urllib.parse import urlparse, parse_qs


def get_104_time4jobs(url):
    # 從URL解析參數
    parsed_url = urlparse(url)
    params = parse_qs(parsed_url.query)

    # 修正後的API請求網址
    api_url = 'https://www.104.com.tw/jobs/search/list'

    # 必要的請求標頭
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Referer': 'https://time4jobs.104.com.tw/',
        'Accept': 'application/json, text/plain, */*'
    }

    # 組合API參數
    api_params = {
        'ro': '0',  # 全職
        'jobcat': params.get('jobcat', [''])[0],
        'area': '',  # 地區
        'order': params.get('order', [''])[0],  # 排序方式
        'asc': params.get('asc', [''])[0],  # 排序方向
        'page': '1',
        'mode': 's',  # 搜尋模式
        'jobsource': 'n_my104_new',
        'langFlag': '0',
        'langStatus': '0',
        'recommendJob': '1',
        'hotJob': '1'
    }

    try:
        response = requests.get(api_url, params=api_params, headers=headers)
        print("Status Code:", response.status_code)

        if response.status_code == 200:
            data = response.json()
            return data
        else:
            print(f"Error: Status code {response.status_code}")
            return None

    except Exception as e:
        print(f"Error: {e}")
        return None


# 使用範例
url = "https://time4jobs.104.com.tw/?transType=1&tLat=24.158315&tLon=120.7412085&time=25&address=太平區大興十七街101號&jobcat=2007001000,2007002002,2007002003,2007002005,2007002007&lat=24.158315&lon=120.7412085&order=12&asc=0&dist=7.5&showLatLon=1"

data = get_104_time4jobs(url)

if data and 'data' in data:
    jobs = data['data']['list']
    for job in jobs:
        print(f"職缺名稱: {job['jobName']}")
        print(f"公司名稱: {job['custName']}")
        print(f"工作地點: {job['jobAddress']}")
        print(f"薪資待遇: {job['salaryDesc']}")
        print("-" * 50)