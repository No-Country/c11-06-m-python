from fastapi import APIRouter,Depends, HTTPException, status
from fastapi.security import OAuth2PasswordRequestForm
from app.services.user_service import UserService
from app.core.security import create_access_token
from app.schemas.auth_schema import TokenSchema
from app.api.api_v1.deps.user_deps import get_db
from sqlalchemy.orm import Session



auth_router = APIRouter()


@auth_router.post("/login", response_model=TokenSchema)
async def login(form_data: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db)):
    user = await UserService.authenticate_user(email=form_data.username, password=form_data.password, db=db)
    if not user:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST,
                            detail="Email o contraseña incorrecta")

    return {
        "access_token": create_access_token(user.id),
        "token_type": "bearer"
    }