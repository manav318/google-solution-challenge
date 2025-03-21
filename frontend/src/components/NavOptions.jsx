import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
const options = () => {
    const [clickedLink, setClickedLink] = useState("");
    const [loggedinToken,setLoggedInToken]=useState(false)
    const [dashboard,setDashboard]=useState("")
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
        const sellerID=getCookie("sellerID")
        if(sellerID==null)
            setDashboard("/dashboard-user")
        else   
            setDashboard("/dashboard-seller")
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
            return (<Link
                    to="/login"
                    className="w-auto py-1 text-center cursor-pointer hover:scale-105 mr-[2vw]"
                    onClick={() => setClickedLink("login")}
                    >
                        Register
                    </Link>)
        else
            return (<Link
                    to={dashboard}
                    className="w-auto py-1 text-center cursor-pointer hover:scale-105 mr-[2vw]"
                    onClick={() => setClickedLink("login")}
                    >
                        Profile
                    </Link>)

    } 

    return (
        <div className='absolute text-white font-semibold flex items-center justify-between gap-[3vw] text-xl right-1 bottom-1' key={location.pathname}>
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
        </div>
    )
}

export default options;