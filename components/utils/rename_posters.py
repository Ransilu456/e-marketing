import os

path = r'e:\DO NOT TOUCH\Safe Zone\Applications_Developments\e_marketing_paradice\e-marketing\public\data\post'
files = [f for f in os.listdir(path) if f.lower().endswith('.jpeg')]
files.sort()

for i, filename in enumerate(files, 1):
    old_file = os.path.join(path, filename)
    new_name = f'poster-{i:02d}.jpeg'
    new_file = os.path.join(path, new_name)
    try:
        os.rename(old_file, new_file)
        print(f'Renamed {filename} to {new_name}')
    except Exception as e:
        print(f'Error renaming {filename}: {e}')
