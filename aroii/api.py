import requests


data = requests.get('http://c246be81.ngrok.io/api/data')
print(data)
print(data.content)
