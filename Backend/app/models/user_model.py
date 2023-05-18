from sqlalchemy import Column, Integer, String
from app.core.db_conn import Base


class User(Base):
    __tablename__ = "usuarios"
    id = Column(Integer, primary_key=True,index=True)
    nombre = Column(String(25))
    apellido = Column(String(25))
    edad = Column(Integer)
    email = Column(String(50))
    hashed_pass = Column(String(255))  
    tipo_usuario = Column(String(15))
    estado = Column(Integer)

 
