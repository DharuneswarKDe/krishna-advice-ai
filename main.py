from fastapi import FastAPI
from pydantic import BaseModel
from gita_engine import GitaEngine
from ai_generator import generate_answer_groq
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
gita = GitaEngine() 

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Replace "*" with ["http://localhost:3000"] in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Query(BaseModel):
    user_input: str
    generation: str 
    
@app.get("/")
def app_root():
    return {"status": "ok"}

@app.get("/health")
def health_check():
    return {"status": "ok"}

@app.post("/chat")
def get_response(query: Query):
    passages = gita.retrieve(query.user_input)
    response = generate_answer_groq(query.user_input, passages, query.generation)
    return {"response": response}
