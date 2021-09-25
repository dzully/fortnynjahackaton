import requests

url = "https://staging.usepod.app/podsavings/hackathon/v1.0/smsverify?userid=532&code=410-742"

payload = {}
headers = {}

response = requests.request("POST", url, auth=requests.auth.HTTPBasicAuth(
    username="4ZFfoQJm7KFrwpZe", password='6pHJP458LK0iccM6e123'), headers=headers, data=payload)

print(response.text)
