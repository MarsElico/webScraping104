import xml.etree.ElementTree as ET
from xml.dom import minidom


def write_xml(filename: str, data: dict, root_name: str = "root"):
    """
    Write dictionary data to XML file
    :param filename: Output XML filename
    :param data: Dictionary to convert to XML
    :param root_name: Name of root element
    """
    root = ET.Element(root_name)
    _dict_to_xml(root, data)
    
    # Convert to string with pretty formatting
    xml_str = minidom.parseString(ET.tostring(root)).toprettyxml(indent="  ")
    
    # Write to file
    with open(filename, "w", encoding="utf-8") as f:
        f.write(xml_str)


def _dict_to_xml(parent, data):
    """
    Recursively convert dictionary to XML elements
    """
    if isinstance(data, dict):
        for key, value in data.items():
            child = ET.SubElement(parent, str(key))
            _dict_to_xml(child, value)
    elif isinstance(data, list):
        for item in data:
            child = ET.SubElement(parent, "item")
            _dict_to_xml(child, item)
    else:
        parent.text = str(data)


if __name__ == "__main__":
    # Test data
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
    
    write_xml("test.xml", test_data)