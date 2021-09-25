import uvicorn
from pydantic import BaseModel
from typing import Optional
import requests

from fastapi import FastAPI

app = FastAPI()


class Item(BaseModel):
    username: str
    password: str


class UserVerify(BaseModel):
    username: str
    password: str


class Usersignup(BaseModel):
    userId: str
    code: str


@app.get("/")
def read_root():
    return {"Hello": "World"}


baseUrl = 'https://staging.usepod.app'


@app.post("/api/forty/smsverify")
async def create_item(userVerify: UserVerify):
    url = baseUrl + "/podsavings/hackathon/v1.0/smsverify?" + \
        "userid=" + userVerify.userId + '&code=' + userVerify.code
    payload = {}
    headers = {}

    response = requests.request("GET", url, auth=requests.auth.HTTPBasicAuth(
        username="4ZFfoQJm7KFrwpZe", password='6pHJP458LK0iccM6e123'), headers=headers, data=payload)

    return response.json()


@app.get("/api/forty/category")
async def create_item():
    url = baseUrl + "/podsavings/hackathon/v1.0/category"
    payload = {}
    headers = {}
    response = requests.request("GET", url, auth=requests.auth.HTTPBasicAuth(
        username="4ZFfoQJm7KFrwpZe", password='6pHJP458LK0iccM6e123'), headers=headers, data=payload)

    return response.json()


@app.get("/api/forty/duration")
async def create_item():
    url = baseUrl + "/podsavings/hackathon/v1.0/duration"
    payload = {}
    headers = {}
    response = requests.request("GET", url, auth=requests.auth.HTTPBasicAuth(
        username="4ZFfoQJm7KFrwpZe", password='6pHJP458LK0iccM6e123'), headers=headers, data=payload)

    return response.json()


@app.post("/api/forty/signup")
async def create_item(userSignup: Usersignup):

    url = baseUrl + "/podsavings/hackathon/v1.0/signup?email=" + \
        userSignup.username + "&password=" + userSignup.password + '&name=' + userSignup.name + \
        '&phoneno=' + userSignup.phoneno + '&ic_passport=' + \
        userSignup.ic + '&deviceType=android'
    payload = {}
    headers = {}
    response = requests.request("POST", url, auth=requests.auth.HTTPBasicAuth(
        username="4ZFfoQJm7KFrwpZe", password='6pHJP458LK0iccM6e123'), headers=headers, data=payload)

    return response.json()


@app.post("/api/forty/signin")
async def create_item(item: Item):
    url = baseUrl + "/podsavings/hackathon/v1.0/signin?email=" + \
        item.username + "&password=" + item.password
    payload = {}
    headers = {}
    response = requests.request("POST", url, auth=requests.auth.HTTPBasicAuth(
        username="4ZFfoQJm7KFrwpZe", password='6pHJP458LK0iccM6e123'), headers=headers, data=payload)

    return response.json()


if __name__ == "__main__":
    uvicorn.run(app, host="192.168.100.8", port=8000)
