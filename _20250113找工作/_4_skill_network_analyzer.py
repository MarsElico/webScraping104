import pandas as pd
import os
import networkx as nx
import matplotlib.pyplot as plt
from datetime import datetime
from collections import defaultdict


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


def analyze_skill_network(folder_path: str) -> tuple:
    skill_connections = defaultdict(lambda: defaultdict(int))
    skill_frequencies = defaultdict(int)

    for filename in os.listdir(folder_path):
        if filename.endswith('.csv'):
            df = pd.read_csv(os.path.join(folder_path, filename))
            for _, row in df.iterrows():
                if isinstance(row['關鍵字'], str):
                    skills = [skill.strip() for skill in row['關鍵字'].split(',')]
                    skills = [s for s in skills if s]  # 移除空值

                    # 計算技能出現頻率
                    for skill in skills:
                        skill_frequencies[skill] += 1

                    # 計算技能間的關聯
                    for i in range(len(skills)):
                        for j in range(i + 1, len(skills)):
                            skill_connections[skills[i]][skills[j]] += 1
                            skill_connections[skills[j]][skills[i]] += 1

    return skill_connections, skill_frequencies


def create_network_graph(connections: dict, frequencies: dict, output_dir: str):
    plt.rcParams['font.sans-serif'] = ['Microsoft YaHei']
    plt.rcParams['axes.unicode_minus'] = False

    # 創建圖形
    G = nx.Graph()

    # 添加節點和邊
    for skill1, connections_dict in connections.items():
        for skill2, weight in connections_dict.items():
            if weight >= 2:  # 只顯示出現至少2次的關聯
                G.add_edge(skill1, skill2, weight=weight)

    # 設置節點大小（基於出現頻率）
    node_sizes = [frequencies.get(node, 1) * 100 for node in G.nodes()]

    # 創建圖形
    plt.figure(figsize=(20, 20))
    pos = nx.spring_layout(G, k=1, iterations=50)

    # 繪製網絡
    nx.draw_networkx_nodes(G, pos, node_size=node_sizes, node_color='lightblue')
    nx.draw_networkx_edges(G, pos, alpha=0.2)
    nx.draw_networkx_labels(G, pos, font_size=8)

    plt.title('技能關聯網絡圖', pad=20)
    plt.axis('off')

    # 保存圖片
    plt.savefig(os.path.join(output_dir, 'skill_network.png'),
                dpi=300,
                bbox_inches='tight')
    plt.close()


def main():
    input_folder = 'claude'
    output_dir = create_output_directory('skill_network_analysis')

    try:
        # 分析技能網絡
        connections, frequencies = analyze_skill_network(input_folder)

        # 創建和保存網絡圖
        create_network_graph(connections, frequencies, output_dir)

        # 保存關聯數據
        relationship_data = {
            'skill_frequencies': frequencies,
            'skill_connections': {f"{k1}-{k2}": v
                                  for k1, d in connections.items()
                                  for k2, v in d.items()}
        }
        pd.DataFrame(relationship_data).to_csv(
            os.path.join(output_dir, 'network_data.csv'))

        print(f"分析完成！結果已保存至：{output_dir}")

    except Exception as e:
        print(f"處理過程中發生錯誤：{str(e)}")


if __name__ == "__main__":
    main()
