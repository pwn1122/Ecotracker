import React from 'react'
import Challenge from "./Challange.jsx";
import Ecopoints from "./Ecopoints.jsx";
import ImpactTracker from "./ImpactTracker.jsx";
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';


function GetStarted() {
  return (
    <div>
        <Navbar/>
        <Challenge/>
        <Ecopoints/>
        <ImpactTracker/>
        <Footer/>
    </div>
  )
}

export default GetStarted
