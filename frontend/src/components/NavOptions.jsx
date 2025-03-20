import React, { useState } from "react";
import { Link } from "react-router-dom";

const options = () => {
    const [clickedLink, setClickedLink] = useState("");
    return (
        <div className='absolute text-white font-semibold flex items-center justify-between gap-[5vw] pr-[2vw] text-xl right-1 bottom-1'>
            <Link
                to="/"
                className="w-auto py-1 text-center cursor-pointer hover:scale-105"
                onClick={() => {
                    setClickedLink("home");
                    window.scrollTo(0, 0); // Reset scroll position to top
                }}
            >
                Home
            </Link>
            <Link
                to="/store"
                className="w-auto py-1 text-center cursor-pointer hover:scale-105"
                onClick={() => setClickedLink("store")}
            >
                Store
            </Link>
            <Link
                to="/dashboard-campaign"
                className="w-auto py-1 text-center cursor-pointer hover:scale-105"
                onClick={() => setClickedLink("campaign")}
            >
                Campaigns
            </Link>
            <Link
                to="/login"
                className="w-auto py-1 text-center cursor-pointer hover:scale-105"
                onClick={() => setClickedLink("login")}
            >
                Register
            </Link>
            <Link
                to="/Profile"
                className="w-auto py-1 text-center cursor-pointer hover:scale-105"
                onClick={() => setClickedLink("login")}
            >
                Profile
            </Link>
            {/* <Link
                to="/sign-up-redirect"
                className="w-auto py-1 text-center cursor-pointer hover:scale-105"
                onClick={() => setClickedLink("signup")}
            >
                Sign Up
            </Link> */}
        </div>
    )
}

export default options;