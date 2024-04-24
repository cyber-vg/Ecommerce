import React from 'react'
import { NavLink } from 'react-router-dom'

export default function UserMenu() {
  return (
    <>
   

<div className="w-60  min-h-[68vh]   m-2 text-sm font-medium text-gray-900 bg-yellow-100 border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
  <NavLink  to="/dashboard/user/profile"  className="block w-full  px-6 py-4 text-black border-b border-gray-200 hover:bg-gray-100  hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 rounded-t-lg cursor-pointer dark:bg-gray-800 dark:border-gray-600">
    Profile
  </NavLink >
  <NavLink  to="/dashboard/user/orders"  className="block w-full px-6 py-4 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
    Order
  </NavLink >
 
</div>

    </>
  )
}
