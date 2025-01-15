import pandas as pd
from itertools import combinations
from collections import Counter
import os
from typing import List, Dict, Tuple
from datetime import datetime
import json


def extract_skills(row: pd.Series) -> List[str]:
    """從工作標籤和關鍵字欄位提取技能清單"""
    skills = []

    # 合併工作標籤和關鍵字，並進行分割
    for field in ['工作標籤', '關鍵字']:
        if pd.notna(row[field]) and isinstance(row[field], str):
            skills.extend([s.strip() for s in row[field].split(',') if s.strip()])

    return list(set(skills))  # 移除重複技能


def analyze_skill_combinations(df: pd.DataFrame, combination_size: int = 2) -> List[Tuple[tuple, int]]:
    """分析技能組合出現頻率"""
    all_combinations = []

    # 對每一列提取技能並生成組合
    for _, row in df.iterrows():
        skills = extract_skills(row)
        if len(skills) >= combination_size:
            row_combinations = list(combinations(sorted(skills), combination_size))
            all_combinations.extend(row_combinations)

    # 計算組合出現頻率
    combination_counts = Counter(all_combinations)

    # 轉換為排序後的列表
    sorted_combinations = sorted(
        combination_counts.items(),
        key=lambda x: x[1],
        reverse=True
    )

    return sorted_combinations


def save_results_to_file(results: Dict, output_dir: str):
    """將結果保存到指定目錄的JSON和TXT文件中"""
    # 確保輸出目錄存在
    os.makedirs(output_dir, exist_ok=True)

    # 生成時間戳記作為檔案名稱的一部分
    timestamp = datetime.now().strftime("%Y-%m-%d_%H-%M-%S")

    # 保存JSON格式
    # 建立以日期為名稱的子資料夾
    date_folder = datetime.now().strftime("%Y-%m-%d")
    output_date_dir = os.path.join(output_dir, date_folder)
    os.makedirs(output_date_dir, exist_ok=True)

    # 保存 JSON 格式
    json_path = os.path.join(output_date_dir, f'skill_analysis_{timestamp}.json')
    with open(json_path, 'w', encoding='utf-8') as f:
        json.dump(results, f, ensure_ascii=False, indent=2)

    # 保存易讀的 TXT 格式
    txt_path = os.path.join(output_date_dir, f'skill_analysis_{timestamp}.txt')
    with open(txt_path, 'w', encoding='utf-8') as f:
        f.write(f"分析了 {results['total_jobs']} 個職位\n\n")

        f.write("最常見的雙技能組合：\n")
        for pair in results['skill_pairs']:
            f.write(f"{' + '.join(pair['combination'])}: "
                    f"{pair['count']} 次 ({pair['percentage']}%)\n")

        f.write("\n最常見的三技能組合：\n")
        for triple in results['skill_triples']:
            f.write(f"{' + '.join(triple['combination'])}: "
                    f"{triple['count']} 次 ({triple['percentage']}%)\n")

    print(f"\n分析結果已保存到：")
    print(f"JSON格式：{json_path}")
    print(f"TXT格式：{txt_path}")


def analyze_skills_in_directory(directory: str, file_pattern: str = "*.csv") -> Dict:
    """分析目錄中所有CSV檔案的技能組合"""
    import glob

    results = {
        'total_jobs': 0,
        'skill_pairs': [],
        'skill_triples': []
    }

    # 合併所有CSV檔案的資料
    all_data = pd.DataFrame()
    for file_path in glob.glob(os.path.join(directory, file_pattern)):
        try:
            df = pd.read_csv(file_path, encoding='utf-8')
            all_data = pd.concat([all_data, df], ignore_index=True)
            print(f"成功讀取: {file_path}")
        except Exception as e:
            print(f"讀取 {file_path} 時發生錯誤: {str(e)}")

    if len(all_data) == 0:
        return results

    results['total_jobs'] = len(all_data)

    # 分析雙技能組合
    skill_pairs = analyze_skill_combinations(all_data, 2)
    results['skill_pairs'] = [
        {
            'combination': list(comb),
            'count': count,
            'percentage': round(count / len(all_data) * 100, 2)
        }
        for comb, count in skill_pairs[:20]  # 取前20名
    ]

    # 分析三技能組合
    skill_triples = analyze_skill_combinations(all_data, 3)
    results['skill_triples'] = [
        {
            'combination': list(comb),
            'count': count,
            'percentage': round(count / len(all_data) * 100, 2)
        }
        for comb, count in skill_triples[:20]  # 取前20名
    ]

    return results


if __name__ == "__main__":
    # 指定要分析的目錄和輸出目錄
    input_directory = "claude"  # 輸入CSV檔案的目錄
    output_directory = "analysis_results"  # 分析結果的輸出目錄

    # 執行分析
    results = analyze_skills_in_directory(input_directory)

    # 保存結果
    save_results_to_file(results, output_directory)