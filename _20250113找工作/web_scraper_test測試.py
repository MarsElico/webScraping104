# 印出元素的HTML內容
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC


def print_element(element):
    print("\n--- Element HTML Content ---")
    print(element.get_attribute('innerHTML'))

    # 印出所有可用的元素屬性
    print("\n--- Element Attributes ---")
    print("Class:", element.get_attribute('class'))
    print("ID:", element.get_attribute('id'))

    # 嘗試找到連結並印出詳細信息
    links = element.find_elements(By.TAG_NAME, "a")
    print("\n--- All Links in Element ---")
    for link in links:
        print("Link Text:", link.text)
        print("Link Href:", link.get_attribute('href'))
        print("Link Class:", link.get_attribute('class'))
        print("---")


def print_body(driver):
    # 創建 WebDriverWait 實例
    wait = WebDriverWait(driver, 2)  # 2 秒超時

    # 等待頁面主要內容加載完成
    main_content = wait.until(
        EC.presence_of_element_located((By.TAG_NAME, "body"))
    )

    print(main_content)
    print_element(f"\n{main_content}")

    # 檢查整個頁面結構
    print("\n=== 頁面結構分析 ===")

    # 尋找所有可能的職位標題元素
    possible_titles = driver.find_elements(By.CSS_SELECTOR, "h1")
    print("\n--- 所有 H1 標題 ---")
    for title in possible_titles:
        print_element(title)

    # 特別檢查目標元素
    print("\n--- 目標職位標題元素 ---")
    target_titles = driver.find_elements(By.CSS_SELECTOR, "h1.job-header__title")
    if target_titles:
        for title in target_titles:
            print_element(title)
    else:
        print("未找到指定的職位標題元素，可能需要調整選擇器")

    return main_content
