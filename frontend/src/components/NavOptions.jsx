import React, { useState } from "react";
import { Link } from "react-router-dom";

const  options= () => {
    const [clickedLink, setClickedLink] = useState(""); 
    return ( 
        <div className='absolute text-white flex items-center justify-between gap-1 text-xl right-1 bottom-1'>
            <Link
                to="/"
                className="w-24 py-1 text-center  cursor-pointer hover:scale-105"
                onClick={() => setClickedLink("home")}
            >
                home
            </Link>
            <Link
                to="/store"
                className="w-24 py-1 text-center  cursor-pointer hover:scale-105"
                onClick={() => setClickedLink("store")}
            >
                store
            </Link>
            <Link
                to="/login"
                className="w-24 py-1 text-center  cursor-pointer hover:scale-105"
                onClick={() => setClickedLink("login")}
            >
                login
            </Link>
            <Link
                to="/sign-up"
                className="w-24 py-1 text-center  cursor-pointer hover:scale-105"
                onClick={() => setClickedLink("signup")}
            >
                sign up
            </Link>
        </div>
    );
}
 
export default options;