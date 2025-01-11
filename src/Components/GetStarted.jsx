import React from 'react'
import Challenge from "./Challange.jsx";
import Ecopoints from "./Ecopoints.jsx";
import ImpactTracker from "./ImpactTracker.jsx";
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import Profile from "./Profile.jsx";
import CarbonFootprintCalculator from "./Carbon.jsx";

function GetStarted() {
  return (
    <div>
        <Navbar/>
        <Profile/>
        <CarbonFootprintCalculator/>
        <Challenge/>
        <Ecopoints/>
        <ImpactTracker/>
        
        <Footer/>
    </div>
  )
}

export default GetStarted
