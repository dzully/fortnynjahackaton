import requests
import json

url = "https://staging.usepod.app/podsavings/hackathon/v1.0/signup/?email=dzulsyakimintest@gmail.com&password=12345678&name=dzulsyakimin&phoneno=60179531878&ic_passport=970212035529&deviceType=android"

payload = {}
headers = {}

response = requests.request("POST", url, auth=requests.auth.HTTPBasicAuth(
    username="4ZFfoQJm7KFrwpZe", password='6pHJP458LK0iccM6e123'), headers=headers, data=payload)

print(response.text)
