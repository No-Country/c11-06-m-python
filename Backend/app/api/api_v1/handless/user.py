from fastapi import APIRouter, Depends, HTTPException
from app.models.user_model import User
from app.schemas.user_schema import UserDB, UserOut
from app.core.db_conn import Base, engine
from app.api.api_v1.deps.user_deps import get_db
from sqlalchemy.orm import Session

Base.metadata.create_all(bind=engine)


user_router = APIRouter()


@user_router.post("/create", summary="Crea al usuario", response_model=UserDB)
async def create_user(user: UserDB, db: Session = Depends(get_db)) -> UserDB:
    user = User(nombre=user.nombre,
                apellido=user.apellido,
                edad=user.edad,
                email=user.email,
                hashed_pass=user.hashed_pass,
                tipo_usuario=user.tipo_usuario,
                estado=user.estado)
    if user.email:
        raise HTTPException(status_code=400, detail="El email ya se encuentra registrado")
    else:
        db.add(user)
        db.commit()
        db.refresh(user)

    return user

