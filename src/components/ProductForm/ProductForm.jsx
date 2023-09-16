import React, { useState } from 'react'
import { Input } from './Input/Input';
import { SelectInput } from './Input/SelectInput';

import { useDispatch} from 'react-redux';

import { addNewProduct } from '../../redux/products/productsSlice';
import { useNavigate } from 'react-router-dom';


export function ProductForm({ type }) {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [rating, setRating] = useState(1);
    const [price, setPrice] = useState(0);
    const [company, setCompany] = useState("");
    const [featured, setFeatured] = useState(false);


    function handleSubmit(e) {
        e.preventDefault();
        if (type === "add") {
            dispatch(addNewProduct({ name, category, rating, price, company, featured }));
        } else {

        }

        navigate("/");
    }

    return (

        <form autoComplete='off' className='bg-gradient-to-tr from-gray-200 via-gray-100 to-gray-100 rounded-lg shadow-md shadow-gray-400 md:max-w-fit md:min-w-[50%] md:max-h-fit md:min-h-[80%] flex flex-col justify-evenly gap-3 p-8' onSubmit={handleSubmit}>

            <div className='flex  justify-end items-center gap-x-4 w-full'>
                <Input type={"text"} name={"name"} value={name} onChange={(e) => setName(e.target.value)} placeholder={"Enter product name"} />
                <Input type={"text"} name={"company"} value={company} onChange={(e) => setCompany(e.target.value)} placeholder={"Enter company"} />
            </div>

            <div className='flex  justify-end items-center gap-x-4 w-full'>
                <Input type={"number"} name={"rating"} value={rating} onChange={(e) => setRating(e.target.value)} placeholder={"Enter product rating"} />

                <Input type={"number"} name={"price"} value={price} onChange={(e) => setPrice(e.target.value)} placeholder={"Enter product price"} />
            </div>

            <SelectInput value={category} onChange={(e) => setCategory(e.target.value)} />

            <Input type={"checkbox"} name={"featured"} label={"Featured"} value={featured} onChange={(e) => setFeatured(prev => !prev)} placeholder={"Featured"} />


            <button className='w-full bg-green-500 shadow shadow-gray-400 p-2 rounded text-lg font-semibold tracking-wide'>{type === "add" ? "ADD" : "UPDATE"}</button>
        </form>
    )
}
