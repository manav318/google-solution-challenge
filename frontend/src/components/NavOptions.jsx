import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
const options = () => {
    const [clickedLink, setClickedLink] = useState("");
    const [loggedinToken,setLoggedInToken]=useState(false)
    const location=useLocation()
    const getCookie = (name) => {
        const value = `; ${document.cookie}`;
        console.log("VALUE: ",value)
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(";").shift();
        return null;
    };
    useEffect(() => {
        const loginToken = getCookie("loginToken"); // Replace "loginToken" with the actual cookie name
        console.log("navbar : ",loginToken)
        if(loginToken==null)
            setLoggedInToken(false)
        else
            setLoggedInToken(true)
        console.log("Login Token:", loginToken);
    }
    )

    const componentConditional=()=>{
        if(!loggedinToken)
            

        if(!loggedinToken)
            return (<Link
                    to="/login"
                    className="w-32 py-1 text-center cursor-pointer hover:scale-105"
                    onClick={() => setClickedLink("login")}
                    >
                        Register
                    </Link>)
        else
            return (<Link
                    to="/Profile"
                    className="w-32 py-1 text-center cursor-pointer hover:scale-105"
                    onClick={() => setClickedLink("login")}
                    >
                        Profile
                    </Link>)

    } 

    return (
        <div className='absolute text-white font-semibold flex items-center justify-between gap-1 text-xl right-1 bottom-1' key={location.pathname}>
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
            {componentConditional(loggedinToken)}
            
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