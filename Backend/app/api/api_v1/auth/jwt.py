from fastapi import Depends, HTTPException
from fastapi.security import OAuth2PasswordBearer
from datetime import timedelta, datetime
from typing import Union
from passlib.context import CryptContext
from jose import jwt, JWTError
from app.schemas.user_schema import UserDB

db = "DATABASE_URL"
oauth2_scheme = OAuth2PasswordBearer("/token")
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

class UserInDB(UserDB):
    hashed_password : str

def get_user(db, username):
    if username in db:
        user_data = db[username]
        return UserInDB(**user_data)
    return []

def verify_password(plane_password, hashed_password):
    return pwd_context.verify(plane_password, hashed_password)

def authenticate_user(db, username, password):
    user = get_user(db, username)
    if not user or not verify_password(password, user.hashed_password):
        raise HTTPException(status_code=401, detail="No se pudo validar la credencial")
    return user

def create_token(data: dict, time_expire: Union[datetime, None] = None):
    data_copy = data.copy()
    if time_expire is None:
        expires = datetime.utcnow() + timedelta(minutes=30)
    else:
        expires = datetime.utcnow() + time_expire
    data_copy.update({"exp": expires})
    token_jwt = jwt.encode(data_copy, key="JWT_SECRET_KEY" , algorithm="ALGORITHM")
    return token_jwt

def get_current_user(token: str = Depends(oauth2_scheme)):
    try:
        token_decode = jwt.decode(token, key="JWT_SECRET_KEY", algorithms="ALGORITHM")
        username = token_decode.get("sub")
        if username == None:
            raise HTTPException(status_code=401, detail="No se puede validar la credencial")
    except JWTError:
        raise HTTPException(status_code=401, detail="No se puede validar la credencial")
    user = get_user(db, username)
    return user

