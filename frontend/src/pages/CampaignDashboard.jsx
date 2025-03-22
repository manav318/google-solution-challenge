import React from "react";
import GoogleMaps from "../components/GoogleMapsCampaigns.jsx"
import NumCard from "../components/NumCard.jsx"
import CampProfiles from "../components/CampProfiles.jsx"

const dash = () => {
    return (
        <div className="mt-[6vh] flex flex-col items-center">
            <div className="flex justify-between w-full p-[0.2vh]">
                <GoogleMaps />
                <NumCard />
            </div>
            <CampProfiles />
        </div>
    );
}

export default dash;