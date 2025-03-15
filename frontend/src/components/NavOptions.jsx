import React, { useState } from "react";
import { Link } from "react-router-dom";

const options = () => {
    const [clickedLink, setClickedLink] = useState("");
    return (
        <div className='absolute text-white font-semibold flex items-center justify-between gap-1 text-xl right-1 bottom-1 font-playfair'>
            <Link
                to="/"
                className="w-24 py-1 text-center cursor-pointer hover:scale-105"
                onClick={() => {
                    setClickedLink("home");
                    window.scrollTo(0, 0); // Reset scroll position to top
                }}
            >
                Home
            </Link>
            <Link
                to="/store"
                className="w-24 py-1 text-center cursor-pointer hover:scale-105"
                onClick={() => setClickedLink("store")}
            >
                Store
            </Link>
            <Link
                to="/login"
                className="w-24 py-1 text-center cursor-pointer hover:scale-105"
                onClick={() => setClickedLink("login")}
            >
                Login
            </Link>
            <Link
                to="/sign-up-redirect"
                className="w-24 py-1 text-center cursor-pointer hover:scale-105"
                onClick={() => setClickedLink("signup")}
            >
                Sign Up
            </Link>
        </div>
    )
}

export default options;