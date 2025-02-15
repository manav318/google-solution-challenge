import React from "react";
import Welcome from "../components/Welcome.jsx"
import AboutUs from "../components/AboutUs.jsx"
import Partners from "../components/Partners.jsx"
import PastCampaignHome from "../components/PastCampaignHome.jsx"
import BigNoHome from "../components/BigNoHome.jsx"
import CreateCamp from "../components/CreateCamp.jsx"
const Home = () => {
    return ( 
        <div>
            <Welcome/>
            <AboutUs/>
            <Partners/>
            <PastCampaignHome/>
            <BigNoHome/>
            <CreateCamp/>
            
        </div>
    );
}
 
export default Home;