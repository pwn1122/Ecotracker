import React from 'react'
import Navbar from '../Navbar'
import Footer from './Footer'

function Comunity() {
  return (
    <div>
        <Navbar/>
      <section id="community" className="community max-w-4xl mx-auto p-6 text-left">
                        <h2 className="text-2xl font-bold text-green-600  hover:underline">Community</h2>
                        <p className="mt-4">Join a vibrant community of eco-heroes. Share tips, stories, and inspire others to take action!</p>
                        <p className="mt-2">Check out our local events and get involved.</p>
      </section>

      <section>
        
      <div className="text-center py-16 bg-white">
                    <h2 className="text-sm text-blue-400 tracking-widest mb-2">SAVED RESOURCES OR REDUCED PRODUCTION</h2>
                    <h1 className="text-3xl text-gray-800 font-bold mb-12">Together we have already saved</h1>
                    <div className="flex flex-wrap justify-center md:justify-between space-y-8 md:space-y-0 md:space-x-8 w-[70%] m-auto">
                        <div className="text-center w-full md:w-auto">
                            <i className="fas fa-tint text-blue-400 text-5xl mb-4"></i>
                            <p className="text-3xl text-blue-400 font-bold">44 457 233</p>
                            <p className="text-gray-500">Liters of water</p>
                        </div>
                        <div className="text-center w-full md:w-auto">
                            <i className="fas fa-tree text-green-400 text-5xl mb-4"></i>
                            <p className="text-3xl text-green-400 font-bold">75 216</p>
                            <p className="text-gray-500">Square meters of land</p>
                        </div>
                        <div className="text-center w-full md:w-auto">
                            <i className="fas fa-cloud text-yellow-400 text-5xl mb-4"></i>
                            <p className="text-3xl text-yellow-400 font-bold">165 695</p>
                            <p className="text-gray-500">Kilograms of CO2</p>
                        </div>
                        <div className="text-center w-full md:w-auto">
                            <i className="fas fa-glass-whiskey text-pink-400 text-5xl mb-4"></i>
                            <p className="text-3xl text-pink-400 font-bold">43 718</p>
                            <p className="text-gray-500">Pieces of plastic</p>
                        </div>
                    </div>
                </div>
      </section>

      <section>
      <div className="text-center w-[80%] p-4 m-auto">
                    <h1 className="text-3xl font-bold text-gray-800 mb-8">Tracked activities</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="flex flex-col items-center">
                            {/* <img src="/img/meals.png" alt="Icon representing meals" className="mb-2"/> */}
                            <span className="text-yellow-500 text-6xl mb-2"><i className="fas fa-utensils"></i></span>
                            <span className="text-gray-800">Meals</span>
                        </div>
                        <div className="flex flex-col items-center">
                            {/* <img src="/img/trasnport.png" alt="Icon representing transport" className="mb-2"/> */}
                            <span className="text-blue-500 text-6xl mb-2"><i className="fas fa-bicycle"></i></span>
                            <span className="text-gray-800">Transport</span>
                        </div>
                        <div className="flex flex-col items-center">
                            {/* <img src="/img/plant.png" alt="Icon representing lifestyle" className="mb-2"/> */}
                            <span className="text-green-500 text-6xl mb-2"><i className="fas fa-seedling"></i></span>
                            <span className="text-gray-800">Lifestyle</span>
                        </div>
                        <div className="flex flex-col items-center">
                            {/* <img src="/img/plastic.png" alt="Icon representing plastic" className="mb-2"/> */}
                            <span className="text-red-500 text-6xl mb-2"><i className="fas fa-bottle-water"></i></span>
                            <span className="text-gray-800 ">Plastic</span>
                        </div>
                    </div>
                </div>
      </section>
      <Footer/>
    </div>
  )
}

export default Comunity
