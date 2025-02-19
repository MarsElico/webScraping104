from bs4 import BeautifulSoup
import requests
from typing import Set, Tuple

class HTMLAnalyzer:
    def __init__(self, html_content: str):
        self.soup = BeautifulSoup(html_content, 'html.parser')
        
    def analyze(self) -> Tuple[Set[str], Set[str]]:
        """分析 HTML 內容，返回標籤和類名集合"""
        tags = set()
        classes = set()
        
        # 找出所有標籤
        for tag in self.soup.find_all(True):
            # 收集標籤名稱
            tags.add(tag.name)
            
            # 收集類名
            if 'class' in tag.attrs:
                if isinstance(tag['class'], list):
                    classes.update(tag['class'])
                else:
                    classes.add(tag['class'])
                    
        return tags, classes

def analyze_html(source: str, is_url: bool = False) -> Tuple[Set[str], Set[str]]:
    """分析 HTML 來源（可以是 URL 或 HTML 文件）"""
    try:
        if is_url:
            # 如果是 URL，先下載內容
            response = requests.get(source)
            response.raise_for_status()  # 檢查是否成功
            html_content = response.text
        else:
            # 如果是文件，直接讀取
            with open(source, 'r', encoding='utf-8') as f:
                html_content = f.read()
        
        # 創建分析器並執行分析
        analyzer = HTMLAnalyzer(html_content)
        tags, classes = analyzer.analyze()
        
        # 輸出結果
        print("\n=== HTML Tags Used ===")
        print(", ".join(sorted(tags)))
        
        print("\n=== CSS Classes Used ===")
        print(", ".join(sorted(classes)))
        
        return tags, classes
        
    except requests.RequestException as e:
        print(f"Error fetching URL: {e}")
    except IOError as e:
        print(f"Error reading file: {e}")
    except Exception as e:
        print(f"Unexpected error: {e}")
    
    return set(), set()

# 使用範例
if __name__ == "__main__":
    # 分析文件
    print("Analyzing local file...")
    tags, classes = analyze_html("example.html")
    
    # 分析網址
    print("\nAnalyzing URL...")
    tags, classes = analyze_html("https://example.com", is_url=True)