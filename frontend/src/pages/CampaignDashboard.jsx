import React from "react";
import GoogleMaps from "../components/GoogleMapsCampaigns.jsx"
import NumCard from "../components/NumCard.jsx"
import CampProfiles from "../components/CampProfiles.jsx"

const dash = () => {
    return (
        <div className="mt-[6vh] flex flex-col items-center">
            <div className="flex w-full p-1">
                <GoogleMaps />
                <NumCard />
            </div>
            <CampProfiles />
        </div>
    );
}

export default dash;