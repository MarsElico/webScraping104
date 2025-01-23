# bug
import requests
import json
import time


def get_time4jobs():
    # 修正 API 網址
    url = "https://www.104.com.tw/jb/104i/joblist/view"

    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Referer': 'https://time4jobs.104.com.tw/',
        'Accept': 'application/json'
    }

    # API 參數
    params = {
        'regionType': '1',
        'transType': '1',  # 1:騎機車 2:走路 3:腳踏車 4:開車 5:捷運
        'tLat': '24.158315',  # 目標位置緯度
        'tLon': '120.7412085',  # 目標位置經度
        'time': '25',  # 通勤時間(分鐘)
        'address': '404023台中市北區英才路390-2號',
        'jobcat': '2007001000,2007002002,2007002003,2007002005,2007002007',
        'lat': '24.158315',
        'lon': '120.7412085',
        'order': '12',
        'asc': '0',
        'dist': '7.5',
        'showLatLon': '1',
        'page': '1'
    }

    jobs = []
    page = 1

    while True:
        params['page'] = str(page)
        try:
            response = requests.get(url, params=params, headers=headers)
            print(f"Status Code: {response.status_code}")
            print(f"URL: {response.url}")

            if response.status_code == 200:
                data = response.json()
                if not data['data']['list']:
                    break

                for job in data['data']['list']:
                    job_info = {
                        'title': job['jobName'],
                        'company': job['custName'],
                        'salary': job['salaryDesc'],
                        'distance': f"{job['distance']}公里",
                        'address': job['jobAddrNoDesc'],
                        'link': f"https://www.104.com.tw/job/{job['jobNo']}"
                    }
                    jobs.append(job_info)
                    print(f"已爬取職缺: {job_info['title']} ({job_info['distance']})")

                page += 1
                time.sleep(1)
            else:
                print(f"錯誤回應內容: {response.text}")
                break

        except Exception as e:
            print(f"錯誤: {str(e)}")
            break

    return jobs


if __name__ == '__main__':
    jobs = get_time4jobs()

    # 儲存結果
    with open('104_time4jobs.json', 'w', encoding='utf-8') as f:
        json.dump(jobs, f, ensure_ascii=False, indent=2)

    # 印出結果
    print(f"\n共爬取 {len(jobs)} 筆職缺")
    for job in jobs:
        print('-' * 50)
        for key, value in job.items():
            print(f"{key}: {value}")