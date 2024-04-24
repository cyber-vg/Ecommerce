import React, { useEffect, useState } from 'react'
import AdminMenu from '../../components/Layout/AdminMenu'
import axios from 'axios';
const BACKEND_URL = "http://localhost:8085";
export default function User() {
    const[user,setuser]=useState([])
    const getAllCat = async () => {
        try {
            const { data } = await axios.get(`${BACKEND_URL}/api/v1/auth/all`);
           setuser(data.users)
            
        } catch (error) {
            console.error("Error fetching categories:", error);
            // Handle error: display error message to the user
        }
    };

    useEffect(() => {
        getAllCat();
    }, []);
  return (
    <>
    <div className='flex min-h-[65vh] max-h-[65vh]  '>
<div className=' min-w-[20vw] min-h-[65vh] '>

    <AdminMenu/>

   </div>
<div className=' overflow-x-scroll overflow-y-scroll'>

   <div className="relative overflow-x-auto min-w-[65vw] align-middle">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 overflow-scroll" >
                            <thead className="text-base  uppercase bg-blue-gray-500 dark:bg-gray-700 dark:text-gray-400 text-black rounded-xl">
                                <tr>
                                    <th scope="col" className="px-4       py-3">
                                        Name
                                    </th>
                                    <th scope="col" className="px-4  py-3">
                                        Email
                                    </th>
                                    <th scope="col" className="px-4  py-3">
                                        Mobile No
                                    </th>
                                    <th scope="col" className="px-4  py-3">
                                    Address
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {user.map((c) => (
                                    <tr key={c._id} className="bg-white border-b h-16 text-black text-base font-semibold dark:bg-gray-800 dark:border-gray-700">
                                        <td className=' px-4  rounded-lg  bg-blue-gray-50 text-black  text-wrap'>{c.name}</td>
                                        <td className=' px-4  rounded-lg  bg-blue-gray-100 text-black  text-wrap'>{c.email}</td>
                                        <td className=' px-4  rounded-lg  bg-blue-gray-50 text-black  text-wrap'>{c.phone}</td>
                                        <td className=' px-4  rounded-lg  bg-blue-gray-100 text-black  text-wrap'>{c.address}</td>
                                   
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
   </div>
</div>
    </>
  )
}
