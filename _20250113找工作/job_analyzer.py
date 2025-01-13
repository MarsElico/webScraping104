# job_analyzer.py
import pandas as pd
import re


def extract_keywords(text):
    """從文本中提取關鍵技術詞彙"""
    # 定義關鍵字列表，使用更精確的匹配模式
    # 使用 \b 表示單詞邊界，避免部分匹配
    # 對於特殊字符使用 (?:) 進行分組但不捕獲
    keywords = [
        # 程式語言（注意順序：先匹配更長的詞）
        'JavaScript', 'TypeScript',  # 需要在 Java 前面
        'Java(?:\s|$|,|\.|;)',  # Java 後面需要是空白、結尾、逗號、句號或分號
        'Python(?:\s|$|,|\.|;)',
        'C\+\+',
        'C#',
        'PHP(?:\s|$|,|\.|;)',
        'Ruby(?:\s|$|,|\.|;)',
        'Swift(?:\s|$|,|\.|;)',
        'Kotlin(?:\s|$|,|\.|;)',
        'Go(?:\s|$|,|\.|;)',
        'Node\.js',
        'Rust(?:\s|$|,|\.|;)',
        'Scala(?:\s|$|,|\.|;)',
        'R(?:\s|$|,|\.|;)',

        # 前端技術
        'React(?:\.js|\s|$|,|\.|;)',  # 避免與 ReactNative 混淆
        'Vue(?:\.js|\s|$|,|\.|;)',
        'Angular(?:\s|$|,|\.|;)',
        'HTML(?:\s|$|,|\.|;)',
        'CSS(?:\s|$|,|\.|;)',
        'jQuery',
        'Bootstrap',
        'Sass(?:\s|$|,|\.|;)',
        'Redux(?:\s|$|,|\.|;)',
        'Webpack',
        'ES6',
        'Next\.js',
        'Nuxt\.js',

        # 後端技術
        'Django',
        'Flask',
        'Laravel',
        'Spring(?:\s|Boot|\s|$|,|\.|;)',
        'Express(?:\.js|\s|$|,|\.|;)',
        'Rails',
        'ASP\.NET',

        # 資料庫
        'MySQL',
        'PostgreSQL',
        'MongoDB',
        'Redis',
        'Oracle',
        'SQLite',
        'MariaDB',
        'NoSQL',
        'GraphQL',
        'SQL(?:\s|$|,|\.|;)',  # SQL 需要在其他 SQL 資料庫後面

        # 開發工具和版本控制
        'Git(?:\s|$|,|\.|;)',
        'Docker',
        'Kubernetes',
        'CI/CD',
        'Jenkins',
        'AWS',
        'Azure',
        'GCP',
        'Linux',
        'Unix',

        # 網路和協議
        'TCP/IP',
        'HTTP',
        'REST(?:\s|API|\s|$|,|\.|;)',
        'API(?:\s|$|,|\.|;)',
        'WebSocket',
        'SOAP',

        # 其他技術
        'AI(?:\s|$|,|\.|;)',
        'ML(?:\s|$|,|\.|;)',
        'Deep Learning',
        'DevOps',
        'Agile',
        'Scrum'
    ]

    found_keywords = []
    text = ' ' + text + ' '  # 添加首尾空格以便匹配單詞邊界

    for keyword in keywords:
        pattern = rf'\b{keyword}'
        if re.search(pattern, text, re.IGNORECASE):
            # 移除正則表達式中的特殊字符和匹配條件
            clean_keyword = (keyword.split('(?:')[0]
                             .replace('\\b', '')
                             .replace('\\', '')
                             .rstrip('(?:\\s|$|,|\\.|;)'))
            if clean_keyword not in found_keywords:  # 避免重複
                found_keywords.append(clean_keyword)

    return ','.join(found_keywords)


def determine_job_tag(content, types):
    """根據內容和類型決定工作標籤"""
    content = content.lower()
    if types:
        types = types.lower()

    # 定義關鍵字對應的工作標籤
    keyword_mapping = {
        '全端': '全端工程師',
        'full stack': '全端工程師',
        'frontend': '前端工程師',
        'front-end': '前端工程師',
        'backend': '後端工程師',
        'back-end': '後端工程師',
        'android': 'Android 工程師',
        'ios': 'iOS 工程師',
        'ai': 'AI 工程師',
        'devops': '軟體工程師',
        'qa': '軟韌體測試工程師',
        'test': '軟韌體測試工程師',
        'ui': 'UI 設計師',
        'ux': 'UX 設計師',
        'database': '資料庫管理人員',
        'dba': '資料庫管理人員',
        'algorithm': '演算法工程師',
        'web': '網頁設計師',
        'network': '網路管理工程師'
    }

    # 預設標籤
    default_tag = '軟體工程師'

    # 檢查內容中的關鍵字
    for keyword, tag in keyword_mapping.items():
        if keyword in content or (types and keyword in types):
            return tag

    return default_tag


def process_jobs_data(df):
    """處理工作資料"""
    # 創建新的DataFrame來存儲結果
    result_df = pd.DataFrame(columns=['網址', '工作名稱', '工作標籤', '關鍵字'])

    for _, row in df.iterrows():
        # 合併content和types用於關鍵字提取
        combined_text = f"{row['content']} {row.get('types', '')}"

        # 提取關鍵字
        keywords = extract_keywords(combined_text)

        # 決定工作標籤
        job_tag = determine_job_tag(combined_text, row.get('types', ''))

        # 添加到結果DataFrame
        new_row = {
            '網址': row['job-href'],
            '工作名稱': row['job'],
            '工作標籤': job_tag,
            '關鍵字': keywords
        }
        result_df = pd.concat([result_df, pd.DataFrame([new_row])], ignore_index=True)

    return result_df


def process_csv(file_path):
    """處理CSV文件"""
    # 讀取原始CSV
    df = pd.read_csv(file_path, encoding='utf-8')
    # 處理數據
    result = process_jobs_data(df)
    return result


if __name__ == "__main__":
    from executor import execute

    execute('processing', 'claude', process_csv)
