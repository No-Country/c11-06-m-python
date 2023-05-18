from pydantic import BaseModel, EmailStr
from typing import Optional

class UserDB(BaseModel):
    id: Optional[int]
    nombre: str
    apellido: str
    edad: int
    email: EmailStr
    hashed_pass: str
    tipo_usuario: str
    estado: int = 0

    class Config:
        orn_mode = True


class UserOut(BaseModel):
    nombre: str
    apellido: str
    edad: int
    email: EmailStr

    class Config:
        orn_mode = True