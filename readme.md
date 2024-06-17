## 目標資料
關鍵字：python、台中市、資料工程師
使用web scraper爬取滾動加載的頁面
temp_url = https://www.104.com.tw/jobs/search/?keyword=python
url = "https://www.104.com.tw/jobs/search/?ro=0&jobcat=2007001022&keyword=python&expansionType=area%2Cspec%2Ccom%2Cjob%2Cwf%2Cwktm&area=6001008000&order=14&asc=0&page=1&mode=s&jobsource=index_s&langFlag=0&langStatus=0&recommendJob=1&hotJob=1"
v標題 | v網址 | v薪水 | v內文 | 公司 |
v應徵者：應徵人數 | 學歷分布 | 年齡分布
學歷分佈=
需求人數
v上班地點
v工作經歷 | 擅長工具 | 工作技能
v福利制度(法定項目(勞保、周休二日))
上班時段

## 獲得url_應徵者資料
<a data-v-704cbba1="" class="font-weight-bold d-inline-block pl-2 align-middle" href="//www.104.com.tw/jobs/apply/analysis/854al" target="_blank" rel="noopener"><div data-v-e22ef343="" data-v-704cbba1="" class="analysisBars d-inline-block align-text-top mr-1" data-gtm-head="應徵分析"><span data-v-e22ef343="" class="analysisBars__item"></span><span data-v-e22ef343="" class="analysisBars__item active"></span><span data-v-e22ef343="" class="analysisBars__item active"></span><span data-v-e22ef343="" class="analysisBars__item active"></span></div> 11~30人應徵</a>

## 
final_104_文字雲.py
初版，只紀錄出現次數

final_104_文字雲_前十名.py
```angular2html
一共57種專長
前10名
              Item  Count
50       Database     55
22         Csharp     42
20        Website     27
36         Python     26
12            Git     22
23              R     18
5            Java     14
19         Django     12
11  Data Modeling     11
27      Power BI​     10
```

final_104_文字雲_percent.py
```angular2html
        col     rate
0    Python  296.045
1  Database  274.500
2   Website  109.940
3    Csharp   93.930
4       Git   86.385
5         R   83.770
6      Java   65.625
7       C++   39.960
8         C   36.920
9     Linux   36.405
```

final_104_文字雲_percent_細節.py
```angular2html
      col     rate
0  Python  296.045
1   MySQL  176.200
2       R   83.770
3  MS SQL   71.605
4    Java   65.625
5     Git   51.085
6     C++   39.960
7       C   36.920
8   Linux   36.405
9  Github   35.300
```
