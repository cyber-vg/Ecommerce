import React, { useEffect, useState } from 'react';
import AdminMenu from '../../components/Layout/AdminMenu';
import axios from 'axios';
import { Link } from 'react-router-dom';
const BACKEND_URL = "http://localhost:8085";

function Getproducts() {
    const [products, setProducts] = useState([]);

    const getProduct = async () => {
        try {
            const { data } = await axios.get(`${BACKEND_URL}/api/v1/product/get`);
            setProducts(data.products);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getProduct();
    }, []);

    return (
        <div className='flex min-h-[65vh]'>
            <div className='min-w-[20vw] min-h-[65vh]'>
                <AdminMenu />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-5">
                {products.map(p => (
                    <Link key={p._id} to={`/dashboard/admin/product/${p._id}`}>
                        <div className="max-w-xs rounded overflow-hidden shadow-lg bg-white">
                            <img src={`${BACKEND_URL}/api/v1/product/get-photo/${p._id}`} alt={p.name} className="w-full h-48 object-contain" />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">{p.name}</div>
                                <p className="text-gray-700 text-base">
                                    ₹ {p.price}
                                </p>
                                <p className="text-gray-700 text-base">
                                    Quantity: {p.quantity}
                                </p>
                            </div>
                            <div className="px-6 py-4">
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#{p.category.name}</span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Getproducts;
