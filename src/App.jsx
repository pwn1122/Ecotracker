import React from "react";
import Header from './Components/Header.jsx'
import Dashboard from './Components/Dashboard.jsx'
import Map from './Components/Map.jsx'
import Footer from './Components/Footer.jsx'
import Navbar from "./Navbar.jsx";
import Climate from "./Components/Climate.jsx";



function App() {
  return (
    <div>
        <Navbar/>
                    <section className="hero bg-cover bg-center text-black p-20 text-center" style={{ backgroundImage: "url('/img/coal.jpg')" }}>
                        <h1 className="text-4xl font-bold">Make Every Green Action Count!</h1>
                        <p className="mt-4">Join challenges, track your impact, and earn rewards for eco-friendly actions.</p>
                        <button className="mt-6 bg-green-700 text-white py-2 px-4 rounded">Get Started</button>
                    </section>

        <div className="bg-gray-100 min-h-screen flex flex-col">
        <Climate/>
          <Header/>
          
        <main className="flex-1 container mx-auto px-4 md:px-8">
          <Dashboard/>
          <Map/>
        </main>
        <Footer/>
        </div>
    </div>
  );
}

export default App;
