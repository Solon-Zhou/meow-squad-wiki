import re
import json
import os

def parse_ocr(filepath):
    with open(filepath, 'r') as f:
        content = f.read()

    blocks = content.split('=== ')[1:]
    characters = []
    rename_plan = []

    for block in blocks:
        lines = [line.strip() for line in block.split('\n') if line.strip()]
        if not lines: continue
        
        filename = lines[0].replace(' ===', '')
        name = lines[1]
        pos_faction = lines[2].split('/')
        position = pos_faction[0].strip() if len(pos_faction) > 0 else '未知'
        faction = pos_faction[1].strip() if len(pos_faction) > 1 else '未知'
        
        # Rarity is usually line 3 or 4
        rarity = 'SSR'
        if 'UR' in lines[:10]:
            rarity = 'UR'

        # Skills (Look for 普攻, 天賦, 技能 block)
        skills = []
        try:
            skill_start = lines.index('技能') + 1
            skills = [
                {"name": lines[skill_start], "type": "普攻"},
                {"name": lines[skill_start+1], "type": "天賦"},
                {"name": lines[skill_start+2], "type": "技能"}
            ]
        except:
            pass
            
        # Unlocks
        unlocks = []
        for i, line in enumerate(lines):
            if line.startswith('10級'):
                unlocks.append({"level": 10, "desc": lines[i+1]})
            elif line.startswith('20級'):
                unlocks.append({"level": 20, "desc": lines[i+1]})
            elif line.startswith('30級'):
                unlocks.append({"level": 30, "desc": lines[i+1]})
            elif line.startswith('40級'):
                unlocks.append({"level": 40, "desc": lines[i+1]})
            elif line.startswith('60級') or '強化' in line or '->' in line or '為' in line:
                if '為' in line and (line.startswith('強') or line.startswith('2n奶')): 
                    # OCR noise for 60 level
                    pass
        
        # Try to clean up level 60
        level60_desc = "強化部分技能"
        for line in lines:
            if '為' in line and '】' in line and ('強化' in line or '強' in line):
                level60_desc = line.replace('強/', '強化').replace('1', '】').replace('［', '【').replace('］', '】').replace('[', '【').replace(']', '】')
                level60_desc = re.sub(r'^.*?強.*?化', '強化', level60_desc)
                unlocks.append({"level": 60, "desc": level60_desc})
                break
                
        # Remove duplicates
        seen = set()
        clean_unlocks = []
        for u in unlocks:
            if u['level'] not in seen:
                clean_unlocks.append(u)
                seen.add(u['level'])
                
        # ID and Image
        # Create an ID based on simple hash
        char_id = "char_" + str(hash(name))[:8].replace('-', 'n')
        # Pinyin module might not exist, let's just use string replacement/hash
        char_id = "char_" + str(hash(name))[:8].replace('-', 'n')
        
        # Hardcode some races based on faction or manually later, we can default to 礕石
        race = '礕石'
        power = '30k' # default 
        
        c = {
            "id": char_id,
            "name": name,
            "rarity": rarity,
            "race": race,
            "faction": faction,
            "position": position,
            "power": power,
            "image": f"images/{char_id}.jpg",
            "skills": skills,
            "levelUnlocks": clean_unlocks
        }
        
        characters.append(c)
        rename_plan.append((filename, f"images/{char_id}.jpg"))
        
    return characters, rename_plan

chars, renames = parse_ocr('ocr_results.txt')

with open('parsed_chars.json', 'w') as f:
    json.dump(chars, f, ensure_ascii=False, indent=2)

with open('rename_plan.json', 'w') as f:
    json.dump(renames, f, ensure_ascii=False, indent=2)

print(f"Parsed {len(chars)} characters")
