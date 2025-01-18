import pandas as pd
import os
from collections import defaultdict
from typing import Dict, List, Tuple
import matplotlib.pyplot as plt
from datetime import datetime
import json


def create_output_directory() -> str:
    """
    創建輸出目錄

    Returns:
        str: 輸出目錄的路徑
    """
    # 獲取當前時間並格式化
    timestamp = datetime.now().strftime("%Y-%m-%d_%H-%M-%S")
    folder_name = f"job_category_insights_{timestamp}"

    # 創建基礎輸出目錄
    base_dir = "analysis_results"
    if not os.path.exists(base_dir):
        os.makedirs(base_dir)

    # 獲取今天的日期作為子目錄
    date_folder = datetime.now().strftime("%Y-%m-%d")
    date_path = os.path.join(base_dir, date_folder)
    if not os.path.exists(date_path):
        os.makedirs(date_path)

    # 創建最終的輸出目錄
    output_dir = os.path.join(date_path, folder_name)
    os.makedirs(output_dir)

    return output_dir


def analyze_job_categories(folder_path: str) -> Dict[str, Dict[str, int]]:
    """
    分析所有文件中的工作類別和對應技能需求
    """
    category_skills = defaultdict(lambda: defaultdict(int))

    for filename in os.listdir(folder_path):
        if filename.endswith('.csv'):
            file_path = os.path.join(folder_path, filename)
            try:
                df = pd.read_csv(file_path, encoding='utf-8')
                for _, row in df.iterrows():
                    if isinstance(row['工作標籤'], str):
                        categories = [cat.strip() for cat in row['工作標籤'].split(',')]
                        if isinstance(row['關鍵字'], str):
                            skills = [skill.strip() for skill in row['關鍵字'].split(',')]
                            for category in categories:
                                if category:
                                    for skill in skills:
                                        if skill:
                                            category_skills[category][skill] += 1
            except Exception as e:
                print(f"處理文件 {filename} 時發生錯誤：{str(e)}")

    return category_skills


def get_top_skills(category_skills: Dict[str, Dict[str, int]],
                   min_frequency: int = 2,
                   top_n: int = 15) -> Dict[str, List[Tuple[str, int]]]:
    """
    獲取每個類別的主要技能
    """
    result = {}
    for category, skills in category_skills.items():
        filtered_skills = [(skill, count) for skill, count in skills.items()
                           if count >= min_frequency]
        sorted_skills = sorted(filtered_skills, key=lambda x: x[1], reverse=True)[:top_n]
        if sorted_skills:
            result[category] = sorted_skills
    return result


def save_visualization(category_skills: Dict[str, List[Tuple[str, int]]], output_dir: str):
    """
    保存視覺化圖表
    """
    plt.rcParams['font.sans-serif'] = ['Microsoft YaHei']
    plt.rcParams['axes.unicode_minus'] = False

    n_categories = len(category_skills)
    fig, axes = plt.subplots(n_categories, 1, figsize=(15, 6 * n_categories))
    if n_categories == 1:
        axes = [axes]

    fig.suptitle('工作類別技能需求分析', fontsize=16, y=0.95)

    for ax, (category, skills) in zip(axes, category_skills.items()):
        skill_names = [skill[0] for skill in skills][::-1]  # 倒序
        skill_counts = [skill[1] for skill in skills][::-1]  # 倒序

        bars = ax.barh(range(len(skill_names)), skill_counts)
        ax.set_title(f'{category}', pad=20)
        ax.set_yticks(range(len(skill_names)))
        ax.set_yticklabels(skill_names)

        for bar in bars:
            width = bar.get_width()
            ax.text(width, bar.get_y() + bar.get_height() / 2,
                    f'{int(width)}次',
                    ha='left', va='center')

    plt.tight_layout()
    plt.savefig(os.path.join(output_dir, 'skills_analysis.png'), dpi=300, bbox_inches='tight')
    plt.close()


def save_results(category_skills: Dict[str, List[Tuple[str, int]]], output_dir: str):
    """
    保存分析結果到文本和JSON文件
    """
    # 保存為文本文件
    with open(os.path.join(output_dir, 'analysis_report.txt'), 'w', encoding='utf-8') as f:
        f.write("工作類別技能需求分析報告\n")
        f.write("=" * 50 + "\n\n")
        for category, skills in category_skills.items():
            f.write(f"\n{category} 類別的主要技能需求：\n")
            f.write("-" * 50 + "\n")
            for skill, count in skills:
                f.write(f"{skill}: {count}次\n")

    # 保存為JSON文件（方便後續程序讀取）
    json_data = {category: dict(skills) for category, skills in category_skills.items()}
    with open(os.path.join(output_dir, 'analysis_data.json'), 'w', encoding='utf-8') as f:
        json.dump(json_data, f, ensure_ascii=False, indent=2)


def main():
    input_folder = 'claude'

    try:
        # 創建輸出目錄
        output_dir = create_output_directory()
        print(f"分析結果將保存在：{output_dir}")

        # 分析數據
        raw_stats = analyze_job_categories(input_folder)
        category_skills = get_top_skills(raw_stats, min_frequency=2, top_n=15)

        # 保存結果
        save_results(category_skills, output_dir)
        save_visualization(category_skills, output_dir)

        print(f"\n分析完成！結果已保存至：{output_dir}")
        print("包含以下文件：")
        print("- analysis_report.txt (文本報告)")
        print("- analysis_data.json (JSON格式數據)")
        print("- skills_analysis.png (視覺化圖表)")

    except Exception as e:
        print(f"處理過程中發生錯誤：{str(e)}")


if __name__ == "__main__":
    main()
