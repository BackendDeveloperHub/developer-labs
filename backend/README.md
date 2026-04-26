# backend

> Built with [bdh-fastapi-new](https://pypi.org/project/bdh-fastapi-new/) CLI

## Quick Start

```bash
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```

## Endpoints

- GET / -> Health check
- GET /docs -> Swagger UI
- GET /admin -> Admin Panel
