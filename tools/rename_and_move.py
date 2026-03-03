import json
import os
import shutil

with open('rename_plan.json', 'r') as f:
    renames = json.load(f)

for src, dst in renames:
    if os.path.exists(src):
        # ensure destination directory exists
        os.makedirs(os.path.dirname(dst), exist_ok=True)
        shutil.move(src, dst)
        print(f"Moved {src} -> {dst}")
    else:
        print(f"File not found: {src}")
