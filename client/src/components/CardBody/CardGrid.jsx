// CardGrid component
import React, { useState, useEffect } from 'react';
import Card from './Card';
import axios from 'axios';
import { Checkbox, Radio } from 'antd';
import { Prices } from '../Prices';

const BACKEND_URL = "http://localhost:8085";

const CardGrid = () => {
    const [catCount, setCatCount] = useState(3);
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [checked, setChecked] = useState([]);
    const [radio, setRadio] = useState([]);

    const filterProduct = async () => {
        try {
            const { data } = await axios.post(`${BACKEND_URL}/api/v1/product/product-filters`, { checked, radio });
            setProducts(data?.product||[]);
        } catch (error) {
            console.log(error);
        }
    };

    const handleFilter = (value, id) => {
        let all = [...checked];
        if (value) {
            all.push(id);
        } else {
            all = all.filter(c => c !== id);
        }
        setChecked(all);
    };

    const getAllCat = async () => {
        try {
            const { data } = await axios.get(`${BACKEND_URL}/api/v1/category/all`);
            if (data) {
                setCategories(data.category);
            }
        } catch (error) {
            console.error("Error fetching categories:", error);
        }
    };

    useEffect(() => {
        if (!checked.length || !radio.length) getAllCat();
    }, [checked.length,radio.length]);

    useEffect(() => {
        if (checked.length || radio.length) filterProduct();
    }, [checked, radio]);

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
            <div className='text-center text-3xl font-semibold text-pretty'>All Products</div>
            <div className="flex mx-4">
                {/* Filters Section */}
                <div className="w-1/5 mr-4 mt-16 bg-red-100">
                    <div className='mt-5 text-xl text-center font-medium font-serif'>Filter By Category</div>
                    <div className="flex flex-col h-36 px-4 mb-10 overflow-y-scroll will-change-scroll">
                        {categories?.map(c => (
                            <Checkbox key={c._id} onChange={(e) => handleFilter(e.target.checked, c._id)} className='text-lg'>{c.name}</Checkbox>
                        ))}
                    </div>
                    <div className="flex flex-col h-36 overflow-y-scroll will-change-scroll">
                        <div className='mt-5 text-xl text-center font-medium font-serif'>Filter By Price</div>
                        <Radio.Group>
                            {Prices?.map(p => (
                                <div key={p._id} className='px-4 text-lg font-semibold'>
                                    <Radio onChange={e => setRadio(e.target.value)} value={p.array}>{p.name}</Radio>
                                </div>
                            ))}
                        </Radio.Group>
                    </div>
                    <div className='mt-8 text-center'><button className='bg-red-500 p-3 rounded-lg font-semibold' onClick={()=>window.location.reload()} >  Reset Filters</button></div>
                </div>
                {/* Products Section */}
                <div className="1-w-1/12">
                    <div className="overflow-scroll overflow-x-hidden bg-scroll card-grid flex rounded-t-xl mt-16 flex-wrap flex-auto justify-around max-h-[748px] min-w-52">
                        {products.slice(0, catCount).map(product => (
                            <Card key={product._id} product={product} />
                        ))}
                    </div>
                    <div className='flex justify-center min-w-52 mx-24 rounded-b-xl h-14 align-middle'>
                        <button className='text-black hover:text-red-500 bg-blue-500 mt-4 font-extrabold h-7 p-2 rounded-xl text-center' onClick={incrementOne}> Show More</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CardGrid;
