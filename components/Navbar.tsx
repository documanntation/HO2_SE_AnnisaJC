import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center bg-blue-900 p-4">
      <div className="text-white text-2xl font-roboto">
        Eng<span className="text-blue-300">Lez!</span>
      </div>
      <div className="flex space-x-4 text-white text-lg font-roboto">
        <a href="#">Home</a>
        <a href="#about-us">About</a>
        <div className="relative group">
          <button className="dropbtn bg-blue-900 text-white py-2 px-4">
            Courses List
          </button>
          <div className="dropdown-content hidden group-hover:block absolute bg-white text-black mt-2 rounded shadow-lg">
            <a href="#" className="block px-4 py-2">
              Basic Grammar
            </a>
            <a href="#" className="block px-4 py-2">
              Daily Conversation
            </a>
            <a href="#" className="block px-4 py-2">
              TOEFL Preparation
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
