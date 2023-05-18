from app.core.db_conn import SessionLocal


def get_db():
    try:
        db = SessionLocal()
        yield db
    finally:
        db.close()