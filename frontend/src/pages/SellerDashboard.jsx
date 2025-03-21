import React from "react";
import SideBarProfile from "../components/SideBarProfile";
import SellerMainDashSection from "../components/SellerMainDashSection";

const  SellerDashboard= () => {
    
    return (  
        <div className="mt-[6vh] h-[94vh] flex justify-between">
            {/* <SideBarProfile/> */}
            <SellerMainDashSection />
        </div>
    );
}
 
export default SellerDashboard;