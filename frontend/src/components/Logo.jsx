import React from "react";

const Logo = () => {
    return (  
        <div className="flex items-center justify-between cursor-pointer "
        onClick={()=>{window.location='/creators';}}
        >
            <img 
            className="h-[5vh]"
             src='/logosvg1.svg' alt="logo" />
             <h4 className="text-2xl font-bold bg-gradient-to-r from-yellow-700 via-yellow-400 to-yellow-700 bg-clip-text text-transparent">GENUITY</h4>
        </div>
    );
}
 
export default Logo;