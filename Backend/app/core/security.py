from passlib.context import CryptContext
from typing import Union, Any
from datetime import datetime, timedelta
from app.core.config import settings
from jose import jwt


#Decodifica el password
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto") 

 
def create_access_token(data: Union[str, Any], time_expire: Union[int, None] = None) -> str:
    #Crea el token 
    if time_expire is None:
        time_expire = datetime.utcnow() + timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)
    else:
        time_expire = datetime.utcnow() + time_expire
    
    to_encode = {"exp": time_expire, "sub": str(data)}
    token_jwt = jwt.encode(to_encode, key=settings.JWT_SECRET_KEY, algorithm=settings.ALGORITHM)
    
    return token_jwt


def get_hashed_password(password: str) -> str:
    return pwd_context.hash(password)


def verify_password(plane_password, hashed_password) -> bool:
    #Verifica que la contraseña plana que se le pasa sea igual a la encriptada en la base de datos. Devuelve valor booleano
    return pwd_context.verify(plane_password, hashed_password)