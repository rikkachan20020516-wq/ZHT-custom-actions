import os

import sys
import random
from datetime import datetime
import pytz

name = sys.argv[1]

blessings = [
    "Keep going today!",
    "You are already awesome！",
    "Don't forget to drink water.",
]

blessing = random.choice(blessings)
tokyo_time = datetime.now(pytz.timezone('Asia/Tokyo')).strftime('%Y年%m月%d日 %H:%M:%S')

print("\n" + "="*50)
print("    ZHT PYTHON GREET (Docker Action)")
print("="*50)
print(f"    Hello，{name} ！")
print(f"    Tokyo time now：{tokyo_time}")
print(f"    Blessing：{blessing}")
print("="*50 + "\n")

with open(os.environ["GITHUB_OUTPUT"], "a") as f:
    f.write(f"blessing={blessing}\n")
