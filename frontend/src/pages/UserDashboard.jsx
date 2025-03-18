import React from "react";
import SideBarProfile from "../components/SideBarProfile";
import UserMainDashSection from "../components/UserMainDashSection";

const  UserDashboard= () => {
    return (  
        <div className="mt-[6vh] h-[94vh] flex justify-between">
            <SideBarProfile/>
            <UserMainDashSection/>
        </div>
    );
}
 
export default UserDashboard;