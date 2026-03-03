import json
import os
import re

with open('rename_plan.json', 'r') as f:
    renames = json.load(f)

with open('parsed_chars.json', 'r') as f:
    chars = json.load(f)

id_to_name = { c['id']: c['name'].replace(' ', '') for c in chars }

file_to_orig = {}
char_id_to_orig = {}
for src, dst in renames:
    char_id = dst.split('/')[-1].replace('.jpg', '')
    char_id_to_orig[char_id] = src
    correct_name = id_to_name.get(char_id)
    if correct_name:
        current_path = f"images/{correct_name}.jpg"
        orig_path_in_images = f"images/{src}"
        file_to_orig[current_path] = orig_path_in_images

print("Reverting image names...")
for current_path, orig_path in file_to_orig.items():
    if os.path.exists(current_path):
        os.rename(current_path, orig_path)
        print(f"Renamed {current_path} -> {orig_path}")
    else:
        print(f"Missing: {current_path} (User needs to re-upload {orig_path})")

with open('js/characters.js', 'r', encoding='utf-8') as f:
    text = f.read()

blocks = text.split('id: ')
new_blocks = [blocks[0]]

for block in blocks[1:]:
    # Ensure there is an id to extract
    if "'" in block:
        char_id = block.split("'")[1]
        if char_id in char_id_to_orig:
            orig_path = f"images/{char_id_to_orig[char_id]}"
            block = re.sub(r"image:\s*'[^']+'", f"image: '{orig_path}'", block)
    new_blocks.append('id: ' + block)

with open('js/characters.js', 'w', encoding='utf-8') as f:
    f.write("".join(new_blocks))

print("Characters.js reverted to original filenames.")
