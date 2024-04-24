// CardGrid component
import React, { useState, useEffect } from 'react';
import Card from './Card';
import axios from 'axios';
import {Checkbox} from'antd'

const BACKEND_URL = "http://localhost:8085";

const CardGrid = () => {
    const [catCount, setCatCount] = useState(3);
    const [products, setProducts] = useState([]);
    const [categories,setCategories]=useState([])
    const [checked,setChecked]=useState([])

const handleFilter=(value,id)=>{
  let all=[...checked]
  if(value){
    all.push(id)
  }
  else{
    all=all.filter(c=>c!==id)
  }
  setChecked(all)
}


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

    const incrementOne = () => {
        setCatCount(catCount + 6);
    };

    return (
      <>
     
      <div className=' text-center text-3xl font-semibold text-pretty'>All Products</div>
        <div className="flex mx-4">
            {/* Filters Section */}
            <div className="w-1/5  mr-4 mt-16 bg-red-100">
<div className="flex flex-col p-5" >

{categories?.map(c=>(
  <Checkbox key={c._id} onChange={(e)=>handleFilter(e.target.checked,c._id)} className='text-lg '>{c.name}</Checkbox>
))}
</div>
                
            </div>
            {/* Products Section */}
            <div className="1-w-1/12">
                <div className="overflow-scroll overflow-x-hidden bg-scroll card-grid flex rounded-t-xl  mt-16 flex-wrap flex-auto justify-around max-h-[748px] min-w-52 bg-green-700">
                    {products.slice(0, catCount).map((product) => (
                        <Card key={product._id} product={product} />
                    ))}
                </div>
                <div className='flex justify-center min-w-52 bg-green-800 mx-24 rounded-b-xl h-12 align-middle'>
                    <button className='text-white font-extrabold h-7 underline hover:text-blue-600' onClick={incrementOne}> Show More</button>
                </div>
            </div>
        </div>
        </>    );
};

export default CardGrid;
