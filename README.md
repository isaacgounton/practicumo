# Practicumo

A modern platform connecting students with internship opportunities.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Configure environment variables
cp .env.example .env
# Edit .env with your Firebase credentials

# Start development server
npm run dev
```

## 🛠 Tech Stack
- React + TypeScript
- Tailwind CSS
- Firebase Suite (Auth, Firestore, Storage)
- Vite
- React Router
- React Query

## 📁 Project Structure

```
src/
├── components/     # Reusable UI components
├── features/      # Feature-specific modules
│   ├── auth/      # Authentication
│   ├── profile/   # User profiles
│   └── jobs/      # Internship listings
├── hooks/         # Custom React hooks
├── lib/           # Utilities and services
├── pages/         # Route pages
└── types/         # TypeScript definitions
```

## 🔑 Core Features
- Smart internship matching algorithm
- Real-time application tracking
- AI-powered resume builder
- Company verification system
- Advanced search and filtering
- Interactive dashboard

## 🧪 Testing
```bash
npm run test        # Run unit tests
npm run test:e2e    # Run E2E tests
npm run test:watch  # Watch mode
```

## 📦 Deployment
```bash
npm run build      # Production build
npm run preview    # Preview build
firebase deploy    # Deploy to Firebase
```

## 🔒 Environment Variables
```
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
```

## 🤝 Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License
MIT

## 🙋‍♂️ Support
For support, email support@practicumo.com or join our Slack community.