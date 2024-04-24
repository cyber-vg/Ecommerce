import React, { useEffect, useState } from 'react';
import AdminMenu from '../../components/Layout/AdminMenu.jsx';
import axios from 'axios';
import CategoryForm from '../../components/Form/CategoryForm.jsx';
import {Modal} from 'antd'

const BACKEND_URL = "http://localhost:8085";

export default function Category() {
    const [categories, setCategories] = useState([]);
    const [name, setName] = useState("");
    const [visible,setVisible]=useState(false)
    const [selected,setSelected]=useState(null)
    const [updatename,setUpdatename]=useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post(`${BACKEND_URL}/api/v1/category/create-category`, { name });
           console.log(data);
            if (data.sucess) {
                console.log("Category created successfully");
                // Clear the form input after successful submission
                setName("");
                // Fetch the updated list of categories
                getAllCat();
            }
            else{
                console.log(data.msg);
            }
        } catch (error) {
            console.error("Error creating category:", error);
            // Handle error: display error message to the user
        }
    };

    const getAllCat = async () => {
        try {
            const { data } = await axios.get(`${BACKEND_URL}/api/v1/category/all`);
            if (data) {
                setCategories(data.category);
            }
        } catch (error) {
            console.error("Error fetching categories:", error);
            // Handle error: display error message to the user
        }
    };

    useEffect(() => {
        getAllCat();
    }, []);

const handleupdate=async(e)=>{
e.preventDefault()
try {
    const { data } = await axios.put(`${BACKEND_URL}/api/v1/category/update-category/${selected._id}`,{name:updatename});
    if(data.sucess){
        console.log(data.msg);
        setSelected(null)
        setUpdatename("")
        setVisible(false);
        getAllCat();
    }
} catch (error) {
    console.log(error);
}
}
const handledelete=async(pId)=>{
    
    try {
        const { data } = await axios.delete(`${BACKEND_URL}/api/v1/category/delcategory/${pId}`);
        if(data.sucess){
            console.log(data.msg);
            
            getAllCat();
        }
    } catch (error) {
        console.log(error);
    }
    }

    return (
        <>
            <div className='flex min-h-[65vh] '>
                <div className=' min-w-[20vw] min-h-[65vh] '>
                    <AdminMenu />
                </div>
                <div>
                    <div>
                        <CategoryForm handleSubmit={handleSubmit} value={name} setValue={setName} />
                    </div>
                    <div className="relative overflow-x-auto min-w-[65vw] align-middle">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 overflow-scroll" >
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Slug
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Edit
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Delete
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {categories.map((c) => (
                                    <tr key={c._id} className="bg-white border-b h-16 text-black text-base font-semibold dark:bg-gray-800 dark:border-gray-700">
                                        <td>{c.name}</td>
                                        <td>{c.slug}</td>
                                        <td><button className='p-3 text-black bg-blue-400 rounded-xl' onClick={()=>{setVisible(true);setUpdatename(c.name);setSelected(c)}} >Edit 🖊</button></td>
                                        <td><button className='p-3 text-black bg-red-400 rounded-xl' onClick={()=>{handledelete(c._id)}} >Delete ♻</button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <Modal onCancel={()=>setVisible(false)}footer={null} open={visible} >
                    <CategoryForm value={updatename} setValue={setUpdatename } handleSubmit={handleupdate}/>
                     </Modal>
            </div>
        </>
    );
}
