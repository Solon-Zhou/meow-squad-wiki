import subprocess
import json
import sys
import os

images = [f for f in os.listdir('.') if f.startswith('Screenshot_20260225_')]
images.sort()

# Keep OCR swift script around
# We will run it for each image.
results = {}
for img in images:
    out = subprocess.check_output(['swift', 'ocr.swift', img])
    text = out.decode('utf-8').strip()
    lines = text.split('\n')
    print(f"{img}: {lines[0]}")
