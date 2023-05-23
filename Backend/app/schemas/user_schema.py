from pydantic import BaseModel, EmailStr
from typing import Optional, Union


class OurBaseModel(BaseModel):
    class Config:
        orm_mode = True


class UserDB(OurBaseModel):
    id: Optional[int]
    nombre: str
    apellido: str
    edad: int
    email: EmailStr
    password: str
    tipo_usuario: Union[str, None] = None
    estado: Union[int, None] = None

    


class UserOut(OurBaseModel):
    nombre: str
    apellido: str
    edad: int
    email: EmailStr

  