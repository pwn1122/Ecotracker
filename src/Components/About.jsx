
import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import AOS from 'aos';  // Import AOS library
import 'aos/dist/aos.css'; // Import AOS styles

function About() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with animation duration
  }, []);

  return (
    <div>
      <Navbar />

      <section id="about" className="about max-w-4xl mx-auto p-6 text-left" data-aos="fade-up">
        <h2 className="text-2xl font-bold text-green-600 hover:underline">About Us</h2>
        <p className="mt-4">EcoTrack Adventures is dedicated to making sustainability fun and rewarding. Our mission is to empower individuals to create a collective impact through small, meaningful actions.</p>
      </section>

      <section>
        <div
          className="flex items-center justify-center min-h-screen bg-cover bg-center"
          style={{ backgroundImage: "url('/img/forest.webp')" }}
          data-aos="fade-in"
        >
          <div className="bg-opacity-50 p-4 md:p-8 lg:p-16 text-center text-white max-w-screen-lg mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Our Evergrow Eco-Action mission</h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-4">
              At CarltonOne, our purpose-powered solutions inspire millions of people around the globe every day. We understand more than most companies the opportunity for positive global change that our products and community of members can create. We’ve designed Evergrow — our unique eco-action business model — to convert member actions on our platforms directly into climate change funding.
            </p>
            <p className="text-lg md:text-xl lg:text-2xl">
              We believe we have the global capability to make a significant impact. Our platform can fund the planting of millions of trees, sequestering millions of pounds of carbon from the atmosphere, while bringing hope and livelihoods for families less fortunate than ours.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default About;
