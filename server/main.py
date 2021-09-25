from pydantic import BaseModel
from typing import Optional
import requests

from fastapi import FastAPI

app = FastAPI()


class Item(BaseModel):
    username: str
    password: str


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.post("/signin")
def create_item():
    url = "https://staging.usepod.app/podsavings/hackathon/v1.0/signin?email=dzulsyakimin@gmail.com&password=12345678"
    payload = {}
    headers = {}
    response = requests.request("POST", url, auth=requests.auth.HTTPBasicAuth(
        username="4ZFfoQJm7KFrwpZe", password='6pHJP458LK0iccM6e123'), headers=headers, data=payload)

    return response.json()
