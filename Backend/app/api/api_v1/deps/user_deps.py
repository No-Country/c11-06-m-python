from fastapi import Depends, HTTPException, status
from app.core.db_conn import SessionLocal
from sqlalchemy.orm import Session
from fastapi.security import OAuth2PasswordBearer
from app.core.config import settings
from app.services.user_service import UserService
from app.models.user_model import User
from app.schemas.auth_schema import TokenPayLoad
from pydantic import ValidationError
from jose import jwt, JWTError
from time import time

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/auth/login",
                                     scheme_name="JWT")


async def get_current_user(token: str = Depends(oauth2_scheme), db: Session = Depends(get_db)) -> User:
    try:
        payload = jwt.decode(token, 
                                  settings.JWT_SECRET_KEY, 
                                  settings.ALGORITHM)
        token_data = TokenPayLoad(**payload)
        
        if token_data.exp < time():
            raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED,
                                detail="Token expired",
                                headers={"WWWW-Authenticate": "Bearer"})
    except (JWTError, ValidationError):
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN,
                            detail="Credenciales de autenticación invalidas",
                            headers={"WWW-Authenticate": "Bearer"})
    
    user = await UserService.get_user_by_id(int(token_data.sub), db)

    if not user:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail="El usuario no fue encontrado")

    return user