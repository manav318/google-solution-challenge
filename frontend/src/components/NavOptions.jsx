import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { IoHome, IoStorefront, IoGlobe, IoPerson } from "react-icons/io5"; // Icons for Home, Store, Campaigns, and Profile

const Options = () => {
  const [clickedLink, setClickedLink] = useState("");
  const [loggedinToken, setLoggedInToken] = useState(false);
  const [dashboard, setDashboard] = useState("");
  const location = useLocation();
  const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
    return null;
  };

  useEffect(() => {
      
    const loginToken = getCookie("loginToken"); // Replace "loginToken" with the actual cookie name
    const sellerID = getCookie("sellerID");
    if (sellerID == null) setDashboard("/dashboard-user");
    else setDashboard("/dashboard-seller");

    setLoggedInToken(!!loginToken);
  }, [location]);

  

  

  const renderProfileOrRegister = () => {
    
    if (!loggedinToken) {
      return (
        <li  className="relative list-none w-[4.5vh] h-[4.5vh] bg-white shadow-lg rounded-full cursor-pointer flex justify-center items-center transition-all duration-500 hover:w-40 group hover:bg-gradient-to-tr from-blue-200 to-blue-600">
          <Link
            to="/login"
            className="w-full h-full flex justify-center items-center"
            onClick={() => setClickedLink("login")}
          >
            <IoPerson  className="text-gray-500 text-xl transition-all duration-500 group-hover:scale-0 group-hover:opacity-0" />
            <span key={location.pathname} className="absolute text-white text-sm font-semibold uppercase opacity-0 transform scale-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100">
              Register
            </span>
          </Link>
        </li>
      );
    } else {
      return (
        <li  className="relative list-none w-[4.5vh] h-[4.5vh] bg-white shadow-lg rounded-full cursor-pointer flex justify-center items-center transition-all duration-500 hover:w-40 group hover:bg-gradient-to-tr from-blue-200 to-blue-600">
          <Link
            to={dashboard}
            className="w-full h-full flex justify-center items-center"
            onClick={() => setClickedLink("login")}
            
          >
            <IoPerson className="text-gray-500 text-xl transition-all duration-500 group-hover:scale-0 group-hover:opacity-0" />
            <span key={location.pathname} className="absolute text-white text-sm font-semibold uppercase opacity-0 transform scale-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100">
              Profile
            </span>
          </Link>
        </li>
      );
    }
  };

  return (
    <ul className="flex items-center gap-6">
      {/* Home */}
      <li className="relative list-none w-[4.5vh] h-[4.5vh] bg-white shadow-lg rounded-full cursor-pointer flex justify-center items-center transition-all duration-500 hover:w-40 group hover:bg-gradient-to-tr from-blue-200 to-blue-600">
        <Link
          to="/"
          className="w-full h-full flex justify-center items-center"
          onClick={() => {
            setClickedLink("home");
            window.scrollTo(0, 0); // Reset scroll position to top
          }}
        >
          <IoHome className="text-gray-500 text-xl transition-all duration-500 group-hover:scale-0 group-hover:opacity-0" />
          <span className="absolute text-white text-sm font-semibold uppercase opacity-0 transform scale-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100">
            Home
          </span>
        </Link>
      </li>

      {/* Store */}
      <li className="relative list-none w-[4.5vh] h-[4.5vh] bg-white shadow-lg rounded-full cursor-pointer flex justify-center items-center transition-all duration-500 hover:w-40 group hover:bg-gradient-to-tr from-blue-200 to-blue-600">
        <Link
          to="/store"
          className="w-full h-full flex justify-center items-center"
          onClick={() => setClickedLink("store")}
        >
          <IoStorefront className="text-gray-500 text-xl transition-all duration-500 group-hover:scale-0 group-hover:opacity-0" />
          <span className="absolute text-white text-sm font-semibold uppercase opacity-0 transform scale-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100">
            Store
          </span>
        </Link>
      </li>

      {/* Campaigns */}
      <li className="relative list-none w-[4.5vh] h-[4.5vh] bg-white shadow-lg rounded-full cursor-pointer flex justify-center items-center transition-all duration-500 hover:w-40 group hover:bg-gradient-to-tr from-blue-200 to-blue-600">
        <Link
          to="/dashboard-campaign"
          className="w-full h-full flex justify-center items-center"
          onClick={() => setClickedLink("campaign")}
        >
          <IoGlobe className="text-gray-500 text-xl transition-all duration-500 group-hover:scale-0 group-hover:opacity-0" />
          <span className="absolute text-white text-sm font-semibold uppercase opacity-0 transform scale-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100">
            Campaigns
          </span>
        </Link>
      </li>

      {/* Profile/Register */}
      {renderProfileOrRegister()}
    </ul>
  );
};

export default Options;