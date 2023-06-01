from app.core.security import get_hashed_password, verify_password
from app.schemas.user_schema import UserDB
from app.models.user_model import User
from sqlalchemy.orm import Session
from typing import Optional


class UserService:
    @staticmethod
    async def create_user(user: UserDB, db: Session) -> Optional[User]:
        user_in = User(nombre=user.nombre,
                apellido=user.apellido,
                edad=user.edad,
                email=user.email,
                password=get_hashed_password(user.password),
                tipo_usuario=user.tipo_usuario,
                estado=user.estado)
        
        user_t = await UserService.get_user_by_email(user_in.email, db)
        
        if not user_t:
            db.add(user_in)
            db.commit()
            db.refresh(user_in)
            return user_in
        
        return None

    @staticmethod
    async def get_user_by_email(email: str, db: Session) -> Optional[User]:
        user = db.query(User).filter(User.email==email).first()
        if not user:
            return None
        return user
    
    @staticmethod
    async def get_user_by_id(id: int, db: Session) -> Optional[User]:
        user = db.query(User).filter(User.id==id).first()
        if not user:
            return None
        return user
        
    @staticmethod
    #Autentifica usuario y contraseña, sino devuelve un error
    async def authenticate_user(email: str, password: str, db: Session) -> Optional[User]:
        user = await UserService.get_user_by_email(email, db)
        if not user or not verify_password(password, user.password):
            return None
        return user




