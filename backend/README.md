# Backend Service - Google Solution Challenge

## Overview
Backend service built with Node.js, Express, and Firebase to handle user authentication, seller data management, and file uploads. The system uses Cloudinary for file storage and Firebase/Firestore for user management and data persistence.

## Features

### Authentication System
- Firebase Authentication integration
- Secure session management with HTTP-only cookies
- Protected routes with middleware verification
- User role management (admin/seller/user)

### Data Management
- **Seller Management:**
  - Basic seller profile creation
  - Additional details and document uploads
  - Secure file storage using Cloudinary
- **Database:**
  - Firestore collections for users and sellers
  - Document-based data structure
  - Real-time updates capability

## API Endpoints

### Authentication Routes
```http
POST /api/auth/signup
Content-Type: application/json

{
    "email": "user@example.com",
    "password": "securepassword",
    "username": "username"
}
```

```http
POST /api/auth/login
Content-Type: application/json

{
    "idToken": "firebase-id-token"
}
```

```http
POST /api/auth/logout
```

### Seller Routes
```http
POST /api/upload/sellers
Content-Type: application/json

{
    "sellerName": "Business Name",
    "email": "business@example.com",
    "password": "password",
    "logoFile": "base64-encoded-file"
}
```

```http
POST /api/upload/sellers/:sellerId/details
Content-Type: application/json

{
    "details": {
        // seller specific details
    },
    "documents": ["base64-encoded-files"]
}
```

### User Information Routes
```http
GET /api/get-role/:uid
GET /api/get-uid
```

## Setup and Installation

### Prerequisites
- Node.js v14 or higher
- Firebase account and project
- Cloudinary account

### Environment Variables
Create a `.env` file in the root directory:
```
PORT=7000
cloudName=your_cloudinary_cloud_name
cloudinaryAPIKey=your_cloudinary_api_key
cloudinaryAPISecret=your_cloudinary_api_secret
```

### Installation Steps
1. Install dependencies:
   ```bash
   npm install
   ```

2. Place your Firebase service account key in:
   ```
   src/firebaseService.json
   ```

3. Start the server:
   ```bash
   node src/index.js
   ```

## Project Structure
```
backend/
├── src/
│   ├── controllers/
│   │   ├── auth.controller.js
│   │   └── seller.controller.js
│   ├── routes/
│   │   ├── auth.route.js
│   │   └── seller.route.js
│   ├── middleware/
│   │   └── verify.js
│   ├── lib/
│   │   └── firebase.js
│   └── index.js
├── .env
└── package.json
```

## Technologies
- **Node.js & Express**: Server framework
- **Firebase Admin SDK**: Authentication and database management
- **Cloudinary**: File storage and management
- **JWT**: Token-based authentication

## Error Handling
The API implements standard HTTP status codes:
- 200: Success
- 201: Created
- 400: Bad Request
- 401: Unauthorized
- 403: Forbidden
- 500: Server Error

## Security Measures
- HTTP-only cookies for session management
- Firebase token verification
- CORS configuration
- Request validation
- Secure file upload handling

## Development
Server runs on `http://localhost:7000` by default. Use Postman or similar tools for testing API endpoints.
