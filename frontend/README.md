# Frontend Service - Google Solution Challenge

## Overview
A React-based frontend application built with Vite that provides user interfaces for sellers and customers. Features include authentication, seller dashboards, product management, and interactive data visualization.

## Prerequisites
- Node.js v14 or higher
- npm or yarn package manager
- Modern web browser
- Firebase account
- Cloudinary account (for image uploads)

## Installation Steps
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create `.env` file:
   ```bash
   cp .env.example .env
   ```

4. Start development server:
   ```bash
   npm run dev
   ```

## Environment Variables
```env
VITE_apiKey=your_firebase_api_key
VITE_authDomain=your_firebase_auth_domain
VITE_projectID=your_firebase_project_id
VITE_storageBucket=your_firebase_storage_bucket
VITE_messagingSenderId=your_firebase_messaging_sender_id
VITE_appID=your_firebase_app_id
VITE_BACKEND_URL=http://localhost:7000
```

## Project Structure
```
frontend/
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Avatar.jsx
│   │   │   ├── Button.jsx
│   │   │   ├── Card.jsx
│   │   │   ├── Checkbox.jsx
│   │   │   ├── Dialog.jsx
│   │   │   ├── Dropdown.jsx
│   │   │   ├── Input.jsx
│   │   │   ├── Loading.jsx
│   │   │   ├── Modal.jsx
│   │   │   ├── Select.jsx
│   │   │   ├── Table.jsx
│   │   │   └── Toast.jsx
│   │   ├── forms/
│   │   │   ├── LoginForm.jsx
│   │   │   ├── ProductForm.jsx
│   │   │   ├── RegisterForm.jsx
│   │   │   ├── SearchForm.jsx
│   │   │   └── ValidationSchema.js
│   │   ├── layouts/
│   │   │   ├── DashboardLayout.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Header.jsx
│   │   │   ├── MainLayout.jsx
│   │   │   ├── Navbar.jsx
│   │   │   └── Sidebar.jsx
│   │   └── features/
│   │       ├── cart/
│   │       │   ├── CartItem.jsx
│   │       │   └── CartSummary.jsx
│   │       ├── products/
│   │       │   ├── ProductCard.jsx
│   │       │   ├── ProductGrid.jsx
│   │       │   └── ProductFilters.jsx
│   │       └── dashboard/
│   │           ├── AnalyticsChart.jsx
│   │           ├── RevenueWidget.jsx
│   │           └── StatisticsCard.jsx
│   ├── pages/
│   │   ├── CampaignDashboard.jsx
│   │   ├── CreateCampaign.jsx
│   │   ├── CustomerCare.jsx
│   │   ├── HomePage.jsx
│   │   ├── Login.jsx
│   │   ├── ProductPage.jsx
│   │   ├── SellerDashboard.jsx
│   │   ├── SignUpRedirect.jsx
│   │   ├── SignUpSeller.jsx
│   │   ├── SignUpSellerUploadDocuments.jsx
│   │   ├── SignUpUser.jsx
│   │   ├── Store.jsx
│   │   ├── Support.jsx
│   │   ├── TermsAndCondition.jsx
│   │   ├── UploadProducts.jsx
│   │   ├── UserDashboard.jsx
│   │   └── Creators.jsx           
│   ├── hooks/
│   │   ├── useAuth.js
│   │   ├── useCart.js
│   │   ├── useMobile.js
│   │   ├── useProducts.js
│   │   └── useUser.js
│   ├── lib/
│   │   ├── api.js
│   │   ├── constants.js
│   │   ├── firebase.js
│   │   ├── helpers.js
│   │   └── utils.js
│   ├── styles/
│   │   ├── components/
│   │   │   ├── button.css
│   │   │   └── form.css
│   │   ├── pages/
│   │   │   ├── dashboard.css
│   │   │   └── store.css
│   │   ├── globals.css
│   │   └── variables.css
│   ├── services/
│   │   ├── auth.service.js
│   │   ├── campaign.service.js
│   │   ├── product.service.js
│   │   └── user.service.js
│   ├── context/
│   │   ├── AuthContext.jsx
│   │   ├── CartContext.jsx
│   │   ├── ThemeContext.jsx
│   │   └── UserContext.jsx
│   ├── assets/
│   │   ├── images/
│   │   └── icons/
│   └── App.jsx
├── public/
│   ├── favicon.ico
│   ├── manifest.json
│   ├── robots.txt
│   └── index.html
├── tests/
│   ├── components/
│   ├── pages/
│   └── utils/
├── .env
├── .env.example
├── .gitignore
├── package.json
├── README.md
├── tsconfig.json
└── vite.config.js
```

## Pages

### SignUpSellerUploadDocuments.jsx

This page allows sellers to upload their documents and verify their Aadhar using OTP. It includes a Google Map for selecting a pickup point for deliveries.

**Accessible at:** `/sign-up-seller-upload-documents`

**Features:**
- Document upload functionality
- Aadhar verification using OTP
- Google Map integration for selecting pickup points

### SignUpSeller.jsx

This page is for seller sign-up. Sellers can provide their details, upload a logo, and navigate to the document upload page.

**Accessible at:** `/sign-up-seller`

**Features:**
- Seller detail form
- Logo upload functionality
- Navigation to document upload page

### SignUpUser.jsx

This page is for user sign-up. Users can provide their details and sign up for an account.

**Accessible at:** `/sign-up-user`

**Features:**
- User detail form
- Account creation functionality

### Login.jsx

This page is for user login. It includes Firebase integration for authentication.

**Accessible at:** `/login`

**Features:**
- Email and password login form
- Firebase authentication integration

### TermsAndCondition.jsx

This page displays the terms and conditions of the platform.

**Accessible at:** `/terms-and-conditions`

**Features:**
- Display of terms and conditions
- Scrollable content

### Support.jsx

This page provides technical and community support information.

**Accessible at:** `/support`

**Features:**
- Technical support contact information
- Community support resources

### Store.jsx

This page implements a fully functional e-commerce store with advanced filtering and product display capabilities.

**Accessible at:** `/store`

**Features:**
- Advanced filtering system:
  - Price range filter
  - Rating filter
  - Category selection
  - Brand filtering
  - Availability filter
  - Search functionality
- Product sorting options:
  - Price (low to high/high to low)
  - Rating (low to high/high to low)
- Optimized image loading with lazy loading
- Responsive product grid layout
- Product cards displaying:
  - Product image
  - Name and price
  - Category
  - Star rating
  - Purchase statistics
- Clear filters functionality
- Virtual scrolling for performance
- Memoized product filtering for efficiency

### SignUpRedirect.jsx

This page redirects users to either user or seller sign-up.

**Accessible at:** `/sign-up-redirect`

**Features:**
- Redirection logic based on user type

### HomePage.jsx

This page is the main landing page of the application.

**Accessible at:** `/`

**Features:**
- Welcome message
- Navigation to other pages

### CustomerCare.jsx

This page provides customer care information and support.

**Accessible at:** `/customer-care`

**Features:**
- Customer care contact information
- Support resources

### CreateCampaign.jsx

This page allows users to create a new campaign.

**Accessible at:** `/create-campaign`

**Features:**
- Campaign creation form
- Input fields for campaign details

### CampaignDashboard.jsx

This page displays the campaign dashboard with Google Maps integration.

**Accessible at:** `/dashboard-campaign`

**Features:**
- Campaign overview
- Google Maps integration for campaign locations

### ProductPage.jsx

This page displays detailed product information and allows users to purchase items.

**Accessible at:** `/product/:id`

**Features:**
- Image gallery with thumbnails and interactive viewer
- Detailed product information display
- Seller profile section with bio and stats
- Buy now and add to cart functionality
- Expandable sections for:
  - Product description
  - Features list
  - FAQ section with user question submission
- Similar products carousel
- Customer reviews with:
  - Global and local review filtering
  - Review submission form
  - AI-powered review summary by Google Gemini
  - Star rating display
- Interactive dropdowns for content sections
- Expected delivery information
- Responsive layout with product images

### UserDashboard.jsx

This page provides a personalized dashboard for users to manage their account and orders.

**Accessible at:** `/dashboard-user`

**Features:**
- Order tracking and history
- Rewards and karma points system
- Profile management
- Personalized recommendations
- KARMA impact statistics
- Buy again suggestions
- Order summary and status

### SellerDashboard.jsx

This page offers sellers a comprehensive view of their business performance and management tools.

**Accessible at:** `/dashboard-seller`

**Features:**
- Interactive analytics dashboard with:
  - Real-time performance metrics
  - Dynamic area charts
  - Sales trends visualization
  - Revenue tracking
- Business metrics display:
  - Total orders
  - Revenue overview
  - Products sold
  - Customer engagement
- Advanced data tables for:
  - Order management
  - Inventory tracking
  - Customer insights
- Sidebar navigation with:
  - Quick access links
  - Performance summary
  - Profile settings
- Inset layout design for better organization
- Responsive grid layout for statistics cards

### UploadProducts.jsx

This page allows sellers to add and manage their product listings.

**Accessible at:** `/seller-upload-product`

**Features:**
- Product information form
- Image upload capability
- Pricing and inventory management
- Category and tag selection
- Product variation options
- SEO optimization fields
- Draft and publish functionality

### Creators.jsx

This page showcases the team members who developed the platform.

**Accessible at:** `/creators`

**Features:**
- Team member profiles
- Social media links (LinkedIn, GitHub, Instagram)
- Profile images
- Professional descriptions
- Responsive grid layout

## Development Guide

### Code Style
We follow the Airbnb JavaScript Style Guide. Run lint checks:
```bash
npm run lint
npm run lint:fix
```

### Testing
Run unit tests:
```bash
npm test
npm run test:coverage
```

### Building for Production
```bash
npm run build
npm run preview
```

## API Integration

### Backend Endpoints
```typescript
const API = {
  AUTH: {
    LOGIN: '/api/auth/login',
    SIGNUP: '/api/auth/signup',
    VERIFY: '/api/auth/verify',
  },
  PRODUCTS: {
    LIST: '/api/products',
    DETAIL: (id: string) => `/api/products/${id}`,
    CREATE: '/api/products/create',
  },
  // Add more endpoints...
}
```

## Troubleshooting

### Common Issues

1. **Firebase Authentication Issues**
   ```bash
   # Clear browser cache and local storage
   # Check .env configuration
   # Verify Firebase console settings
   ```

2. **Build Errors**
   ```bash
   # Clear node_modules and package-lock.json
   rm -rf node_modules package-lock.json
   npm install
   ```

## Deployment

### Production Deployment
```bash
# Build the application
npm run build

# Deploy to hosting service
npm run deploy
```

### Environment Configuration
```bash
# Production
NODE_ENV=production
VITE_API_URL=https://api.production.com

# Staging
NODE_ENV=staging
VITE_API_URL=https://api.staging.com
```

## Performance Optimization

- Image optimization using next/image
- Code splitting and lazy loading
- Memoization of expensive computations
- Service Worker for offline functionality

## Contributing

1. Fork the repository
2. Create feature branch
3. Commit changes
4. Push to branch
5. Create Pull Request

## How to Run

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Start the development server using `npm start`.

## Environment Variables

Make sure to set up the following environment variables for Firebase integration:

- `VITE_apiKey`
- `VITE_authDomain`
- `VITE_projectID`
- `VITE_storageBucket`
- `VITE_messagingSenderId`
- `VITE_appID`

## Examples

### Login Example

To log in, navigate to the login page and enter your email and password. The login page uses Firebase for authentication.

```jsx
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectID,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appID
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

async function signIn(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const idToken = await userCredential.user.getIdToken();
    await fetch("http://localhost:7000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ idToken })
    });
    console.log("Sign-In successful!");
  } catch (error) {
    console.error("Error signing in:", error.message);
  }
}
```

### SignUp Example

To sign up, navigate to the sign-up page and enter your details. The sign-up page allows users to create a new account.

```jsx
const handleSubmit = async (e) => {
  e.preventDefault();
  const res = await fetch("http://localhost:7000/api/auth/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: emailOrPhone,
      password: password
    })
  });
  const json = await res.json();
  console.log(json);
};
```
````
