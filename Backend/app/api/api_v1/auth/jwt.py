from fastapi import Depends, HTTPException
from fastapi.security import OAuth2PasswordBearer
from datetime import timedelta, datetime
from typing import Union
from passlib.context import CryptContext
from jose import jwt, JWTError
from app.schemas.user_schema import UserDB
from app.api.api_v1.deps.user_deps import get_db
from app.core.config import settings

db = get_db()
oauth2_scheme = OAuth2PasswordBearer("/token")
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto") #Decodifica el password

def catch_error_http():
    return HTTPException(status_code=401, detail="No se puede validar la credencial", headers={"WWW-Authenticate": "Bearer"})
error_http = catch_error_http()

#Verifica que el usuario exista en la base de datos, sino devuelve una lista vacia
def get_user(db, email):
    if email in db:
        user_data = db[email]
        return UserDB(**user_data)
    return []

#Verifica que la contraseña plana que se le pasa sea igual a la encriptada en la base de datos. Devuelve valor booleano
def verify_password(plane_password, hashed_password):
    return pwd_context.verify(plane_password, hashed_password)

#Autentifica usuario y contraseña, sino devuelve un error
def authenticate_user(db, email, password):
    user = get_user(db, email)
    if not user or not verify_password(password, user.password):
        raise error_http
    return user

#Crea el token 
def create_token(data: dict, time_expire: Union[datetime, None] = None):
    data_copy = data.copy()
    if time_expire is None:
        expires = datetime.utcnow() + timedelta(minutes=30)
    else:
        expires = datetime.utcnow() + time_expire
    data_copy.update({"exp": expires})
    token_jwt = jwt.encode(data_copy, key=settings.JWT_SECRET_KEY , algorithm=settings.ALGORITHM)
    return token_jwt

def get_current_user(token: str = Depends(oauth2_scheme)):
    try:
        token_decode = jwt.decode(token, key=settings.JWT_SECRET_KEY, algorithms=settings.ALGORITHM)
        email = token_decode.get("sub")
        if email == None:
            raise error_http
    except JWTError:
        raise error_http
    user = get_user(db, email)
    return user

