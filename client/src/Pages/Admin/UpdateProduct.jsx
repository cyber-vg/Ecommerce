import React, { useEffect, useState } from 'react'
import AdminMenu from '../../components/Layout/AdminMenu'
import axios from 'axios';
import { useParams,useNavigate } from 'react-router';
import {Select}from 'antd'
const {Option}=Select
const BACKEND_URL = "http://localhost:8085";

function UpdateProduct() {
    const [categories,setCategories]=useState([])
    const [name,setName]=useState("")
    const [description ,setDescription]=useState("")
    const [price,setPrice]=useState("")
    const [category,setCategory]=useState("")
    const [quantity,setQuantity]=useState("")
    const [shipping,setShipping]=useState("")
    const [photo,setPhoto]=useState("")
    const [id,setId]=useState("")
    const params=useParams()
    const navigate =useNavigate("")

    const handleDelete =async()=>{
try {
    let ans=window.prompt("Are you sure to delete product")
    if(!ans) return
    const {data}= await axios.delete(`${BACKEND_URL}/api/v1/product/product/${id}`)
    navigate('/dashboard/admin/getproducts')
} catch (error) {
    console.log(error);
}
    }
    
    //get single 


    const getSingleProduct=async()=>{
try {
    const {data}=await axios.get(`${BACKEND_URL}/api/v1/product/get-single/${params.id}`)
    console.log(data,params);
    setName(data.product.name)
    setDescription(data.product.description)
    setPrice(data.product.price)
    setQuantity(data.product.quantity)
    setShipping(data.product.shipping)
    setCategory(data.product.category._id)
    setId(data.product._id)
   
    
} catch (error) {
    console.log(error);
}
    }

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
            if (data?.sucess) {
                setCategories(data.category);
            }
        } catch (error) {
            console.error("Error fetching categories:", error);
            // Handle error: display error message to the user
        }
    };
    useEffect(() => {
        getSingleProduct();
        getAllCat();
    }, []);

const handleUpdate=async(e)=>{
    e.preventDefault()
    try {
        const productData = new FormData()
        productData.append("name",name)
        productData.append("description",description)
        productData.append("price",price)
        productData.append("quantity",quantity)
       photo && productData.append("photo",photo)
        productData.append("category",category)
        productData.append("shipping",shipping)
        const {data}=await axios.put(`${BACKEND_URL}/api/v1/product/update-product/${id}`,productData)
        if(data?.success){
            console.log("Update Succesfully");
            navigate('/dashboard/admin/getproducts')
        }
        else{
            console.log(data?.msg);
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
    <h1 className=' text-2xl ml-10  font-extrabold underline' >Update Product Details</h1>
            {/* Select Category */}
            <Select
                className="w-full  mt-3 mb-5"
                placeholder="Select a category"
                size="large"
                showSearch
                onChange={(value) => setCategory(value)}
                value={category}
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
                        className='hidden'
                    />
                </label>
            </div>

            {/* Display Uploaded Photo and Product Details */}
            <div className="flex flex-col items-center mt-5">
                {photo ? (
                    <div className="mb-3">
                        <img
                            src={URL.createObjectURL(photo)}
                            alt="product"
                            height={'200px'}
                            className="h-[100px] rounded-lg"
                        />
                    </div>
                ):( <div className="mb-3">
                <img
                    src={`${BACKEND_URL}/api/v1/product/get-photo/${id}`}
                    alt="product"
                    height={'200px'}
                    className="h-[100px] rounded-lg"
                />
            </div>)}
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
                        value={shipping?"yes":"no"}
                    >
                        <Option value="0">No</Option>
                        <Option value="1">Yes</Option>
                    </Select>
                </div>
                <div className="mb-3 w-full bg-red-100 ">
                    <button className='border border-blue-500 px-10 py-3 font-semibold text-base rounded-lg bg-blue-gray-400 ' onClick={handleUpdate}>Update Product 🖊</button>
                    <button className='border border-blue-500  float-right px-10 py-3 font-semibold text-base  rounded-lg bg-red-400 ' onClick={handleDelete}>Delete Product 💀</button>
                
                </div>
            </div>
        </div>
    </div>
</>
  )
}

export default UpdateProduct