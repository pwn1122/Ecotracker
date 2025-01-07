


import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Header() {
  const slides = [

    {
      image: "/img/tree.jpg",
      title: "Take Care Of Nature",
      description: "Start Recycling Toady nd help us protect our Enviourment",
      buttonText: "GET IN TOUCH"

    },
    {
      image: "/img/2.png",
      title: "Climate Target Update Tracker",
      description: "We will be tracking governments as they update their Paris Agreement targets, and calling out those who are not planning to do so.",
      buttonText: "LEARN MORE"
    },
    {
      image: "/img/8.png",
      title: "As the climate crisis worsens, the warming outlook stagnates",
      description: "Read our latest Global Temperature Update",
      buttonText: "FIND OUT MORE"
    },
    {
      image: "/img/3.png",
      title: "The CAT guide to a good 2035 climate target",
      description: "Our guide on the four key elements that governments should focus on when developing their climate targets",
      buttonText: "DISCOVER"
    },
    {
      image: "/img/4.png",
      title: "CAT's Data Explorer",
      description: "All data in one place: Explore our new webtool",
      buttonText: "EXPLORE"
    },
    {
      image: "/img/5.png",
      title: "1.5°C benchmarks for light-duty vehicles",
      description: "See our latest light-duty vehicle specific benchmarks for achieving a 1.5°C compatible transport sector",
      buttonText: "FIND OUT MORE"
    },
    {
      image: "/img/9.jpg",
      title: "Credibility of net zero targets",
      description: "View our nuanced and transparent assessments of national net zero targets",
      buttonText: "LEARN MORE"
    },
    {
      image: "/img/7.png",
      title: "Azerbaijan",
      description: "Read our full country assessment and why COP29 host Azerbaijan receives a “Critically insufficient” rating",
      buttonText: "DISCOVER"
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div>
      <div className="relative flex items-center justify-center h-screen bg-blue-500">
        <div className="absolute inset-0 flex items-center justify-between px-4 z-20">
          <button onClick={prevSlide} className="bg-gray-800 text-white p-2 rounded-full md:mt-0 mt-20">
            <i className="fas fa-chevron-left"></i>
          </button>
          <button onClick={nextSlide} className="bg-gray-800 text-white p-2 rounded-full md:mt-0 mt-20">
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>

        <AnimatePresence>
          {/* Background Image Animation */}
          <motion.div
            key={currentIndex}
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${slides[currentIndex].image})`,
              filter: 'brightness(50%)', // Apply brightness filter
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          />
        </AnimatePresence>

        <div className="text-center text-white px-4 md:px-0 relative z-10 flex flex-col justify-center items-center h-full">
          {/* Title Animation */}
          <motion.h1
            className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
          >
            {slides[currentIndex].title}
          </motion.h1>

          {/* Description Animation */}
          <motion.p
            className="text-base md:text-lg lg:text-xl mb-6"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {slides[currentIndex].description}
          </motion.p>

          {/* Button Animation */}
          <motion.button
            className="bg-gray-800 text-white py-2 px-4 rounded-full flex items-center justify-center"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {slides[currentIndex].buttonText} <i className="fas fa-chevron-right ml-2"></i>
          </motion.button>
        </div>

        <div className="absolute bottom-4 flex space-x-2 z-10">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full ${i === currentIndex ? 'bg-white' : 'bg-gray-400'}`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Header;

