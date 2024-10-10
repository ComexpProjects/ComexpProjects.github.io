import seedir as sd
import os

a=sd.seedir(
    os.path.dirname(__file__), 
    style='emoji', 
    exclude_folders=[
        '__pycache__', 
        'Include', 
        'Lib', 
        'Scripts', 
        'examples', 
        'user data/*', 
        'images', 
        '.git',
        ], 
    exclude_files=[
        'images/*', 
        'indexes\/.*',
        'user data/*',
        'Dockerfile',
        'pyvenv\.cfg',
            'run\.sh',
        'setup\.ps1',
        '_doc\.py',
        '\.gitkeep',
        '__init__\.py',
        ], regex=True, printout=False, sort=True)
lines = [i for i in a.split('\n')]
max_len = len(max(lines,key = lambda x:len(x))) + 1
print(
    '\n'.join([i+' '*(max_len-len(i))+'- ' for i in lines])
    )