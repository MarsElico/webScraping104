import xml.etree.ElementTree as ET


def read_xml(filename: str) -> dict:
    """
    Read XML file and convert to dictionary
    :param filename: Input XML filename
    :return: Dictionary representation of XML
    """
    tree = ET.parse(filename)
    root = tree.getroot()
    return _xml_to_dict(root)


def _xml_to_dict(element):
    """
    Recursively convert XML elements to dictionary
    """
    result = {}
    
    # Convert attributes to dict items
    for key, value in element.attrib.items():
        result[key] = value
        
    # Handle child elements
    children = list(element)
    if children:
        # Check if children have same tags (list case)
        child_tags = [child.tag for child in children]
        if len(set(child_tags)) == 1:
            result[children[0].tag] = [_xml_to_dict(child) for child in children]
        else:
            for child in children:
                child_data = _xml_to_dict(child)
                if child.tag in result:
                    # Convert to list if duplicate tags
                    if not isinstance(result[child.tag], list):
                        result[child.tag] = [result[child.tag]]
                    result[child.tag].append(child_data)
                else:
                    result[child.tag] = child_data
    
    # Handle text content
    if element.text and element.text.strip():
        if children:
            result["text"] = element.text.strip()
        else:
            return element.text.strip()
            
    return result


if __name__ == "__main__":
    data = read_xml("test.xml")
    print(data)