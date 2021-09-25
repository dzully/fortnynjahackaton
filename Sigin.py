import requests

url = "https://staging.usepod.app/podsavings/hackathon/v1.0/signin?email=dzulsyakimin@gmail.com&password=12345678"

payload = {}
headers = {}

response = requests.request("POST", url, auth=requests.auth.HTTPBasicAuth(
    username="4ZFfoQJm7KFrwpZe", password='6pHJP458LK0iccM6e123'), headers=headers, data=payload)

print(response.text)
