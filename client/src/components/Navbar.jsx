import React from 'react';
import { FaBell } from "react-icons/fa";
import { BsCart4 } from "react-icons/bs";
import CategoriesDropdown from './CategoriesDropdown';



const Navbar = () => {
  return (
    <nav className=" bg-green-100  py-2 flex justify-between items-center">
      {/* Logo on the left */}
      
      
      {/* Search bar in the middle */}
      <div className="flex justify-center  items-center flex-grow    ">
        {/* <CategoriesDropdown/> */}
        <input
          type="text"
          placeholder="Search..."
          className="  bg-green-200 text-xl p-2 text-black  px-8  placeholder-black rounded-xl w-[40%] focus:outline-white "
        />
      </div>
      
      {/* Notification icon and login button on the right */}
      {/* <div className="flex items-center mx-10">
      
        <div className="flex items-center">
            <div className=' mx-3'>

        <FaBell />
            </div>
            <div>

        <BsCart4 />
            </div>
      </div>    
      </div> */}
    </nav>
  );
};

export default Navbar;
