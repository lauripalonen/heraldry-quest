import json
import urllib.request

with open('./data.json', 'r') as file:
    data = json.load(file)

for item in data[0:4]:
    armiger = item.get('armiger').strip().lower()
    image_url = item.get('image_url')

    try:
        urllib.request.urlretrieve(image_url, f"./{armiger}.svg")
    except Exception as e:
        print(f"Failed to download image for {armiger}: {e}")
