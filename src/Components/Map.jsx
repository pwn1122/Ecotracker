// import React from 'react'

// function Map() {

 
//   return (
//     <div>
      
//       <section className="my-6">
//       <h2 className="text-xl font-semibold flex justify-center">Find Local Eco-Points</h2>
//       <div className="mt-4">
//         {/* <iframe
         
//           src={`https://www.google.com/maps/embed/v1/place?key='AIzaSyDOaSWPVFoel2XDK70z6Suw8p3dx1MagHk'
//                 &q=Space+Needle,Seattle+WA`}
//           className="w-full h-64 sm:h-80 lg:h-96 border-0"
//           allowFullScreen=""
//           loading="lazy"
//         ></iframe> */}

//                 <iframe 
//                  title="Eco Points Map"
//                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.1234567890123!2d75.12345678901234!3d29.     12345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1234567890123456!2sParachute%20Immigration!5e0!3m2!1sen!2sin!4v1234567890123" 
//                     width="600" 
//                     height="450" 
//                     style={{ border: 0 }} 
//                     allowFullScreen="" 
//                     loading="lazy" 
//                     referrerPolicy="no-referrer-when-downgrade"
//                     className="w-full h-64 md:h-96"
                    
//                 ></iframe>


//       </div>
//     </section>

//     </div>
//   )
// }

// export default Map


// import React, { useState } from 'react';

// export default function EcoPointsMap() {
//   const [location, setLocation] = useState('Parachute Immigration'); // Default location

//   // Handle location change (for example, via search input)
//   const handleSearch = (event) => {
//     setLocation(event.target.value); // Update the location state with user input
//   };

//   // Dynamically update the src URL for the iframe
//   const encodedLocation = encodeURIComponent(location);

//   // Your existing iframe URL, with dynamic location insertion
//   const mapSrc = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.1234567890123!2d75.12345678901234!3d29.12345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1234567890123456!2s${encodedLocation}!5e0!3m2!1sen!2sin!4v1234567890123`;

//   return (
//     <div className="min-h-screen flex flex-col items-center bg-gray-100 p-4">
//       <h1 className="text-2xl font-bold my-4">Eco Points Location Map</h1>

//       {/* Search Input */}
//       <div className="mb-4">
//         <input
//           type="text"
//           placeholder="Search for a location"
//           className="border border-gray-300 rounded p-2 shadow-sm mb-4"
//           value={location}
//           onChange={handleSearch}
//           onKeyDown={(e) => {
//             // Detect 'Enter' key press and trigger the search
//             if (e.key === 'Enter') {
//               setLocation(e.target.value); // Trigger map update on Enter
//             }
//           }}
//         />
//       </div>

//       {/* Embed Google Maps using iframe */}
//       <iframe
//         title="Eco Points Map"
//         src={mapSrc}
//         width="600"
//         height="450"
//         style={{ border: 0 }}
//         allowFullScreen=""
//         loading="lazy"
//         referrerPolicy="no-referrer-when-downgrade"
//         className="w-full h-64 md:h-96"
//       ></iframe>
//     </div>
//   );
// }





// import React, { useState } from 'react';

// export default function EcoPointsMap() {
//   // Set default location to Hisar, Haryana
//   const [location, setLocation] = useState('Sirsa , Haryana'); 

//   // Handle location change (for example, via search input)
//   const handleSearch = (event) => {
//     setLocation(event.target.value); // Update the location state with user input
//   };

//   // Dynamically update the src URL for the iframe
//   const encodedLocation = encodeURIComponent(location);

//   // Your existing iframe URL, with dynamic location insertion
//   const mapSrc = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.1234567890123!2d75.12345678901234!3d29.12345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1234567890123456!2s${encodedLocation}!5e0!3m2!1sen!2sin!4v1234567890123`;

//   return (
//     <div className="min-h-screen flex flex-col items-center bg-gray-100 p-4">
//       <h1 className="text-2xl font-bold my-4">Eco Points Location Map</h1>

//       {/* Search Input */}
//       <div className="mb-4 w-full max-w-md">
//         <input
//           type="text"
//           placeholder="Search for a location"
//           className="border border-gray-300 rounded p-2 shadow-sm w-full mb-4"
//           value={location}
//           onChange={handleSearch}
//           onKeyDown={(e) => {
//             // Detect 'Enter' key press and trigger the search
//             if (e.key === 'Enter') {
//               setLocation(e.target.value); // Trigger map update on Enter
//             }
//           }}
//         />
//       </div>

//       {/* Embed Google Maps using iframe */}
//       <iframe
//         title="Eco Points Map"
//         src={mapSrc}
//         width="600"
//         height="450"
//         style={{ border: 0 }}
//         allowFullScreen=""
//         loading="lazy"
//         referrerPolicy="no-referrer-when-downgrade"
//         className="w-full h-64 md:h-96"
//       ></iframe>
//     </div>
//   );
// }






import React, { useState, useEffect } from 'react';


export default function EcoPointsMap() {
  // Set default location to Sirsa, Haryana
  const [location, setLocation] = useState('Sirsa , Haryana'); 
  const [isLoaded, setIsLoaded] = useState(false); // State to manage animation trigger

  // Handle location change (for example, via search input)
  const handleSearch = (event) => {
    setLocation(event.target.value); // Update the location state with user input
  };

  // Dynamically update the src URL for the iframe
  const encodedLocation = encodeURIComponent(location);

  // Your existing iframe URL, with dynamic location insertion
  const mapSrc = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.1234567890123!2d75.12345678901234!3d29.12345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1234567890123456!2s${encodedLocation}!5e0!3m2!1sen!2sin!4v1234567890123`;

  useEffect(() => {
    // Trigger fade-in animation when component mounts
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-4">
      <h1 className="text-2xl font-bold my-4">Eco Points Location Map</h1>

      {/* Search Input */}
      <div className="mb-4 w-full max-w-md">
        <input
          type="text"
          placeholder="Search for a location"
          className="border border-gray-300 rounded p-2 shadow-sm w-full mb-4"
          value={location}
          onChange={handleSearch}
          onKeyDown={(e) => {
            // Detect 'Enter' key press and trigger the search
            if (e.key === 'Enter') {
              setLocation(e.target.value); // Trigger map update on Enter
            }
          }}
        />
      </div>

      {/* Embed Google Maps using iframe with fade-in animation */}
      <iframe
        title="Eco Points Map"
        src={mapSrc}
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className={`w-full h-64 md:h-96 ${isLoaded ? 'fade-in' : ''}`}
      ></iframe>
    </div>
  );
}
