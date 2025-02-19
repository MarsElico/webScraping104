import json
import xml.etree.ElementTree as ET
from xml.dom import minidom
from typing import Union, Dict, List


def xml_to_json(xml_file: str, json_file: str) -> None:
    """
    Convert XML file to JSON file
    :param xml_file: Input XML filename
    :param json_file: Output JSON filename
    """
    # Parse XML
    tree = ET.parse(xml_file)
    root = tree.getroot()
    
    # Convert to dict
    data = _xml_to_dict(root)
    
    # Write JSON
    with open(json_file, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)


def json_to_xml(json_file: str, xml_file: str, root_name: str = "root") -> None:
    """
    Convert JSON file to XML file
    :param json_file: Input JSON filename
    :param xml_file: Output XML filename
    :param root_name: Name of root element
    """
    # Read JSON
    with open(json_file, 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    # Create XML
    root = ET.Element(root_name)
    _dict_to_xml(root, data)
    
    # Write pretty XML
    xml_str = minidom.parseString(ET.tostring(root)).toprettyxml(indent="  ")
    with open(xml_file, 'w', encoding='utf-8') as f:
        f.write(xml_str)


def _xml_to_dict(element: ET.Element) -> Union[Dict, List, str]:
    """Helper function to convert XML to dictionary"""
    result = {}
    
    # Handle attributes
    if element.attrib:
        result.update(element.attrib)
    
    # Handle child elements
    for child in element:
        child_data = _xml_to_dict(child)
        if child.tag in result:
            if not isinstance(result[child.tag], list):
                result[child.tag] = [result[child.tag]]
            result[child.tag].append(child_data)
        else:
            result[child.tag] = child_data
            
    # Handle text
    text = element.text.strip() if element.text else ""
    if text:
        if result:
            result['text'] = text
        else:
            result = text
            
    return result


def _dict_to_xml(parent: ET.Element, data: Union[Dict, List, str]) -> None:
    """Helper function to convert dictionary to XML"""
    if isinstance(data, dict):
        for key, value in data.items():
            if key == 'text':
                parent.text = str(value)
            else:
                child = ET.SubElement(parent, str(key))
                _dict_to_xml(child, value)
    elif isinstance(data, list):
        for item in data:
            child = ET.SubElement(parent, "item")
            _dict_to_xml(child, item)
    else:
        parent.text = str(data)


if __name__ == "__main__":
    # Test conversion
    test_data = {
        "person": {
            "name": "John",
            "age": 30,
            "addresses": [
                {"type": "home", "city": "New York"},
                {"type": "work", "city": "Boston"}
            ]
        }
    }
    
    # Write test JSON
    with open("test.json", "w") as f:
        json.dump(test_data, f, indent=2)
        
    # Test conversions
    json_to_xml("test.json", "test.xml")
    xml_to_json("test.xml", "converted.json")