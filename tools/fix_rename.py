import json
import os
import re

# Read original correct names
with open('parsed_chars.json', 'r') as f:
    chars = json.load(f)

id_to_name = { c['id']: c['name'].replace(' ', '') for c in chars }

with open('js/characters.js', 'r', encoding='utf-8') as f:
    text = f.read()

# We need to parse each character block properly
# A character block starts with { and has id, name, ..., image
blocks = text.split('id: ')
new_blocks = [blocks[0]]

for block in blocks[1:]:
    # extract id
    char_id = block.split("'")[1]
    correct_name = id_to_name.get(char_id)
    
    if not correct_name:
        new_blocks.append('id: ' + block)
        continue
        
    # find the current image path
    img_match = re.search(r"image:\s*'([^']+)'", block)
    if img_match:
        current_img_path = img_match.group(1)
        new_img_path = f"images/{correct_name}.jpg"
        
        # rename file if needed and exists
        if current_img_path != new_img_path:
            if os.path.exists(current_img_path):
                os.rename(current_img_path, new_img_path)
                print(f"Renamed: {current_img_path} -> {new_img_path}")
            elif os.path.exists(f"images/{char_id}.jpg"):
                os.rename(f"images/{char_id}.jpg", new_img_path)
                print(f"Renamed recovering: images/{char_id}.jpg -> {new_img_path}")
            else:
                print(f"Could not find file for {correct_name} (tried {current_img_path})")
                
            # update block text
            block = block.replace(f"image: '{current_img_path}'", f"image: '{new_img_path}'")
            
    new_blocks.append('id: ' + block)

with open('js/characters.js', 'w', encoding='utf-8') as f:
    f.write("".join(new_blocks))

print("Fix completed.")
