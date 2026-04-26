from fastapi import FastAPI
from routers import users
from database import engine
from admin import UserAdmin
from sqladmin import Admin

app = FastAPI(
    title="My FastAPI App",
    description="Built with bdh-fastapi-new CLI",
    version="1.0.0"
)

# Admin Panel → /admin
admin = Admin(app, engine)
admin.add_view(UserAdmin)

# Routers
app.include_router(users.router)

@app.get("/")
async def root():
    return {"message": "Hello FastAPI!"}
