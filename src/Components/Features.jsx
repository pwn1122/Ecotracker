import React from 'react'
import Navbar from '../Navbar'
import Footer from './Footer'


function Features() {

  const programs = [
    {
        title: "GREEN BUSINESS",
        subtitle: "SAVE ENERGY & MONEY",
        image: "/img/green.jpg",
        alt: "A small plant growing from a pile of coins"
    },
    {
        title: "WASTE",
        subtitle: "TRASH, RECYCLING & COMPOST",
        image: "/img/waste.jpg",
        alt: "Trash bins for recycling and compost"
    },
    {
        title: "CARE PROGRAM",
        subtitle: "HOME UPGRADES AT NO COST",
        image: "/img/care.jpg",
        alt: "A piggy bank and a small house model"
    },
    {
        title: "ELECTRIC VEHICLE",
        subtitle: "READINESS PLAN",
        image: "/img/vehicle.png",
        alt: "A scenic road with mountains in the background"
    },
    {
        title: "RESIDENTIAL",
        subtitle: "INCENTIVES",
        image: "/img/residential.jpg",
        alt: "A window view with plants"
    },
    {
        title: "GREEN GRANTS",
        subtitle: "PROGRAM",
        image: "/img/grants.jpg",
        alt: "Aerial view of a green landscape"
    }
];
  return (
    <div>
        <Navbar/>
      <section id="features" className="features max-w-4xl mx-auto p-6 text-left">
                        <h2 className="text-2xl font-bold text-green-600 hover:underline">Features</h2>
                        <ul className="list-disc list-inside mt-4 space-y-2">
                            <li>Gamified Challenges: Compete in fun eco-friendly activities.</li>
                            <li>Eco Points: Earn points and redeem them for rewards.</li>
                            <li>Leaderboard: See how you stack up against others.</li>
                            <li>Impact Tracker: Measure your environmental impact.</li>
                        </ul>
                    </section>

         <section>
                    <div className="container mx-auto py-12">
                    <h1 className="text-center text-3xl font-bold mb-8">FEATURED PROGRAMS</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {programs.map((program, index) => (
                            <div key={index} className="relative group w-[60%] m-auto">
                                <img src={program.image} alt={program.alt} className="w-full h-full object-cover"/>
                                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    {/* <h2 className="text-xl font-bold">{program.title}</h2>
                                    <p className="text-sm">{program.subtitle}</p> */}
                                </div>
                                <div className="absolute inset-0 border-2 border-white"></div>
                            </div>
                        ))}
                    </div>
                </div>
         </section>
           <Footer/>         
    </div>
  )
}

export default Features
