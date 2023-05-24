from fastapi import FastAPI, Depends
from app.core.config import settings
from app.api.api_v1.auth.jwt import authenticate_user, create_token, db, get_current_user
from datetime import timedelta
from fastapi.security import OAuth2PasswordRequestForm
from app.schemas.user_schema import UserDB

from app.api.api_v1.handless.user import user_router 

app = FastAPI(title=settings.PROJECT_NAME, 
              openapi_url=f"{settings.API_V1_STR}/openapi.json")

@app.get("/", summary="Inicio de api")
async def app_init():
    return {"message": "Hello Wolrd"}

@app.post("/token")
def login(form_data: OAuth2PasswordRequestForm =Depends()):
    user = authenticate_user(db, form_data.email, form_data.password)
    access_token_expires = timedelta(minutes=30)
    access_token_jwt = create_token({"sub": user.email}, access_token_expires)
    return {
        "access_token": access_token_jwt,
        "token_type": "bearer"
    }

@app.get("users/me")
def user(user: UserDB = Depends(get_current_user)):
    return user

# Routers
app.include_router(user_router, prefix="/user", tags=["users"])