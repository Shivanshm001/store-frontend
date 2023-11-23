import React, { useState } from 'react'
import { useSelector } from 'react-redux';
// import { ProductForm } from '../ProductForm/ProductForm'


export function AddProduct() {
const { isLoading } = useSelector(store => store.products);
const [name,setName] = useState('');
const [company, setCompany] = useState('');
const [category, setCategory] = useState('');
const [featured, setFeatured] = useState(false);
const [rating, setRating] = useState(0);
const [price, setPrice] = useState(500);
const [image, setImage] = useState('');

    return (
        <div>
            <form>
                <input type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)}/>
                <input type="text" placeholder='Category' value={category} onChange={(e) => setCategory(e.target.value)}/>
                <input type="text" placeholder='Company' value={company} onChange={(e) => setCompany(e.target.value)}/>
                <label htmlFor="featured">Featured</label>
                <input type="checkbox" placeholder='Featured' 
                id='featured'
                value={featured}
                checked={featured}
                onChange={(e) => setFeatured(prev => !prev)}/>
                

            </form>
        </div>
    )
}
