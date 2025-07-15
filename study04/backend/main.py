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
arrays={
    "arr1" : [
      1,0,0,0,0,
      1,1,0,0,0,
      1,1,1,0,0,
      1,1,1,1,0,
      1,1,1,1,1
    ],
    "arr2" : [
    1,1,1,1,1,
    1,1,1,1,0,
    1,1,1,0,0,
    1,1,0,0,0,
    1,0,0,0,0
    ],
    "arr3" : [
    0,0,0,0,1,
    0,0,0,1,1,
    0,0,1,1,1,
    0,1,1,1,1,
    1,1,1,1,1
    ],
    "arr4" : [
    1,1,1,1,1,
    0,1,1,1,1,
    0,0,1,1,1,
    0,0,0,1,1,
    0,0,0,0,1
    ]
}

@app.get("/data")
def data(target):    
    return {"data" : arrays[target]}