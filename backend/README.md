# Practicumo Backend

## Setup

1. Create virtual environment:
```bash
python -m venv venv
```

2. Activate virtual environment:
```bash
# Windows
.\venv\Scripts\activate

# Unix/MacOS
source venv/bin/activate
```

3. Install dependencies:
```bash
pip install -r requirements.txt
```

4. Download required models:
```bash
python -m spacy download en_core_web_sm
```

5. Run the server:
```bash
uvicorn main:app --reload
```

## Troubleshooting

If you get import errors:
1. Make sure your virtual environment is activated
2. Verify all dependencies are installed: `pip freeze`
3. Check Python version (3.8+ required)
4. Try removing venv and recreating it
