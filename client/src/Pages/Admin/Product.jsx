import React, { useEffect, useState } from 'react'
import AdminMenu from '../../components/Layout/AdminMenu'
import axios from 'axios';
import {Select}from 'antd'
import { useNavigate } from 'react-router';
const {Option}=Select
const BACKEND_URL = "http://localhost:8085";

export default function Product() {
    const [categories,setCategories]=useState([])
    const [name,setName]=useState("")
    const [description ,setDescription]=useState("")
    const [price,setPrice]=useState("")
    const [category,setCategory]=useState("")
    const [quantity,setQuantity]=useState("")
    const [shipping,setShipping]=useState("")
    const [photo,setPhoto]=useState("")
const navigate = useNavigate()
    // const getAllCat = async () => {
    //     try {
    //         const data = await axios.get(`${BACKEND_URL}/api/v1/category/all`);
    //         if (data?.sucess) {
    //             setCategories(data.category);
    //         }
    //     } catch (error) {
    //         console.error("Error fetching categories:", error);
    //         // Handle error: display error message to the user
    //     }
    // };
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

const handleCreate=async(e)=>{
    e.preventDefault()
    try {
        const productData = new FormData()
        productData.append("name",name)
        productData.append("description",description)
        productData.append("price",price)
        productData.append("quantity",quantity)
        productData.append("photo",photo)
        productData.append("category",category)
        productData.append("shipping",shipping)
        const {data}=await axios.post(`${BACKEND_URL}/api/v1/product/create-product`,productData)
    
        if(data?.success){
            console.log("Creted Succesfully");
            navigate('/dashboard/admin/getproducts')
        }
        else{
            console.log();
        }
    } catch (error) {
        console.log(error);
    }

}
    
  return (
    <>
    <div className="flex min-h-[65vh] overflow-x-scroll overflow-y-scroll">
        <div className="min-w-[20vw] min-h-[65vh]">
            <AdminMenu />
        </div>
        <div className="mb-1 border  min-w-[60vw] ml-2 flex flex-col">
            {/* Select Category */}
            <Select
                className="w-full  mt-3 mb-5"
                placeholder="Select a category"
                size="large"
                showSearch
                onChange={(value) => setCategory(value)}
            >
                {categories?.map(c => (
                    <Option key={c._id} value={c._id}>{c.name}</Option>
                ))}
            </Select>

            {/* Upload Photo */}
            <div className=" rounded-lg  mx-5 ">
                <label className="border border-gray-600 p-3 bg-green-500 rounded-lg flex items-center justify-center">
                    {photo ? photo.name : "Upload Photo"}
                    <input
                        type="file"
                        name="photo"
                        accept="image/*"
                        onChange={(e) => setPhoto(e.target.files[0])}
                        className="hidden"
                    />
                </label>
            </div>

            {/* Display Uploaded Photo and Product Details */}
            <div className="flex flex-col items-center mt-5">
                {photo && (
                    <div className="mb-3">
                        <img
                            src={URL.createObjectURL(photo)}
                            alt="product"
                            height={'200px'}
                            className="h-[100px] rounded-lg"
                        />
                    </div>
                )}
                <div className="mb-3">
                    <input
                        type="text"
                        value={name}
                        placeholder="Product Name"
                        onChange={(e) => setName(e.target.value)}
                        className="w-full border border-gray-600  placeholder-black rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-300 mb-3"
                    />
                    <input
                        type="number"
                        value={price}
                        placeholder="Product Price"
                        onChange={(e) => setPrice(e.target.value)}
                        className="w-full border border-gray-600  placeholder-black rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-300 mb-3"
                    />
                    <input
                        type="number"
                        value={quantity}
                        placeholder="Product Quantity"
                        onChange={(e) => setQuantity(e.target.value)}
                        className="w-full border border-gray-600  placeholder-black rounded-md px-3 py-2  focus:outline-none focus:ring focus:border-blue-300 mb-3"
                    />
                    <textarea
                        value={description}
                        placeholder="Product Description"
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full border border-gray-600  placeholder-black rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-300 mb-3"
                    />
                    <Select
                        placeholder="Select Shipping"
                        size='large'
                        className='w-full border border-gray-600  placeholder-black rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-300'
                        onChange={(value) => { setShipping(value) }}
                    >
                        <Option value="0">No</Option>
                        <Option value="1">Yes</Option>
                    </Select>
                </div>
                <div className="mb-3">
                    <button className='border border-blue-500 px-10 py-3 font-semibold text-lg rounded-lg bg-blue-gray-400 ' onClick={handleCreate}>Create Product</button>
                </div>
            </div>
        </div>
    </div>
</>

  )
}
