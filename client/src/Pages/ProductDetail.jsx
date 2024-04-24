import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const BACKEND_URL = "http://localhost:8085";

function ProductDetail() {
    const params = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const getProduct = async () => {
            try {
                const { data } = await axios.get(`${BACKEND_URL}/api/v1/product/get-single/${params.id}`);
                setProduct(data?.product);
                console.log(data?.product);
            } catch (error) {
                console.log(error);
            }
        };



        if (params.id) getProduct();
    }, [params.id]);

    return (
        <div className="container mx-auto mt-8 min-h-[65vh]">
            {product ? (
                <div className="flex">
                    <div className="w-1/2">
                        <img src={`${BACKEND_URL}/api/v1/product/get-photo/${product._id}`} alt={product.name} className="pl-36 h-[350px] w-[400px]  text-center " />
                    </div>
                    <div className=" pl-[50px] w-1/2 px-4">
                        <h2 className="text-3xl font-semibold">{product.name}</h2>
                        <p className="text-xl font-bold mb-4">Price: ₹{product.price}</p>
                        <p className="text-lg mb-4">Quantity: {product.quantity}</p>
                        <p className="text-lg mb-4">Shipping: {product.shipping ? "Available" : "Not Available"}</p>
                        <p className="text-lg mb-4">Category: {product.category.name} <span className='ml-4 text-gray-700 px-2 bg-blue-gray-200' >#{product.category.slug} </span></p>
                        <p className="text-lg text-gray-600 mb-4">Description:{product.description}</p>
                    <button className=' bg-blue-600 p-4 rounded-lg '>Add to Cart</button>
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default ProductDetail;
