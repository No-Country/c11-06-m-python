from fastapi import FastAPI, Depends
from app.core.config import settings
from app.api.api_v1.auth.jwt import authenticate_user, create_token, db, oauth2_scheme
from datetime import timedelta
from fastapi.security import OAuth2PasswordRequestForm

from app.api.api_v1.handless.user import user_router 

app = FastAPI(title=settings.PROJECT_NAME, 
              openapi_url=f"{settings.API_V1_STR}/openapi.json")

@app.get("/", summary="Inicio de api")
async def app_init():
    return {"message": "Hello Wolrd"}

@app.post("/token")
def login(form_data: OAuth2PasswordRequestForm =Depends()):
    user = authenticate_user(db, form_data.nombre, form_data.password)
    acces_token_expires = timedelta(minutes=30)
    acces_token_jwt = create_token({"sub": user.nombre}, acces_token_expires)
    return {
        "acces_token": acces_token_jwt,
        "token_type": "bearer"
    }

@app.get("users/me")
def user(token: str = Depends(oauth2_scheme)):
    return "I am an user"

# Routers
app.include_router(user_router, prefix="/user", tags=["users"])