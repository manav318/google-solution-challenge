# GOOGLE SOLUTION CHALLENGE
## Bit Breakers

A marketplace and crowdfunding platform connecting artisans and creators with customers while promoting sustainable practices and social impact.

## Project Overview

This project consists of a full-stack web application with:
- React + Vite frontend with TailwindCSS
- Node.js + Express backend
- Firebase Authentication and Firestore
- Cloudinary for image storage

## File Structure

```
google-solution-challenge/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ui/            # Reusable UI components
│   │   │   ├── forms/         # Form components
│   │   │   └── features/      # Feature-specific components
│   │   ├── pages/            # Page components
│   │   ├── hooks/           # Custom React hooks
│   │   ├── lib/            # Utilities and helpers
│   │   ├── styles/         # CSS and styling
│   │   └── context/        # React context providers
│   ├── public/            # Static assets
│   └── vite.config.js     # Vite configuration
├── backend/
│   ├── src/
│   │   ├── controllers/   # Route controllers
│   │   ├── routes/        # API routes
│   │   ├── middleware/    # Custom middleware
│   │   ├── lib/          # Utilities and configurations
│   │   └── index.js      # Server entry point
│   └── package.json
└── README.md
```

## Features

### Authentication
- Firebase-based authentication
- Role-based access (Users, Sellers, Admins)
- Secure session management

### Marketplace
- Product listing and search
- Advanced filtering system
- Shopping cart functionality
- Secure checkout process
- Seller dashboard
- Product management

### Crowdfunding
- Campaign creation and management
- Donation processing
- Progress tracking
- Impact visualization
- Community engagement

## API Routes

### Authentication
```http
POST /api/auth/signup      # User registration
POST /api/auth/login       # User login
POST /api/auth/logout      # User logout
GET /api/auth/protected    # Protected route check
```

### Products
```http
GET /api/products          # Get all products
GET /api/products/:id      # Get specific product
POST /api/products         # Add new product
PUT /api/products/:id      # Update product
DELETE /api/products/:id   # Delete product
```

### Sellers
```http
POST /api/upload/sellers              # Register seller
POST /api/upload/sellers/:id/details  # Add seller details
GET /api/seller/:id                   # Get seller details
```

## Environment Setup

### Frontend (.env)
```env
VITE_apiKey=firebase_api_key
VITE_authDomain=firebase_auth_domain
VITE_projectID=firebase_project_id
VITE_storageBucket=firebase_storage_bucket
VITE_messagingSenderId=firebase_messaging_sender_id
VITE_appID=firebase_app_id
VITE_BACKEND_URL=http://localhost:7000
```

### Backend (.env)
```env
PORT=7000
cloudName=cloudinary_cloud_name
cloudinaryAPIKey=cloudinary_api_key
cloudinaryAPISecret=cloudinary_api_secret
```

## Common Issues and Solutions

### Authentication Issues
1. **Invalid Firebase Configuration**
   - Check environment variables
   - Verify Firebase project settings
   - Clear browser cache and cookies

2. **Session Management**
   - Ensure HTTP-only cookies are enabled
   - Check CORS configuration
   - Verify token expiration

### File Upload Issues
1. **Image Upload Failures**
   - Check Cloudinary credentials
   - Verify file size limits
   - Ensure proper file formats

2. **Performance Issues**
   - Implement image optimization
   - Use proper caching strategies
   - Consider CDN implementation

## External APIs Used

1. **Firebase**
   - Authentication
   - Firestore Database
   - Cloud Functions

2. **Cloudinary**
   - Image storage and optimization
   - Asset management

3. **Google Maps**
   - Location selection
   - Delivery tracking

4. **Payment Gateways**
   - Stripe integration
   - Secure payment processing

## Development Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd google-solution-challenge
```

2. Install dependencies:
```bash
# Frontend
cd frontend
npm install

# Backend
cd ../backend
npm install
```

3. Start development servers:
```bash
# Frontend (http://localhost:5173)
cd frontend
npm run dev

# Backend (http://localhost:7000)
cd backend
npm run dev
```

## Deployment

The application can be deployed using various platforms:
- Frontend: Vercel, Netlify, or Firebase Hosting
- Backend: Heroku, DigitalOcean, or Google Cloud Platform

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit changes
4. Push to branch
5. Create Pull Request


