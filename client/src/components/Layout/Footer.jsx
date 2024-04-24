import React from 'react'
import { IoLocationOutline } from "react-icons/io5";

export default function Footer() {
  return (
   <>
   <div className='bg-black flex max-h-[25vh]  '>
   
   <div className='w-[30%]  bg-slate-50 h-36 rounded-[50%]' >
    
    <img src="logo.jpeg" alt="logo" className='h-full w-full object-contain  rounded-[50%]'  />
   </div>
   <div className='w-[60%]'>
    <div className='text-white text-center text-xl font-serif font-semibold hover:text-red-500'> All Rights Are Reserverd © VVT Solutions </div>
    <div className='text-white mt-5'>
      <span>🛍 Shop Address :   </span>
    
    </div>
   </div>
   </div>
   </>
  )
}
