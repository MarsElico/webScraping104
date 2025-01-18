import pandas as pd
import os
import matplotlib.pyplot as plt
from datetime import datetime
from collections import Counter


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


def analyze_job_distribution(folder_path: str) -> tuple:
    category_counter = Counter()
    total_jobs = 0

    for filename in os.listdir(folder_path):
        if filename.endswith('.csv'):
            df = pd.read_csv(os.path.join(folder_path, filename))
            for _, row in df.iterrows():
                if isinstance(row['工作標籤'], str):
                    categories = [cat.strip() for cat in row['工作標籤'].split(',')]
                    for category in categories:
                        if category:
                            category_counter[category] += 1
                            total_jobs += 1

    return category_counter, total_jobs


def create_distribution_charts(category_counter: Counter, total_jobs: int, output_dir: str):
    plt.rcParams['font.sans-serif'] = ['Microsoft YaHei']
    plt.rcParams['axes.unicode_minus'] = False

    # 準備數據
    categories = list(category_counter.keys())
    counts = list(category_counter.values())
    percentages = [count / total_jobs * 100 for count in counts]

    # 創建圖表
    fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(20, 10))

    # 柱狀圖
    bars = ax1.bar(categories, counts)
    ax1.set_title('職位類別分布 (數量)', pad=20)
    ax1.set_xlabel('職位類別')
    ax1.set_ylabel('職位數量')
    plt.setp(ax1.xaxis.get_majorticklabels(), rotation=45, ha='right')

    # 在柱狀圖上添加數值標籤
    for bar in bars:
        height = bar.get_height()
        ax1.text(bar.get_x() + bar.get_width() / 2., height,
                 f'{int(height)}',
                 ha='center', va='bottom')

    # 圓餅圖
    ax2.pie(percentages, labels=categories, autopct='%1.1f%%')
    ax2.set_title('職位類別分布 (比例)', pad=20)

    # 保存圖表
    plt.tight_layout()
    plt.savefig(os.path.join(output_dir, 'job_distribution.png'),
                dpi=300,
                bbox_inches='tight')
    plt.close()


def main():
    input_folder = 'claude'
    output_dir = create_output_directory('job_distribution_analysis')

    try:
        # 分析職位分布
        category_counter, total_jobs = analyze_job_distribution(input_folder)

        # 創建和保存圖表
        create_distribution_charts(category_counter, total_jobs, output_dir)

        # 保存分布數據
        distribution_data = pd.DataFrame({
            'category': list(category_counter.keys()),
            'count': list(category_counter.values()),
            'percentage': [count / total_jobs * 100 for count in category_counter.values()]
        })
        distribution_data.to_csv(os.path.join(output_dir, 'distribution_data.csv'),
                                 index=False)

        print(f"分析完成！結果已保存至：{output_dir}")

    except Exception as e:
        print(f"處理過程中發生錯誤：{str(e)}")


if __name__ == "__main__":
    main()
