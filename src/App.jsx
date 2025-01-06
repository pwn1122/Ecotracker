



import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "./Components/Header.jsx";
import Dashboard from "./Components/Dashboard.jsx";
import Map from "./Components/Map.jsx";
import Footer from "./Components/Footer.jsx";
import Navbar from "./Components/Navbar.jsx";
import Climate from "./Components/Climate.jsx";
import Countries from "./Components/Countary.jsx";
import AOS from 'aos';
import 'aos/dist/aos.css'; // import AOS CSS

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      easing: 'ease-in-out', // easing function
      once: true, // whether animation should happen once
      offset: 100, // the offset (in pixels) to trigger the animation
      delay: 200, // delay before the animation starts
    });
  }, []);

  return (
    <div>
      <Navbar />
      
      {/* First h1 with animation */}
      <section
        className="hero bg-cover bg-center text-black p-20 text-center flex flex-col justify-center items-center"
        style={{ backgroundImage: "url('/img/coal.jpg')" }}
        data-aos="fade-down" // Changed to fade-down
        data-aos-delay="300" // Delay for this specific section
      >
         <h1 className="text-5xl text-yellow-200 p-4 font-bold">EcoTrack Adventures</h1>
        <h1 className="text-4xl md:text-4xl font-bold mb-4">
          Make Every Green Action Count!
        </h1>
        <p className="mt-4 text-lg md:text-xl px-4 md:px-8">
          Join challenges, track your impact, and earn rewards for eco-friendly
          actions.
        </p>
        <Link
          className="mt-6 bg-green-500 text-white py-3 px-6 rounded hover:bg-green-600 hover:text-black transition duration-300 ease-in-out"
          to={"/getstarted"}
        >
          Get Started
        </Link>
      </section>

  

      <div className="bg-gray-100 min-h-screen flex flex-col">
        <Climate data-aos="fade-down" data-aos-duration="1500" />
        <Header data-aos="fade-down" data-aos-duration="1500" />
        
        <main className="flex-1 container mx-auto px-4 md:px-8">
          <Dashboard data-aos="fade-down" data-aos-duration="1200" data-aos-delay="100" />
          <Map data-aos="zoom-in" data-aos-duration="1200" />
          <Countries data-aos="fade-left" data-aos-duration="1500" />
        </main>
        
        <Footer data-aos="fade-down" data-aos-duration="1500" />
      </div>
    </div>
  );
}

export default App;


