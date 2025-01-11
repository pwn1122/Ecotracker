
import React, { useState } from 'react';
import 'animate.css';

function CarbonFootprintCalculator() {
  // State for inputs
  const [transportation, setTransportation] = useState(0);
  const [energy, setEnergy] = useState(0);
  const [food, setFood] = useState(0);
  const [other, setOther] = useState(0);
  const [carbonFootprint, setCarbonFootprint] = useState(null);

  // State for suggestions
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Carbon footprint calculation logic
  const calculateFootprint = () => {
    const totalFootprint = (transportation * 0.9) + (energy * 0.5) + (food * 0.8) + (other * 0.2);
    setCarbonFootprint(totalFootprint);
    setShowSuggestions(true);
  };

  // Suggestions to reduce carbon footprint
  const suggestions = [
    "Use public transport or carpool to reduce your transportation impact.",
    "Switch to energy-efficient appliances and use renewable energy sources.",
    "Opt for plant-based meals and reduce food waste.",
    "Consider reducing your overall consumption and recycling more."
  ];

  return (
    <div className="bg-green-100 min-h-screen font-sans text-gray-900">
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold text-green-600 text-center mb-6 animate__animated animate__fadeIn">Carbon Footprint Calculator</h1>

        <div className="bg-white p-6 rounded-lg shadow-md animate__animated animate__fadeIn animate__delay-1s">
          <h2 className="text-2xl font-semibold text-green-500 mb-4">Calculate Your Carbon Footprint</h2>

          <div className="mb-4 animate__animated animate__fadeIn animate__delay-2s">
            <label className="block text-lg">Transportation (in miles per week)</label>
            <input
              type="number"
              className="w-full p-3 border border-gray-300 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 focus:ring-2 focus:ring-green-500"
              value={transportation}
              onChange={(e) => setTransportation(e.target.value)}
              placeholder="Enter miles per week"
            />
          </div>

          <div className="mb-4 animate__animated animate__fadeIn animate__delay-3s">
            <label className="block text-lg">Energy Use (in kWh per month)</label>
            <input
              type="number"
              className="w-full p-3 border border-gray-300 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 focus:ring-2 focus:ring-green-500"
              value={energy}
              onChange={(e) => setEnergy(e.target.value)}
              placeholder="Enter kWh per month"
            />
          </div>

          <div className="mb-4 animate__animated animate__fadeIn animate__delay-4s">
            <label className="block text-lg">Food Consumption (in kg CO2 equivalent per week)</label>
            <input
              type="number"
              className="w-full p-3 border border-gray-300 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 focus:ring-2 focus:ring-green-500"
              value={food}
              onChange={(e) => setFood(e.target.value)}
              placeholder="Enter kg CO2 per week"
            />
          </div>

          <div className="mb-4 animate__animated animate__fadeIn animate__delay-5s">
            <label className="block text-lg">Other Activities (in kg CO2 per week)</label>
            <input
              type="number"
              className="w-full p-3 border border-gray-300 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 focus:ring-2 focus:ring-green-500"
              value={other}
              onChange={(e) => setOther(e.target.value)}
              placeholder="Enter other CO2 per week"
            />
          </div>

          <button
            onClick={calculateFootprint}
            className="w-full bg-green-500 text-white p-3 rounded-lg hover:bg-green-600 transition duration-300 transform hover:scale-105"
          >
            Calculate
          </button>
        </div>

        {carbonFootprint !== null && (
          <div className="bg-white p-6 rounded-lg shadow-md mt-6 animate__animated animate__fadeIn animate__delay-6s">
            <h2 className="text-2xl font-semibold text-green-500 mb-4">Your Estimated Carbon Footprint</h2>
            <p className="text-xl">Total Carbon Footprint: {carbonFootprint.toFixed(2)} kg CO2 per week</p>
            {showSuggestions && (
              <div className="mt-6 animate__animated animate__fadeIn animate__delay-7s">
                <h3 className="text-lg font-semibold text-green-500 mb-4">Suggestions to Reduce Your Carbon Footprint:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  {suggestions.map((suggestion, index) => (
                    <li key={index} className="text-gray-600">{suggestion}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default CarbonFootprintCalculator;

