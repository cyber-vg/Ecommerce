import React from 'react'
import { useState } from 'react';
import { NavLink } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import { FaBell } from "react-icons/fa";
import { BsCart4 } from "react-icons/bs";
import { useAuth } from '../../context/auth';
import { useCart } from '../../context/cart';
import 'react-toastify/dist/ReactToastify.css';
import { Avatar, Badge} from 'antd'
import DropdownMenu from './DropdownMenu';
 function Header(){
  const[cart]=useCart()
    const [auth,setauth]=useAuth()
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
      };
      const handleLogout =()=>{
        setauth({
          user:null,
          token:"   "
        })
        
        localStorage.removeItem("auth")
       
    }
    return(
    <>
    <div className='flex bg-green-200'>
    <div className=" min-w-[20vw] items-center-10 pl-[20px]">
        <img src="/logo.jpeg" alt="Logo" className="h-12 mx-2 my-2 pr-5 rounded-3xl " />
       
      </div>
     <div className=' min-w-[79vw] bg-green-200'>
    <ul className='flex  justify-end'>
    <li className='m-4 hover:bg-gray-300'>
        <NavLink to={'/'} >Home</NavLink>
    </li>
    <li className='m-4 hover:bg-gray-300'>
        <NavLink to={'contact'} >Contact Us</NavLink>
    </li>
    <li className='m-4 hover:bg-gray-300'>
        <NavLink to={'about'} >About Us</NavLink>
    </li >
    <li className='m-4 '>
        
        {
  !localStorage.getItem('auth') ? (
    <li className='m-4'>
      <NavLink to={'login'}>Login</NavLink>
    </li>
  ) : (
    <div className="relative inline-block text-left z-20">
      <button
        onClick={toggleDropdown}
        type="button"
        className="inline-flex text-black justify-center w-full  text-base bg-green-200 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        id="options-menu"
        aria-haspopup="true"
        aria-expanded="true"
      >
        Hi.. {auth.user?.user?.userName || auth.user?.userName} 😊
        <svg
          className="-mr-1 ml-2 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M10 12a1 1 0 0 1-.707-.293l-4-4a1 1 0 1 1 1.414-1.414L10 9.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4A1 1 0 0 1 10 12z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none`}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu"
      >
        <div className="py-1" role="none">
          <NavLink
            to={`/dashboard/${auth?.user?.role ===1 ?"admin":"user"}`}
            className="block px-4 py-2 text-base text-black hover:bg-gray-300"
            role="menuitem"
          >
            Dashboard
          </NavLink>
          {/* <NavLink
            to={'#'}
            className="block px-4 py-2 text-base text-black hover:bg-gray-300"
            role="menuitem"
          >
            Settings
          </NavLink> */}
          {/* <NavLink
            to={'#'}
            className="block px-4 py-2 text-base text-black hover:bg-gray-300"
            role="menuitem"
          >
            Earnings
          </NavLink> */}
        </div>
        <div className="border-t border-gray-100" />
        <div className="py-1" role="none">
          <NavLink
            to={'/login'}
            onClick={handleLogout}
            className="block px-4 py-2 text-base text-black hover:bg-gray-300"
            role="menuitem"
          >
            Sign out
          </NavLink>
        </div>
      </div>
    </div>
  )
}
    </li>
    
    <li className='m-5 '>

<Badge count={cart?.length} showZero className='p-2'  > 
<NavLink to={'cart'} className=" flex" ><BsCart4 /></NavLink>

 </Badge>

        
        {console.log(cart)}
    </li>
    </ul>
</div>

<ToastContainer/>
</div>
</>
)
 }
export default Header;