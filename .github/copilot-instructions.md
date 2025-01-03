# Practicumo - Internship Platform

## Project Overview
Practicumo is a web platform helping students and recent graduates find internships, manage applications, and customize career documents. Built with React, Firebase, and modern web technologies.

## Key Technical Requirements

### Architecture
- Frontend: React.js with TypeScript
- Backend: Python FastAPI for Resume Parsing
- State Management: React Context + Firebase
- Styling: Tailwind CSS
- Authentication: Firebase Auth
- Database: Firebase Firestore
- Storage: Firebase Storage
- Hosting: Firebase Hosting
- Resume Parsing: pyresparser + spaCy

### Python Backend Components
1. Resume Parser Service
   - FastAPI REST endpoints
   - pyresparser integration
   - Document style analysis
   - PDF and DOCX support
   - Error handling
   
2. Dependencies
   - FastAPI for API endpoints
   - pyresparser for resume parsing
   - spaCy for NLP tasks
   - python-docx for Word documents
   - PyPDF2 for PDF files
   - NLTK for text processing

3. Setup Requirements
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   pip install -r requirements.txt
   python -m spacy download en_core_web_sm
   ```

### Core Features
1. Authentication System
   - Email/password login
   - OAuth (Google, LinkedIn)
   - Protected routes
   
2. User Profiles
   - Personal information
   - Education details
   - Skills tracking
   - Experience records
   
3. Internship Management
   - Search and filtering
   - Application tracking
   - Company profiles
   - Location mapping
   
4. Document Management
   - Resume builder
     - Upload existing resumes
     - Parse resume content
     - Extract formatting
     - Template matching
     - PDF/DOCX support
   - Cover letter templates
   - File uploads
   - Version control

5. Dashboard Interface
   - Application status
   - Upcoming deadlines
   - Recommendation engine
   - Activity tracking

### Code Style Guidelines
- Use TypeScript for type safety
- Follow React best practices and hooks
- Implement responsive design
- Maintain component modularity
- Write clean, documented code
- Use proper error handling

### Performance Requirements
- Fast page loads (<3s)
- Responsive UI
- Offline capabilities
- Real-time updates
- SEO optimization

### Security Considerations
- Data encryption
- Input validation
- Authentication checks
- Role-based access
- Secure file handling

## Development Guidelines
1. Use semantic HTML
2. Follow accessibility standards
3. Implement proper error boundaries
4. Write unit tests for critical features
5. Optimize for mobile devices
6. Use proper Git workflow

### Backend Development
1. Follow FastAPI best practices
2. Implement proper error handling
3. Use type hints
4. Document API endpoints
5. Handle file cleanup
6. Secure file processing
7. Validate input files
8. Test parser accuracy

## File Structure
practicumo/
├── src/           # Frontend React code
└── backend/       # Python backend
    ├── main.py    # FastAPI application
    └── requirements.txt