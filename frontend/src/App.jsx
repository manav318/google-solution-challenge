import React from "react";
import Logo from "./components/Logo.jsx";
import NavOptions from "./components/NavOptions.jsx"
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx"
import Store from "./pages/Store.jsx"
import Login from "./pages/Login.jsx"
import SignUpRedirect from "./pages/SignUpRedirect.jsx"
import CreateCampaign from "./pages/CreateCampaign.jsx"
import CampaignDashboard from "./pages/CampaignDashboard.jsx"
import SignUpUser from "./pages/SignUpUser.jsx"
import SignUpSeller from "./pages/SignUpSeller.jsx"
import TermsAndCondition from "./pages/TermsAndCondition.jsx"
import Support from "./pages/Support.jsx"
import CustomerCare from "./pages/CustomerCare.jsx"
import SignUpSellerUploadDocuments from "./pages/SignUpSellerUploadDocuments.jsx"
import PartnerWithUs from "./pages/PartnerWithUs.jsx"
import ProductPage from "./pages/ProductPage.jsx"
import UserDashboard from "./pages/UserDashboard.jsx";
import SellerDashboard from "./pages/SellerDashboard.jsx";
import UploadProducts from "./pages/UploadProducts.jsx";
import Navbar from "./components/NavBar.jsx";
// import "@fontsource/aclonica";
const App = () => {
  
  return (
    <>

      <Navbar/>
      <div className="m-0 overflow-y-auto">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/store" element={<Store />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up-redirect" element={<SignUpRedirect />} />
          <Route path="/create-campaign" element={<CreateCampaign />} />
          <Route path="/dashboard-campaign" element={<CampaignDashboard />} />
          <Route path="/sign-up-user" element={<SignUpUser />} />
          <Route path="/sign-up-seller" element={<SignUpSeller />} />
          <Route path="/support" element={<Support />} />
          <Route path="/customer-care" element={<CustomerCare />} />
          <Route path="/terms-and-conditions" element={<TermsAndCondition />} />
          <Route path="/sign-up-seller-upload-documents" element={<SignUpSellerUploadDocuments />} />
          <Route path="/partner-with-us" element={<PartnerWithUs />} />
          <Route path="/store/product-page" element={<ProductPage />} />
          <Route path="/dashboard-user" element={<UserDashboard/>} />
          <Route path="/dashboard-seller" element={<SellerDashboard/>} />
          <Route path="/seller-upload-product" element={<UploadProducts/>} />
        </Routes>
      </div>
      
    </>
  );
}
 
export default App;