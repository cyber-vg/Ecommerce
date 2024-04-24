import React, { useState } from "react";

const CategoriesDropdown = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="relative">
      <button
        className="px-4 py-2 bg-gray-200 text-gray-800 rounded focus:outline-none"
        onClick={toggleDropdown}
      >
        Categories 
      </button>
      {showDropdown && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-40">
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
          >
            Category 1
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
          >
            Category 2
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
          >
            Category 3
          </a>
          {/* Add more categories as needed */}
        </div>
      )}
    </div>
  );
};

export default CategoriesDropdown;
