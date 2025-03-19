# Google Solution Challenge

This repository contains the frontend code for the Google Solution Challenge project. The project includes several pages for user and seller sign-up, login, and document upload functionalities.

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

**Accessible at:** `/store/product-page`

**Features:**
- Image gallery with thumbnails
- Product details and pricing
- Seller information and profile
- Buy now and add to cart functionality
- Expandable sections for description, features, and FAQs
- Similar products recommendations
- Customer reviews with global and local filtering
- Review submission form
- AI-powered summary by Gemini

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
- Analytics dashboard with key metrics
- Total orders, revenue, and products sold
- Real-time sales tracking
- Order management system
- Payment summary and history
- Product inventory management
- Performance graphs and charts

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

## License

This project is licensed under the MIT License.
