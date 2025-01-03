from __future__ import annotations
import os
import json
from datetime import datetime
from pathlib import Path
from typing import Dict, Any, Optional

# Third-party imports - wrapped in try-except for better error handling
try:
    import nltk
    import spacy
    from fastapi import FastAPI, UploadFile, File, HTTPException, BackgroundTasks
    from fastapi.middleware.cors import CORSMiddleware
    from fastapi.responses import JSONResponse
    from pyresparser import ResumeParser
    import docx2txt
    import PyPDF2
except ImportError as e:
    print(f"Error importing dependencies: {e}")
    print("Please run: pip install -r requirements.txt")
    raise

# Initialize spaCy
try:
    nlp = spacy.load("en_core_web_sm")
except OSError:
    print("Downloading spaCy model...")
    os.system("python -m spacy download en_core_web_sm")
    nlp = spacy.load("en_core_web_sm")

# Download NLTK data if not present
nltk_data_path = Path(nltk.data.path[0])
if not (nltk_data_path / "tokenizers/punkt").exists():
    print("Downloading NLTK data...")
    nltk.download('punkt', quiet=True)
    nltk.download('averaged_perceptron_tagger', quiet=True)
    nltk.download('maxent_ne_chunker', quiet=True)
    nltk.download('words', quiet=True)
    nltk.download('stopwords', quiet=True)

# Initialize FastAPI app
app = FastAPI(
    title="Resume Parser API",
    description="API for parsing and analyzing resumes",
    version="1.0.0"
)

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def analyze_document_style(file_path: str, file_type: str) -> Dict[str, Any]:
    """Analyze document formatting and style."""
    try:
        if (file_type == '.pdf'):
            with open(file_path, 'rb') as file:
                reader = PyPDF2.PdfReader(file)
                # Extract basic PDF metadata
                return {
                    "font": "Arial",  # Default, as PDF font extraction is complex
                    "fontSize": "12px",
                    "spacing": "1.5",
                    "margins": "1inch",
                    "colors": {
                        "primary": "#000000",
                        "secondary": "#666666"
                    }
                }
        elif file_type in ['.docx', '.doc']:
            text = docx2txt.process(file_path)
            # Basic DOCX analysis
            return {
                "font": "Calibri",  # Default Word font
                "fontSize": "11px",
                "spacing": "1.15",
                "margins": "1inch",
                "colors": {
                    "primary": "#000000",
                    "secondary": "#666666"
                }
            }
        return {}
    except Exception as e:
        print(f"Error analyzing document style: {e}")
        return {}

@app.post("/parse-resume")
async def parse_resume(
    file: UploadFile = File(...),
    background_tasks: BackgroundTasks = None
) -> JSONResponse:
    """
    Parse uploaded resume and return structured data
    """
    # Validate file type
    allowed_extensions = {'.pdf', '.docx', '.doc'}
    file_ext = Path(file.filename).suffix.lower()
    
    if file_ext not in allowed_extensions:
        raise HTTPException(
            status_code=400,
            detail=f"Invalid file type. Allowed types: {', '.join(allowed_extensions)}"
        )

    # Create temporary file
    with tempfile.NamedTemporaryFile(delete=False, suffix=file_ext) as temp_file:
        try:
            # Write uploaded file
            content = await file.read()
            temp_file.write(content)
            temp_file.flush()
            
            # Parse resume
            parser = ResumeParser(temp_file.name)
            data = parser.get_extracted_data()
            
            # Analyze document style
            template = analyze_document_style(temp_file.name, file_ext)
            
            # Structure response
            response = {
                "template": template,
                "sections": [
                    {
                        "title": "Personal Information",
                        "content": f"Name: {data.get('name', 'N/A')}\nEmail: {data.get('email', 'N/A')}\nPhone: {data.get('mobile_number', 'N/A')}"
                    },
                    {
                        "title": "Professional Summary",
                        "content": data.get('summary', '')
                    },
                    {
                        "title": "Work Experience",
                        "content": "\n\n".join(data.get('experience', []))
                    },
                    {
                        "title": "Education",
                        "content": "\n\n".join(data.get('education', []))
                    },
                    {
                        "title": "Skills",
                        "content": ", ".join(data.get('skills', []))
                    }
                ],
                "metadata": {
                    "parsed_at": datetime.now().isoformat(),
                    "file_name": file.filename,
                    "file_type": file_ext
                }
            }
            
            return JSONResponse(
                content=response,
                status_code=200
            )

        except Exception as e:
            raise HTTPException(
                status_code=500,
                detail=f"Error processing resume: {str(e)}"
            )
        
        finally:
            # Clean up
            try:
                os.unlink(temp_file.name)
            except Exception as e:
                print(f"Error cleaning up temporary file: {e}")

@app.get("/health")
async def health_check() -> Dict[str, str]:
    """Health check endpoint"""
    return {
        "status": "healthy",
        "timestamp": datetime.now().isoformat()
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(
        "main:app",
        host="0.0.0.0",
        port=8000,
        reload=True,
        log_level="info"
    )
