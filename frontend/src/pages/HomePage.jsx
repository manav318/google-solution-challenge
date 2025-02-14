import React from "react";
import Welcome from "../components/Welcome.jsx"
import AboutUs from "../components/AboutUs.jsx"
import Partners from "../components/Partners.jsx"
import PastCampaignHome from "../components/PastCampaignHome.jsx"
import BigNoHome from "../components/BigNoHome.jsx"
const Home = () => {
    return ( 
        <div>
            <Welcome/>
            <AboutUs/>
            <Partners/>
            <PastCampaignHome/>
            <BigNoHome/>
        </div>
    );
}
 
export default Home;