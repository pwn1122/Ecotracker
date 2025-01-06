// import React from 'react'
// import { Link } from "react-router-dom";


// function Climate() {
//   return (
//     <div>
//          <div className="flex flex-col items-center justify-center min-h-screen p-4">
//                     <div className="flex flex-col lg:flex-row items-center bg-white shadow-lg rounded-lg p-6 lg:p-12 w-full max-w-6xl">
//                         <div className="flex-1 flex justify-center">
//                             <img src="/img/climate.png" alt="Thermometer showing global mean temperature increase by 2100" className="w-full max-w-xs md:max-w-sm"/>
//                         </div>
//                         <div className="flex-1 mt-6 lg:mt-0 lg:ml-12 text-center lg:text-left">
//                             <img src="/img/ana.png" alt="Climate Action Tracker logo" className="mx-auto lg:mx-0"/>
//                             <h1 className="text-2xl font-bold mt-4">About Climate Action Tracker (CAT)</h1>
//                             <hr className="border-t-2 border-blue-500 w-30 mx-auto lg:mx-0 my-4"/>
//                             <p className="text-gray-700">
//                                 The Climate Action Tracker is an independent scientific project that tracks government climate action and measures it against the globally agreed Paris Agreement aim of "holding warming well below 2°C, and pursuing efforts to limit warming to 1.5°C."
//                             </p>
//                             <Link  className="mt-6 bg-blue-500 text-white font-bold py-2 rounded-full hover:text-black hover:bg-blue-400 transition duration-300 ease-in-out flex justify-center items-center  mx-auto lg:mx-0" to={"/findmore"}>FIND OUT MORE <i className="fas fa-arrow-right ml-2"></i></Link>

//                         </div>
//                     </div>
//                 </div>
//     </div>
//   )
// }

// export default Climate






import React from 'react';
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; 



function Climate() {
  return (
    <motion.div 
      className="animate-fadeIn" // Tailwind animation class for fading in
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1.5 }}
    >
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <motion.div 
          className="flex flex-col lg:flex-row items-center bg-white shadow-lg rounded-lg p-6 lg:p-12 w-full max-w-6xl animate-slideUp" // Tailwind slideUp animation
          initial={{ y: 20, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          transition={{ duration: 2 }}
        >
          <div className="flex-1 flex justify-center">
            <img 
              src="/img/climate.png" 
              alt="Thermometer showing global mean temperature increase by 2100" 
              className="w-full max-w-xs md:max-w-sm" 
            />
          </div>
          <div className="flex-1 mt-6 lg:mt-0 lg:ml-12 text-center lg:text-left">
            <img 
              src="/img/ana.png" 
              alt="Climate Action Tracker logo" 
              className="mx-auto lg:mx-0" 
            />
            <h1 className="text-2xl font-bold mt-4">About Climate Action Tracker (CAT)</h1>
            <hr className="border-t-2 border-blue-500 w-30 mx-auto lg:mx-0 my-4" />
            <p className="text-gray-700">
              The Climate Action Tracker is an independent scientific project that tracks government climate action and measures it against the globally agreed Paris Agreement aim of "holding warming well below 2°C, and pursuing efforts to limit warming to 1.5°C."
            </p>
            <Link 
              className="mt-6 bg-blue-500 text-white font-bold py-2 rounded-full hover:text-black hover:bg-blue-400 transition duration-300 ease-in-out flex justify-center items-center mx-auto lg:mx-0" 
              to={"/findmore"}
            >
              FIND OUT MORE <i className="fas fa-arrow-right ml-2"></i>
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Climate;




