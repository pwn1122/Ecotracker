

// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   // Toggle menu visibility (hamburger / cross)
//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div>
//       <nav className="fixed top-0 left-0 w-full bg-green-500 text-white p-4 flex items-center justify-between space-x-6 z-30">
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
//           <button onClick={toggleMenu} className="text-gray-800 focus:outline-none" aria-label="Toggle Menu">
//             {/* Show Hamburger or Cross Button based on isOpen state */}
//             {isOpen ? (
//               <i className="fas fa-times text-2xl"></i>
//             ) : (
//               <i className="fas fa-bars text-2xl"></i>
//             )}
//           </button>
//         </div>
//       </nav>

//       {/* Dropdown Menu (Mobile) */}
//       <div
//         className={`mt-2 md:hidden ${isOpen ? "block animate-slide-down" : "hidden"}`}
//       >
//         <div className="flex flex-col items-center space-y-3 h-[300px] p-4 bg-white shadow-lg rounded-lg">
//           {/* Mobile Links */}
//           <Link className="block hover:text-gray-600" to={"/"}>
//             Home
//           </Link>
//           <Link className="block hover:text-gray-600" to={"/features"}>
//             Features
//           </Link>
//           <Link className="block hover:text-gray-600" to={"/community"}>
//             Community
//           </Link>
//           <Link className="block hover:text-gray-600" to={"/about"}>
//             About
//           </Link>
//           <Link className="block hover:text-gray-600" to={"/contact"}>
//             Contact
//           </Link>
//           <Link
//             className="bg-blue-100 text-blue-900 px-4 py-2 rounded hover:bg-blue-600 hover:text-blue-100"
//             to={"/login"}
//           >
//             Login
//           </Link>
//           <Link
//             className="bg-blue-900 text-blue-100 px-4 py-2 rounded hover:bg-blue-100 hover:text-blue-600"
//             to={"/register"}
//           >
//             Register
//           </Link>
//         </div>
//       </div>

//       {/* Add margin to content to avoid being covered by fixed navbar */}
//       <div className="mt-16">
//         {/* Other content here */}
//       </div>
//     </div>
//   );
// }

// export default Navbar;





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
          <button onClick={toggleMenu} className="text-gray-800 focus:outline-none" aria-label="Toggle Menu">
            {/* Show Hamburger or Cross Button based on isOpen state */}
            {isOpen ? (
              <i className="fas fa-times text-2xl"></i>
            ) : (
              <i className="fas fa-bars text-2xl"></i>
            )}
          </button>
        </div>
      </nav>

      {/* Dropdown Menu (Mobile) */}
      <div
        className={`mt-2 md:hidden ${isOpen ? "block animate-slide-down" : "hidden"}`}
      >
        <div className="flex flex-col items-center space-y-3 h-[300px] p-4 bg-white shadow-lg rounded-lg">
          {/* Mobile Links */}
          <Link className="block hover:text-gray-600" to={"/"}>
            Home
          </Link>
          <Link className="block hover:text-gray-600" to={"/features"}>
            Features
          </Link>
          <Link className="block hover:text-gray-600" to={"/community"}>
            Community
          </Link>
          <Link className="block hover:text-gray-600" to={"/about"}>
            About
          </Link>
          <Link className="block hover:text-gray-600" to={"/contact"}>
            Contact
          </Link>
          <Link
            className="bg-blue-100 text-blue-900 px-4 py-2 rounded hover:bg-blue-600 hover:text-blue-100"
            to={"/login"}
          >
            Login
          </Link>
          <Link
            className="bg-blue-900 text-blue-100 px-4 py-2 rounded hover:bg-blue-100 hover:text-blue-600"
            to={"/register"}
          >
            Register
          </Link>
        </div>
      </div>

      {/* Add margin to content to avoid being covered by fixed navbar */}
      <div className="mt-16">
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
//       if (window.scrollY > 50) {
//         setIsScrolled(true); // Navbar should expand on scroll
//       } else {
//         setIsScrolled(false); // Navbar returns to normal when scrolled back to the top
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     // Cleanup scroll event listener on component unmount
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []); // Empty dependency array to ensure it runs once on mount

//   return (
//     <div>
//       <nav
//         className={`fixed top-0 left-0 w-full bg-green-500 text-white p-4 flex items-center justify-between space-x-6 z-10 transition-all duration-300 ${
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
//           <button onClick={toggleMenu} className="text-gray-800 focus:outline-none" aria-label="Toggle Menu">
//             {/* Show Hamburger or Cross Button based on isOpen state */}
//             {isOpen ? (
//               <i className="fas fa-times text-2xl"></i>
//             ) : (
//               <i className="fas fa-bars text-2xl"></i>
//             )}
//           </button>
//         </div>
//       </nav>

//       {/* Dropdown Menu (Mobile) */}
//       <div
//         className={`${
//           isOpen ? "block" : "hidden"
//         } md:hidden transition-all transform ease-in-out duration-300 ${
//           isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
//         }`}
//       >
//         <div className="flex flex-col items-center space-y-3 p-4 bg-white shadow-lg rounded-lg">
//           {/* Mobile Links */}
//           <Link className="block hover:text-gray-600 py-2" to={"/"}>
//             Home
//           </Link>
//           <Link className="block hover:text-gray-600 py-2" to={"/features"}>
//             Features
//           </Link>
//           <Link className="block hover:text-gray-600 py-2" to={"/community"}>
//             Community
//           </Link>
//           <Link className="block hover:text-gray-600 py-2" to={"/about"}>
//             About
//           </Link>
//           <Link className="block hover:text-gray-600 py-2" to={"/contact"}>
//             Contact
//           </Link>
//           <Link
//             className="bg-blue-100 text-blue-900 px-4 py-2 rounded hover:bg-blue-600 hover:text-blue-100"
//             to={"/login"}
//           >
//             Login
//           </Link>
//           <Link
//             className="bg-blue-900 text-blue-100 px-4 py-2 rounded hover:bg-blue-100 hover:text-blue-600"
//             to={"/register"}
//           >
//             Register
//           </Link>
//         </div>
//       </div>

     
//     </div>
//   );
// }

// export default Navbar;




















