from fastapi import APIRouter, Depends, HTTPException,status
from app.models.user_model import User
from app.schemas.user_schema import UserDB, UserOut
from app.core.db_conn import Base, engine
from app.api.api_v1.deps.user_deps import get_db
from sqlalchemy.orm import Session

Base.metadata.create_all(bind=engine)


user_router = APIRouter()


@user_router.post("/create", summary="Crea al usuario", response_model=UserDB)
async def create_user(data: UserDB, db: Session = Depends(get_db)) -> UserDB:
    user = User(nombre=data.nombre,
                apellido=data.apellido,
                edad=data.edad,
                email=data.email,
                password=data.password,
                tipo_usuario=data.tipo_usuario,
                estado=data.estado)
    
    # Crear funcion que devuelva si el email se encuentra en base de datos, si el email está devuelve True sino False. verify_email(email:str)
    # con 'status' podes ver todas las exceptions mas fácil
    # if user.email: 
    #     raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, 
    #                         detail="El email ya se encuentra registrado")
    # Saque el 'else' porque el 'raise' es como el 'return' corta la funcion por ende no lee las lineas de abajo
    db.add(user)
    db.commit()
    db.refresh(user)
    
    return user

