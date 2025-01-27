# _3_job_analyzer.py
# 記得先刪除空白欄位，否則報錯
import pandas as pd
import re


def clean_keyword(keyword):
    """清理關鍵字，保留特殊格式"""
    # 移除正則表達式的特殊字符，但保留某些特殊格式
    clean = (keyword.split('(?:')[0]  # 移除匹配條件部分
             .replace('\\b', '')  # 移除單詞邊界標記
             .rstrip('(?:\\s|$|,|\\.|;)'))  # 移除結尾的匹配條件

    # 特殊處理帶有 .js 的關鍵字
    if '\\.' in keyword and 'js' in keyword.lower():
        clean = clean.replace('\\.', '.')

    return clean


def extract_keywords(text):
    """從文本中提取關鍵技術詞彙"""
    # 完整匹配的關鍵字（不需要正則表達式）
    exact_keywords = {
        'Node.js',
        'Next.js',
        'Nuxt.js',
        'Express.js',
        'React.js',
        'Vue.js',
        'C++',
        'C#',
        'ASP.NET',
        'TCP/IP',
        'CI/CD',
    }

    # 需要正則匹配的關鍵字
    regex_keywords = [
        'JavaScript',
        'TypeScript',
        'Python',
        'Java(?!\S)',  # 否定前瞻，確保後面不是其他字符
        'PHP',
        'Ruby',
        'Swift',
        'Kotlin',
        'Go(?!\S)',
        'Rust',
        'Scala',
        'React(?!\S)',
        'Vue(?!\S)',
        'Angular',
        'HTML',
        'CSS',
        'jQuery',
        'Bootstrap',
        'Sass',
        'Redux',
        'Webpack',
        'ES6',
        'Django',
        'Flask',
        'Laravel',
        'Spring',
        'Rails',
        'MySQL',
        'PostgreSQL',
        'MongoDB',
        'Redis',
        'Oracle',
        'SQLite',
        'MariaDB',
        'NoSQL',
        'GraphQL',
        'SQL(?!\S)',
        'Git',
        'Docker',
        'Kubernetes',
        'Jenkins',
        'AWS',
        'Azure',
        'GCP',
        'Linux',
        'Unix',
        'HTTP',
        'REST',
        'API',
        'WebSocket',
        'SOAP',
        'AI(?!\S)',
        'ML(?!\S)',
        'Deep Learning',
        'DevOps',
        'Agile',
        'Scrum'
    ]

    found_keywords = set()  # 使用集合避免重複

    # 1. 先檢查完整匹配的關鍵字
    for keyword in exact_keywords:
        if keyword.lower() in text.lower():
            found_keywords.add(keyword)

    # 2. 再檢查需要正則匹配的關鍵字
    for keyword in regex_keywords:
        pattern = rf'\b{keyword}\b'
        if re.search(pattern, text, re.IGNORECASE):
            # 保存原始匹配的文本
            match = re.search(pattern, text, re.IGNORECASE).group()
            found_keywords.add(match)

    return ','.join(sorted(found_keywords))  # 排序以保持穩定輸出


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
    # df = df.astype(str)。修正AttributeError: 'float' object has no attribute 'astype'
    df = pd.read_csv(file_path, encoding='utf-8')
    df = df.astype(str)
    # 處理數據
    result = process_jobs_data(df)
    return result


if __name__ == "__main__":
    from executor import execute

    execute('processing', 'claude', process_csv)
