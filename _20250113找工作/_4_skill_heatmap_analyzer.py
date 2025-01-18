import pandas as pd
import os
import seaborn as sns
import matplotlib.pyplot as plt
from datetime import datetime
from collections import defaultdict
import numpy as np


def create_output_directory(prefix: str) -> str:
    timestamp = datetime.now().strftime("%Y-%m-%d_%H-%M-%S")
    folder_name = f"{prefix}_{timestamp}"

    base_dir = "analysis_results"
    date_folder = datetime.now().strftime("%Y-%m-%d")
    date_path = os.path.join(base_dir, date_folder)

    if not os.path.exists(date_path):
        os.makedirs(date_path)

    output_dir = os.path.join(date_path, folder_name)
    os.makedirs(output_dir)
    return output_dir


def analyze_skill_heat(folder_path: str, min_frequency: int = 3) -> pd.DataFrame:
    """
    分析技能熱度，並過濾低頻技能

    Args:
        folder_path: 數據文件夾路徑
        min_frequency: 最小出現頻率閾值
    """
    all_categories = set()
    skill_frequency = defaultdict(lambda: defaultdict(int))
    total_skill_freq = defaultdict(int)  # 記錄每個技能的總出現次數

    # 收集數據
    for filename in os.listdir(folder_path):
        if filename.endswith('.csv'):
            df = pd.read_csv(os.path.join(folder_path, filename))
            for _, row in df.iterrows():
                if isinstance(row['工作標籤'], str) and isinstance(row['關鍵字'], str):
                    categories = [cat.strip() for cat in row['工作標籤'].split(',')]
                    skills = [skill.strip() for skill in row['關鍵字'].split(',')]

                    for category in categories:
                        if category:
                            all_categories.add(category)
                            for skill in skills:
                                if skill:
                                    skill_frequency[category][skill] += 1
                                    total_skill_freq[skill] += 1

    # 過濾出重要技能（出現頻率達到閾值的技能）
    important_skills = {skill for skill, freq in total_skill_freq.items()
                        if freq >= min_frequency}

    # 創建熱力圖矩陣
    categories = sorted(list(all_categories))
    skills = sorted(list(important_skills))

    # 創建並填充熱力圖數據
    heat_matrix = np.zeros((len(categories), len(skills)))
    for i, category in enumerate(categories):
        for j, skill in enumerate(skills):
            heat_matrix[i, j] = skill_frequency[category][skill]

    return pd.DataFrame(heat_matrix, index=categories, columns=skills)


def create_heatmap(data: pd.DataFrame, output_dir: str):
    """
    創建優化後的熱力圖
    """
    # 設置中文字體
    plt.rcParams['font.sans-serif'] = ['Microsoft YaHei']
    plt.rcParams['axes.unicode_minus'] = False

    # 計算適當的圖形大小
    fig_width = max(20, len(data.columns) * 0.8)  # 根據技能數量調整寬度
    fig_height = max(12, len(data.index) * 0.8)  # 根據類別數量調整高度

    # 創建圖形
    plt.figure(figsize=(fig_width, fig_height))

    # 創建熱力圖
    sns.heatmap(data,
                annot=True,  # 顯示數值
                fmt='.0f',  # 數值格式（整數）
                cmap='YlOrRd',  # 色彩方案
                cbar_kws={'label': '出現頻率'},
                square=True,  # 方形單元格
                linewidths=0.5,  # 網格線寬度
                )

    plt.title('職位類別-技能需求熱度圖', pad=20, fontsize=16)
    plt.xlabel('技能', labelpad=10, fontsize=12)
    plt.ylabel('職位類別', labelpad=10, fontsize=12)

    # 調整x軸標籤
    plt.xticks(rotation=45, ha='right')
    plt.yticks(rotation=0)

    # 調整布局
    plt.tight_layout()

    # 保存兩個版本的圖片
    # 1. 常規版本
    plt.savefig(os.path.join(output_dir, 'skill_heatmap.png'),
                dpi=300,
                bbox_inches='tight')

    # 2. 超大版本（用於放大查看細節）
    plt.savefig(os.path.join(output_dir, 'skill_heatmap_large.png'),
                dpi=600,
                bbox_inches='tight')

    plt.close()


def main():
    input_folder = 'claude'
    output_dir = create_output_directory('skill_heatmap_analysis')

    try:
        # 生成熱力圖數據（設置最小出現頻率為3次）
        heat_data = analyze_skill_heat(input_folder, min_frequency=3)

        # 創建和保存熱力圖
        create_heatmap(heat_data, output_dir)

        # 保存原始數據
        heat_data.to_csv(os.path.join(output_dir, 'heatmap_data.csv'))

        # 生成數據摘要
        summary = {
            "總技能數": len(heat_data.columns),
            "職位類別數": len(heat_data.index),
            "數據範圍": {
                "最小值": heat_data.values.min(),
                "最大值": heat_data.values.max(),
                "平均值": heat_data.values.mean()
            }
        }

        # 保存摘要信息
        with open(os.path.join(output_dir, 'analysis_summary.txt'), 'w', encoding='utf-8') as f:
            f.write("熱力圖分析摘要\n")
            f.write("=" * 50 + "\n")
            f.write(f"總技能數: {summary['總技能數']}\n")
            f.write(f"職位類別數: {summary['職位類別數']}\n")
            f.write(f"數據範圍:\n")
            f.write(f"  最小值: {summary['數據範圍']['最小值']:.0f}\n")
            f.write(f"  最大值: {summary['數據範圍']['最大值']:.0f}\n")
            f.write(f"  平均值: {summary['數據範圍']['平均值']:.2f}\n")

        print(f"分析完成！結果已保存至：{output_dir}")
        print("包含以下文件：")
        print("- skill_heatmap.png (標準版熱力圖)")
        print("- skill_heatmap_large.png (高解析度版本)")
        print("- heatmap_data.csv (原始數據)")
        print("- analysis_summary.txt (分析摘要)")

    except Exception as e:
        print(f"處理過程中發生錯誤：{str(e)}")


if __name__ == "__main__":
    main()
