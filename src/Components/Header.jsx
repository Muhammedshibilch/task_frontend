import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

  const Header = ({ user }) => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
  
    // Hide profile on login and register pages
    const hideProfile = location.pathname === "/" || location.pathname === "/register";
  
    console.log("User:", user);  // Log the user object
    console.log("Username:", user?.username); // Log the username to ensure it exists
  
    return (
      <header className="flex items-center justify-between p-4 bg-white relative">
        {/* Logo */}
        <div className="flex items-center ms-5">
          <img src={logo} alt="ASAP Logo" className="h-12" />
        </div>
  
        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
  
        {/* Navigation */}
        <nav className={`absolute md:relative left-0 w-full bg-white md:w-auto md:flex md:items-center transition-all duration-300 ease-in-out ${isOpen ? "top-full block" : "hidden"}`}>
          <ul className="flex flex-col md:flex-row md:items-center md:gap-6 space-y-4 md:space-y-0 text-gray-700 p-4 md:p-0 md:static md:bg-transparent shadow-md md:shadow-none">
            <li><a href="#" className="block py-2 hover:text-blue-500">Jobs</a></li>
            <li><a href="#" className="block py-2 hover:text-blue-500">Internship</a></li>
            <li><a href="#" className="block py-2 hover:text-blue-500">Job Fair</a></li>
            <li><a href="#" className="block py-2 hover:text-blue-500">Companies</a></li>
            <li><a href="#" className="block py-2 hover:text-blue-500">Support</a></li>
          </ul>
        </nav>
  
        {/* User Profile (Hide on Login & Register Pages) */}
        {!hideProfile && user && user.username && (
          <div className="hidden md:flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center text-white font-bold">
              {user.username[0].toUpperCase()}
            </div>
            <span className="text-gray-700">Hi, {user.username}</span>
          </div>
        )}
      </header>
    );
  };
  
  export default Header;
  