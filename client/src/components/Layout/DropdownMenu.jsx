import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function DropdownMenu() {
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
    toast.success("Logut Sucessfully")
}
  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        type="button"
        className="inline-flex text-black justify-center w-full  text-base bg-green-200 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        id="options-menu"
        aria-haspopup="true"
        aria-expanded="true"
      >
        Dropdown
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
            to={'/dashboard'}
            className="block px-4 py-2 text-base text-black hover:bg-gray-300"
            role="menuitem"
          >
            Dashboard
          </NavLink>
          <NavLink
            to={'#'}
            className="block px-4 py-2 text-base text-black hover:bg-gray-300"
            role="menuitem"
          >
            Settings
          </NavLink>
          <NavLink
            to={'#'}
            className="block px-4 py-2 text-base text-black hover:bg-gray-300"
            role="menuitem"
          >
            Earnings
          </NavLink>
        </div>
        <div className="border-t border-gray-100" />
        <div className="py-1" role="none">
          <NavLink
            to={'/login'} onClick={handleLogout}
            className="block px-4 py-2 text-base text-black hover:bg-gray-300"
            role="menuitem"
          >
            Sign out
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default DropdownMenu;
