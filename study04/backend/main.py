from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from config import app_config

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=app_config.origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

@app.get("/data")
def data():
    arr = [
      1,0,0,0,0,
      1,1,0,0,0,
      1,1,1,0,0,
      1,1,1,1,0,
      1,1,1,1,1
    ]
    return {"arr1" : arr}