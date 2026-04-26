from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database import get_db

router = APIRouter(prefix="/users", tags=["Users"])

@router.get("/")
async def get_users(db: Session = Depends(get_db)):
    """Get all users."""
    return {"users": []}

@router.get("/{user_id}")
async def get_user(user_id: int, db: Session = Depends(get_db)):
    """Get user by ID."""
    return {"user_id": user_id}
