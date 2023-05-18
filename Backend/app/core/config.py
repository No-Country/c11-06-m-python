from pydantic import BaseSettings
from decouple import config

class Settings(BaseSettings):
    API_V1_STR: str = "/api/v1"
    JWT_SECRET_KEY: str = config("JWT_SECRET_KEY", cast=str)
    JWT_REFRESH_SECRET_KEY: str = config("JWT_REFRESH_SECRET_KEY", cast=str)
    ALGORITHM = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 30
    REFRESH_ACCESS_TOKEN_EXPIRE_MINUTES: int = 60 * 24 * 7
    PROJECT_NAME: str = "MOCHIL-APP"

    class Config:
        case_sensitive = True


settings = Settings()