from fastapi import APIRouter, Depends, HTTPException,status
from app.models.user_model import User
from app.schemas.user_schema import UserOut, UserDB
from app.services.user_service import UserService
from app.api.api_v1.deps.user_deps import get_current_user
from sqlalchemy.orm import Session
from app.core.db_conn import Base, engine
from app.api.api_v1.deps.user_deps import get_db


Base.metadata.create_all(bind=engine)



user_router = APIRouter()


@user_router.post("/create", summary="Crea al usuario", status_code=status.HTTP_201_CREATED,response_model=UserDB)
async def create_user(user: UserDB, db: Session = Depends(get_db)) -> UserDB:
    user_in = await UserService.create_user(user, db)
    
    if not user_in:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST,
                            detail="El email ya se encuentra registrado")
    return user_in



@user_router.get("/me", summary="Muestra al usuario", response_model=UserOut)
async def user(user: User = Depends(get_current_user)) -> UserOut:
    return user