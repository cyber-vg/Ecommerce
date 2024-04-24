// Card component
import React from 'react';
import { useCart } from '../../context/cart';
import { Link, useNavigate } from 'react-router-dom';
const BACKEND_URL = "http://localhost:8085";

const Card = ({ product }) => {
  const { _id, name, price, quantity, category } = product;
const navigate=useNavigate()
const [cart,setCart]=useCart()
  return (
<>
      <div className="max-w-xs m-5 rounded overflow-hidden shadow-lg bg-white h-full border border-brown-500 shadow-deep-orange-300">
        <img src={`${BACKEND_URL}/api/v1/product/get-photo/${_id}`} alt={name} className="w-full h-48 object-cover " />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{name}</div>
          <p className="text-gray-700 text-base">₹ {price}</p>
          <p className="text-gray-700 text-base">Quantity: {quantity}</p>
        </div>
        <div className="px-6 py-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            #{category.name}
          </span>
        </div>
        <div className="px-6 py-2 flex justify-between">
          <button onClick={()=>{setCart([...cart,product]);
          localStorage.setItem("cart",JSON.stringify([...cart,product]))
          
          } }className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add to Cart{console.log(cart)}
          </button>
          <button onClick={()=>navigate(`/product/${_id}`)} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
            More Info
          </button>
        </div>
      </div>
      </>
  );
};

export default Card;
