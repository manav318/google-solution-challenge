import React from "react";
import Welcome from "../components/Welcome.jsx"
import AboutUs from "../components/AboutUs.jsx"
import Partners from "../components/Partners.jsx"
import PastCampaignHome from "../components/PastCampaignHome.jsx"
import BigNoHome from "../components/BigNoHome.jsx"
import Testimonials from "../components/Testimonials.jsx"
import Footer from "../components/Footer.jsx"
const Home = () => {
    return ( 
        <div>
            <Welcome/>
            <AboutUs/>
            <Partners/>
            <PastCampaignHome/>
            <BigNoHome/>
            <Testimonials/>
            <Footer/>
            
        </div>
    );
}
 
export default Home;