import subprocess
import sys

scripts = [
    'notebooks/data_cleaning.py',
    'notebooks/eda.py',
    'notebooks/feature_engineering.py',
    'notebooks/clustering.py',
    'notebooks/anamoly_network.py',
]

for script in scripts:
    print(f'\n{"="*40}\nRunning {script}\n{"="*40}')
    result = subprocess.run([sys.executable, script], check=True)