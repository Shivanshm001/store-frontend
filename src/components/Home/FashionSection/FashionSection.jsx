import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Carousel } from '../Carousel/Carousel';
import static_boy from './images/static-boy.jpg';
import { getAllProducts, getProductOfCategory } from '../../../redux/products/productsSlice';

//Placeholder data retrive it from the backend later.
const fashionCardData = [
    {
        image: "https://picsum.photos/500/400",
        name: "Converse shoes",
        featured: true,
        price: 195
    },
    {
        image: "https://picsum.photos/500/400",
        name: "Jordan shoes",
        featured: true,
        price: 145
    },
    {
        image: "https://picsum.photos/500/400",
        name: "Puma shoes",
        featured: false,
        price: 175
    },
    {
        image: "https://picsum.photos/500/400",
        name: "Nike shoes",
        featured: true,
        price: 445
    },
]
export function FashionSection() {

    const dispatch = useDispatch();
    const { products } = useSelector(store => store.products);
    console.log("Products",products);
    useEffect(() => {
        dispatch(getProductOfCategory("fashion"));
    }, [])
    return (
        <div className='grid w-full  min-h-screen grid-cols-4'>
            <div className=' col-span-1 relative '>
                <img src={static_boy} alt="Static iamge" className='min-w-full max-w-full min-h-full object-cover shadow-inner shadow-black scale-90 filter contrast-75' />
                <div className='absolute top-[40%] w-full flex justify-center items-center text-center'>
                    <div className='flex w-full justify-center items-center gap-4 flex-col'>
                        <p className='font-semibold text-neutral-100 tracking-wider text-6xl'>Fashion</p>
                        <Link to={"/category/fashion"} className='text-white pb-2  text-2xl border-b-2 border-b-white hover:tracking-widest transition-all duration-150'>Discover More</Link>
                    </div>
                </div>
            </div>
            <div className='col-span-3 grid place-items-center'>
            {products && <Carousel data={products} />}
            </div>
        </div>
    )
}
