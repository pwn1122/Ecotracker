
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";



function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Toggle menu visibility (hamburger / cross)
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  


  // Handle scroll event to change navbar size
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50 && !isScrolled) {
        setIsScrolled(true); // Navbar should expand on scroll
      } else if (window.scrollY <= 50 && isScrolled) {
        setIsScrolled(false); // Navbar returns to normal when scrolled back to the top
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup scroll event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolled]);
  

  return (
    <div>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full bg-green-500 text-white p-4 flex items-center justify-between space-x-6 z-40 transition-all duration-300 ${
          isScrolled ? "h-20" : "h-16"
        }`} // Dynamic height change on scroll
      >
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/img/eco.png"
            alt="EcoHero logo"
            className="w-10 h-10 rounded"
          />
          <span className="ml-2 text-2xl font-bold text-gray-800">EcoHero</span>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-8 text-gray-800">
          <Link
            className="hover:text-gray-600 hover:underline transition-all duration-300 transform hover:scale-105"
            to={"/"}
          >
            Home
          </Link>
          <Link
            className="hover:text-gray-600 hover:underline transition-all duration-300 transform hover:scale-105"
            to={"/features"}
          >
            Features
          </Link>
          <Link
            className="hover:text-gray-600 hover:underline transition-all duration-300 transform hover:scale-105"
            to={"/community"}
          >
            Community
          </Link>
          <Link
            className="hover:text-gray-600 hover:underline transition-all duration-300 transform hover:scale-105"
            to={"/about"}
          >
            About
          </Link>
          <Link
            className="hover:text-gray-600 hover:underline transition-all duration-300 transform hover:scale-105"
            to={"/contact"}
          >
            Contact
          </Link>
        </div>

        {/* Desktop Login/Register Buttons */}
        <div className="hidden md:flex items-center space-x-2">


          <Link
            className="bg-blue-100 text-blue-900 px-4 py-2 rounded hover:bg-blue-600 hover:text-blue-100 transition-all duration-300"
            to={"/login"}
          >
            Login
          </Link>
         
          <Link
            className="bg-blue-900 text-blue-100 px-4 py-2 rounded hover:bg-blue-100 hover:text-blue-600 transition-all duration-300"
            to={"/register"}
          >
            Register
          </Link>
        </div>

        {/* Toggle Menu Button for Mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-800 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {/* Show Hamburger or Cross Button based on isOpen state */}
            {isOpen ? (
              <i className="fas fa-times text-2xl"></i>
            ) : (
              <i className="fas fa-bars text-2xl"></i>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu (Full-screen) */}
      <div
        className={`mt-2 md:hidden ${isOpen ? "block" : "hidden"} fixed inset-0 bg-white z-50 overflow-auto transition-all duration-300 transform ${
          isOpen ? "opacity-100" : "opacity-0"
        }`} // Full-screen dropdown
      >
        {/* Logo at the top of the dropdown with navbar green background */}
        <div className="w-full bg-green-500 text-white p-4 flex items-center justify-center">
          <img
            src="/img/eco.png"
            alt="EcoHero logo"
            className="w-12 h-12 rounded"
          />
          <span className="ml-2 text-2xl font-bold">EcoHero</span>
        </div>

        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-2xl text-gray-800"
          onClick={() => setIsOpen(false)}
        >
          <i className="fas fa-times"></i>
        </button>

        {/* Menu Content */}
        <div className="flex flex-col items-center justify-center space-y-6 p-8 bg-white shadow-lg rounded-lg h-full w-full">
          {/* Mobile Links */}
          <Link
            className="block text-xl hover:text-gray-600"
            to={"/"}
            onClick={() => setIsOpen(false)} // Close dropdown when a link is clicked
          >
            Home
          </Link>
          <Link
            className="block text-xl hover:text-gray-600"
            to={"/features"}
            onClick={() => setIsOpen(false)} // Close dropdown when a link is clicked
          >
            Features
          </Link>
          <Link
            className="block text-xl hover:text-gray-600"
            to={"/community"}
            onClick={() => setIsOpen(false)} // Close dropdown when a link is clicked
          >
            Community
          </Link>
          <Link
            className="block text-xl hover:text-gray-600"
            to={"/about"}
            onClick={() => setIsOpen(false)} // Close dropdown when a link is clicked
          >
            About
          </Link>
          <Link
            className="block text-xl hover:text-gray-600"
            to={"/contact"}
            onClick={() => setIsOpen(false)} // Close dropdown when a link is clicked
          >
            Contact
          </Link>
          <Link
            className="bg-blue-100 text-blue-900 px-4 py-2 rounded hover:bg-blue-600 hover:text-blue-100"
            to={"/login"}
            onClick={() => setIsOpen(false)} // Close dropdown when a link is clicked
          >
            Login
          </Link>
          <Link
            className="bg-blue-900 text-blue-100 px-4 py-2 rounded hover:bg-blue-100 hover:text-blue-600"
            to={"/register"}
            onClick={() => setIsOpen(false)} 
          >
            Register
          </Link>
        </div>
      </div>
      
      {/* Main Content: Prevent page scrolling when the dropdown is open */}
      <div className={`mt-16 ${isOpen ? "overflow-hidden" : ""}`}>
        {/* Other content here */}
      </div>
    </div>
  );
}

export default Navbar;






// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   // Toggle menu visibility (hamburger / cross)
//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   // Handle scroll event to change navbar size
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50 && !isScrolled) {
//         setIsScrolled(true); // Navbar should expand on scroll
//       } else if (window.scrollY <= 50 && isScrolled) {
//         setIsScrolled(false); // Navbar returns to normal when scrolled back to the top
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     // Cleanup scroll event listener on component unmount
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [isScrolled]);

//   return (
//     <div>
//       {/* Navbar */}
//       <nav
//         className={`fixed top-0 left-0 w-full bg-green-500 text-white p-4 flex items-center justify-between space-x-6 z-40 transition-all duration-300 ${
//           isScrolled ? "h-20" : "h-16"
//         }`} // Dynamic height change on scroll
//       >
//         {/* Logo */}
//         <div className="flex items-center">
//           <img
//             src="/img/eco.png"
//             alt="EcoHero logo"
//             className="w-10 h-10 rounded"
//           />
//           <span className="ml-2 text-2xl font-bold text-gray-800">EcoHero</span>
//         </div>

//         {/* Desktop Navigation Links */}
//         <div className="hidden md:flex space-x-8 text-gray-800">
//           <Link
//             className="hover:text-gray-600 hover:underline transition-all duration-300 transform hover:scale-105"
//             to={"/"}
//           >
//             Home
//           </Link>
//           <Link
//             className="hover:text-gray-600 hover:underline transition-all duration-300 transform hover:scale-105"
//             to={"/features"}
//           >
//             Features
//           </Link>
//           <Link
//             className="hover:text-gray-600 hover:underline transition-all duration-300 transform hover:scale-105"
//             to={"/community"}
//           >
//             Community
//           </Link>
//           <Link
//             className="hover:text-gray-600 hover:underline transition-all duration-300 transform hover:scale-105"
//             to={"/about"}
//           >
//             About
//           </Link>
//           <Link
//             className="hover:text-gray-600 hover:underline transition-all duration-300 transform hover:scale-105"
//             to={"/contact"}
//           >
//             Contact
//           </Link>
//         </div>

//         {/* Desktop Login/Register Buttons */}
//         <div className="hidden md:flex items-center space-x-2">
//           <Link
//             className="bg-blue-100 text-blue-900 px-4 py-2 rounded hover:bg-blue-600 hover:text-blue-100 transition-all duration-300"
//             to={"/login"}
//           >
//             Login
//           </Link>
//           <Link
//             className="bg-blue-900 text-blue-100 px-4 py-2 rounded hover:bg-blue-100 hover:text-blue-600 transition-all duration-300"
//             to={"/register"}
//           >
//             Register
//           </Link>
//         </div>

//         {/* Toggle Menu Button for Mobile */}
//         <div className="md:hidden">
//           <button
//             onClick={toggleMenu}
//             className="text-gray-800 focus:outline-none"
//             aria-label="Toggle Menu"
//           >
//             {/* Show Hamburger or Cross Button based on isOpen state */}
//             {isOpen ? (
//               <i className="fas fa-times text-2xl"></i>
//             ) : (
//               <i className="fas fa-bars text-2xl"></i>
//             )}
//           </button>
//         </div>
//       </nav>

//       {/* Mobile Dropdown Menu (Full-screen) */}
//       <div
//         className={`mt-2 md:hidden ${isOpen ? "block" : "hidden"} fixed inset-0 bg-white z-50 overflow-auto transition-all duration-300 transform ${
//           isOpen ? "opacity-100" : "opacity-0"
//         }`} // Full-screen dropdown
//       >
//         {/* Logo and Close Button Container */}
//         <div className="w-full bg-green-500 text-white p-4 flex justify-between items-center">
//           {/* Logo */}
//           <div className="flex items-center">
//             <img
//               src="/img/eco.png"
//               alt="EcoHero logo"
//               className="w-10 h-10 rounded"
//             />
//             <span className="ml-2 text-2xl text-black font-bold">EcoHero</span>
//           </div>

//           {/* Close Button */}
//           <button
//             className="text-2xl text-black"
//             onClick={() => setIsOpen(false)}
//             aria-label="Close Menu"
//           >
//             <i className="fas fa-times"></i>
//           </button>
//         </div>

//         {/* Menu Content */}
//         <div className="flex flex-col items-center justify-center space-y-6 p-8 bg-white shadow-lg rounded-lg h-full w-full">
//           {/* Mobile Links */}
//           <Link
//             className="block text-xl hover:text-gray-600"
//             to={"/"}
//             onClick={() => setIsOpen(false)} // Close dropdown when a link is clicked
//           >
//             Home
//           </Link>
//           <Link
//             className="block text-xl hover:text-gray-600"
//             to={"/features"}
//             onClick={() => setIsOpen(false)} // Close dropdown when a link is clicked
//           >
//             Features
//           </Link>
//           <Link
//             className="block text-xl hover:text-gray-600"
//             to={"/community"}
//             onClick={() => setIsOpen(false)} // Close dropdown when a link is clicked
//           >
//             Community
//           </Link>
//           <Link
//             className="block text-xl hover:text-gray-600"
//             to={"/about"}
//             onClick={() => setIsOpen(false)} // Close dropdown when a link is clicked
//           >
//             About
//           </Link>
//           <Link
//             className="block text-xl hover:text-gray-600"
//             to={"/contact"}
//             onClick={() => setIsOpen(false)} // Close dropdown when a link is clicked
//           >
//             Contact
//           </Link>
//           <Link
//             className="bg-blue-100 text-blue-900 px-4 py-2 rounded hover:bg-blue-600 hover:text-blue-100"
//             to={"/login"}
//             onClick={() => setIsOpen(false)} // Close dropdown when a link is clicked
//           >
//             Login
//           </Link>
//           <Link
//             className="bg-blue-900 text-blue-100 px-4 py-2 rounded hover:bg-blue-100 hover:text-blue-600"
//             to={"/register"}
//             onClick={() => setIsOpen(false)} // Close dropdown when a link is clicked
//           >
//             Register
//           </Link>
//         </div>
//       </div>

     
//     </div>
//   );
// }

// export default Navbar;
