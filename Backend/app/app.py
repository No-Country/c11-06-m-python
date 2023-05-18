from fastapi import FastAPI
from app.core.config import settings

from app.api.api_v1.handless.user import user_router 

app = FastAPI(title=settings.PROJECT_NAME, 
              openapi_url=f"{settings.API_V1_STR}/openapi.json")



@app.get("/", summary="Inicio de api")
async def app_init():
    return {"message": "Hello Wolrd"}


# Routers
app.include_router(user_router, prefix="/user", tags=["users"])