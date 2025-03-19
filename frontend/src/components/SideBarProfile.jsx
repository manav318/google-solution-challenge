import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUserEdit, FaCog, FaUserCircle, FaSun, FaMoon, FaSignOutAlt, FaLock } from "react-icons/fa";

const SideBarProfile = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(false); // State for theme toggle

    // Function to toggle between light and dark themes
    const toggleTheme = () => {
        setIsDarkTheme((prev) => !prev);
        // Apply the theme change to the entire app (you can customize this part)
        if (isDarkTheme) {
            document.documentElement.classList.remove("dark");
        } else {
            document.documentElement.classList.add("dark");
        }
    };

    // Function to handle logout
    const handleLogout = () => {
        // Add your logout logic here
        console.log("User logged out");
    };

    return (
        <div className="h-full w-[25vw] bg-blue-600 flex flex-col items-center pt-[3vh]">
            {/* Profile Section */}
            <div className="flex flex-col items-center gap-[2vh]">
                <div className="h-[18vh] w-[18vh] rounded-full border-4 border-blue-400 overflow-hidden">
                    <img
                        src="pics/profile1.png"
                        alt="profile picture"
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="text-center">
                    <p className="text-white text-4xl font-bold">John Doe</p>
                    <p className="text-white text-[1.2vw]">john.doe@email.com</p>
                </div>
            </div>

            {/* Separator */}
            <div className="w-[80%] h-[1px] bg-blue-400 my-[3vh]"></div>

            {/* Navigation Links */}
            <div className="w-full p-[3vh] pl-0 flex flex-col gap-[2vh]">
                <Link
                    to="/profile/edit"
                    className="text-white text-2xl w-full pl-3 p-2 rounded-full h-[6vh] font-semibold hover:bg-blue-500 transition duration-150 ease-in-out flex items-center gap-3"
                >
                    <FaUserEdit className="text-xl" /> Edit Profile
                </Link>
                <Link
                    to="/profile/settings"
                    className="text-white text-2xl w-full pl-3 p-2 rounded-full h-[6vh] font-semibold hover:bg-blue-500 transition duration-150 ease-in-out flex items-center gap-3"
                >
                    <FaCog className="text-xl" /> Settings
                </Link>
                <Link
                    to="/profile/account"
                    className="text-white text-2xl w-full pl-3 p-2 rounded-full h-[6vh] font-semibold hover:bg-blue-500 transition duration-150 ease-in-out flex items-center gap-3"
                >
                    <FaUserCircle className="text-xl" /> Account
                </Link>

                {/* Theme Toggle Button */}
                <button
                    onClick={toggleTheme}
                    className="text-white text-2xl w-full pl-3 p-2 rounded-full h-[6vh] font-semibold hover:bg-blue-500 transition duration-150 ease-in-out flex items-center gap-3"
                >
                    {isDarkTheme ? (
                        <FaMoon className="text-xl" />
                    ) : (
                        <FaSun className="text-xl" />
                    )}
                    Theme
                </button>

                <Link
                    to="/profile/privacy"
                    className="text-white text-2xl w-full pl-3 p-2 rounded-full h-[6vh] font-semibold hover:bg-blue-500 transition duration-150 ease-in-out flex items-center gap-3"
                >
                    <FaLock className="text-xl" /> Privacy
                </Link>

                {/* Logout Button */}
                <button
                    onClick={handleLogout}
                    className="text-white text-2xl w-full pl-3 p-2 rounded-full h-[6vh] font-semibold hover:bg-blue-500 transition duration-150 ease-in-out flex items-center gap-3"
                >
                    <FaSignOutAlt className="text-xl" /> Logout
                </button>
            </div>
        </div>
    );
};

export default SideBarProfile;