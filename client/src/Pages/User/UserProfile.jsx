import React from 'react'
import UserMenu from '../../components/Layout/UserMenu'
import { useAuth } from '../../context/auth'
import { NavLink } from 'react-router-dom';
export default function UserProfile() {
    const[auth]=useAuth()
    console.log(auth,"<<<<<<<<<<<>>>>>>>>>>>>>");
  return (
    <>
    <div className='flex min-h-[65vh] '>
<div className=' min-w-[20vw] min-h-[65vh] '>

    <UserMenu/>

   </div>
   <div className="w-full  p-4 justify-center align-middle min-w-[60vw] min-h-[75vh] bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
  <div className="flex items-center justify-between mb-4">
    <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">User Profile ( Hi {auth?.user?.userName} 😎)</h5>
    <NavLink href="#" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
      Edit
    </NavLink>
  </div>
  <div className="flow-root">
    <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
      <li className="py-3 sm:py-4">
        <div className="flex items-center">
          <div className="flex-shrink-0">
          </div>
          <div className="flex-1 min-w-0 ms-4">
            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
              Name:
            </p>
            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
              {auth?.user?.userName}
            </p>
          </div>
          
        </div>
      </li>
      <li className="py-3 sm:py-4">
        <div className="flex items-center ">
          <div className="flex-shrink-0">
          </div>
          <div className="flex-1 min-w-0 ms-4">
            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
            Email:
            </p>
            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
            {auth?.user?.email}
            </p>
          </div>
         
        </div>
      </li>
      <li className="py-3 sm:py-4">
        <div className="flex items-center">
          <div className="flex-shrink-0">
          </div>
          <div className="flex-1 min-w-0 ms-4">
            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
             Contact:
            </p>
            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
            {auth?.user?.phone}
            </p>
          </div>
          
        </div>
      </li>
      <li className="py-3 sm:py-4">
        <div className="flex items-center ">
          <div className="flex-shrink-0">
          </div>
          <div className="flex-1 min-w-0 ms-4">
            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
             Address:
            </p>
            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
            {auth?.user?.address}
            </p>
          </div>
          
        </div>
      </li>
     
    </ul>
  </div>
</div>
   </div>
   
    </>
  )
}
