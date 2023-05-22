from app.core.db_conn import SessionLocal


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()