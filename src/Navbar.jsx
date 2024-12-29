import React,{useState} from "react";
import { Link } from "react-router-dom";

function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

            const toggleMenu = () => {
                setIsOpen(!isOpen);
            };

  return (
    <div>
      <div>
        <header className="bg-green-500 text-white p-6 text-center">
          <h1 className="text-3xl font-bold">EcoTrack Adventures</h1>
          <p className="mt-2">
            Track, Learn, and Earn Rewards for Saving the Planet
          </p>
        </header>

        </div>

     <nav className="bg-slate-300 text-white p-4 flex items-center justify-between space-x-6">

              <div className="flex items-center">
                        <img src="/img/eco.png" alt="EcoHero logo" className="w-10 h-10 rounded" />
                        <span className="ml-2 text-2xl font-bold text-gray-800">EcoHero</span>
              </div>

        <div className="hidden md:flex space-x-8 text-gray-800">
         
          <Link className="hover:text-gray-600  hover:underline" to={"/"}>Home</Link>
          <Link className="hover:text-gray-600  hover:underline" to={"/features"}>Features</Link>
          <Link className="hover:text-gray-600  hover:underline" to={"/community"}>Community</Link>
          <Link className="hover:text-gray-600 hover:underline" to={"/about"}>About</Link>
          <Link className="hover:text-gray-600 hover:underline" to={"/contact"}>Contact</Link>
        </div>
        <div className="hidden md:flex items-center space-x-2">
                <Link className="bg-blue-100 text-blue-900 px-4 py-2 rounded  hover:bg-blue-600 hover:text-blue-100" to={"/login"}>Login</Link>
                <Link className="bg-blue-900 text-blue-100 px-4 py-2 rounded  hover:bg-blue-100 hover:text-blue-600" to={"/register"}>Register</Link>
                            
        </div>

        <div className="md:hidden">
                            <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
                                <i className="fas fa-bars"></i>
                            </button>
        </div>

        </nav>

                   <div className={`mt-2  md:hidden ${isOpen ? 'block animate-slide-down' : 'hidden'}`}>
                   <div className="flex flex-col items-center space-y-3 h-[300px] p-4">
                    <Link className="block hover:text-gray-600" to={"/"}>Home</Link>
                    <Link className="block hover:text-gray-600" to={"/features"}>Features</Link>
                    <Link className="block hover:text-gray-600" to={"/community"}>Community</Link>
                    <Link className="block hover:text-gray-600" to={"/about"}>About</Link>
                    <Link className="block hover:text-gray-600" to={"/contact"}>Contact</Link>
                    <Link className="bg-blue-100 text-blue-900 px-4 py-2 rounded  hover:bg-blue-600 hover:text-blue-100" to={"/login"}>Login</Link>
                    <Link className="bg-blue-900 text-blue-100 px-4 py-2 rounded  hover:bg-blue-100 hover:text-blue-600" to={"/register"}>Register</Link>
                    </div>
                    </div>
   
      </div>
    

    
  );
}

export default Navbar;
