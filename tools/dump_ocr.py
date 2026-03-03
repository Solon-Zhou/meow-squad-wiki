import subprocess
import os
import json

images = [f for f in os.listdir('.') if f.startswith('Screenshot_20260225_')]
images.sort()

with open('ocr_results.txt', 'w') as out_f:
    for img in images:
        out = subprocess.check_output(['swift', 'ocr.swift', img])
        text = out.decode('utf-8').strip()
        out_f.write(f"=== {img} ===\n{text}\n\n")
print("Done writing ocr_results.txt")
