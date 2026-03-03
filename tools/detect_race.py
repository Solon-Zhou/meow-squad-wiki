import json
import os
import re
from PIL import Image

def get_race(img_path):
    # This color box is at roughly top left, let's grab the prominent color.
    # The rock/scissors/paper icon is at top-left. Let's grab the corner pixel or average of a small box inside the icon.
    # Due to some variance, let's use the actual pixel values we just grabbed since they clearly cluster into 3 types:
    # Cluster 1: rgb(181, 156, 117) -> User said 賢者鄧利 is 礕石 (Rock)
    # Cluster 2: rgb(21, 23, 43)    -> User said 超能龍卷 is 刃影 (Scissors)
    # Cluster 3: rgb(25, 41, 58)    -> User said 少女小櫻 is 柔須 (Paper)
    try:
        img = Image.open(img_path)
        box = (40, 110, 80, 150)
        region = img.crop(box)
        r, g, b = 0, 0, 0
        pixels = region.getdata()
        for p in pixels:
             r += p[0]
             g += p[1]
             b += p[2]
        r //= len(pixels)
        g //= len(pixels)
        b //= len(pixels)
        
        if r > 100:
            return "礕石"
        elif g < 30 and b < 50:
            return "刃影"
        else:
            return "柔須"
    except Exception as e:
        return "礕石"

with open('js/characters.js', 'r') as f:
    text = f.read()

# Let's replace the race in JS directly by using our mapping
with open('parsed_chars.json', 'r') as f:
    chars = json.load(f)

for c in chars:
    name = c['name'].replace(' ', '')
    img_path = c['image']
    race = get_race(img_path)
    
    # We will regex replace this specific character's race
    # Pattern to match the block: name: 'name', ... race: '礕石',
    pattern = rf"(name:\s*'{name}',\s*rarity:\s*'[^']+',\s*race:\s*)'[^']+'"
    replacement = rf"\g<1>'{race}'"
    text = re.sub(pattern, replacement, text)

with open('js/characters.js', 'w') as f:
    f.write(text)

print("Race updated successfully.")
