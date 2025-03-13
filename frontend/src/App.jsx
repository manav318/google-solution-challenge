import React from "react";
import Logo from "./components/Logo.jsx";
import NavOptions from "./components/NavOptions.jsx"
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx"
import Store from "./pages/Store.jsx"
import Login from "./pages/Login.jsx"
import SignUp from "./pages/SignUp.jsx"
import CreateCampaign from "./pages/CreateCampaign.jsx"
import CampaignDashboard from "./pages/CampaignDashboard.jsx"
// import "@fontsource/aclonica";
const App = () => {
  
  return (
    <>
      <nav className="fixed top-0 left-0 flex items-center justify-between bg-gray-700 bg-opacity-80 font-semibold w-full z-50 drop-shadow-2xl">
        <Logo />
        <NavOptions />
      </nav>

      <div className="m-0 overflow-y-auto">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/store" element={<Store />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/create-campaign" element={<CreateCampaign />} />
          <Route path="/dashboard-campaign" element={<CampaignDashboard />} />
        </Routes>
      </div>
    </>
  );
}
 
export default App;