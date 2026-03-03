import os
import re

js_path = 'js/characters.js'
images_dir = 'images'

with open(js_path, 'r', encoding='utf-8') as f:
    text = f.read()

# Find all character blocks and rename their images
# match: name: '...', ... image: 'images/char_1234.jpg'
chars = re.findall(r"name:\s*'([^']+)',.*?image:\s*'(images/[^']+)'", text, re.DOTALL)

for name, img_path in chars:
    old_file_path = img_path
    new_file_name = f"{name}.jpg"
    new_file_path = os.path.join(images_dir, new_file_name)
    
    # Rename file if exists
    if os.path.exists(old_file_path):
        os.rename(old_file_path, new_file_path)
        print(f"Renamed: {old_file_path} -> {new_file_path}")
    
    # Update js content
    text = text.replace(f"'{old_file_path}'", f"'{new_file_path}'")

with open(js_path, 'w', encoding='utf-8') as f:
    f.write(text)

print("Finished renaming images and updating characters.js")
