import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Rating } from './Rating/Rating';
import { BtnAddToCart } from '../../SharedComponents/BtnAddToCart/BtnAddToCart';
import { BtnAddToWishlist } from '../../SharedComponents/BtnAddToWishlist/BtnAddToWishlist';
import { FeaturedIcon } from '../../SharedComponents/FeaturedIcon/FeaturedIcon';


export function ProductDetails({ data }) {
    const [isSavedCart, setIsSavedCart] = useState(false);
    const [isSavedWishlist, setIsSavedWishlist] = useState(false);
    const { cart, wishlist } = useSelector(store => store.user);


    const {
        imageUrl,
        name,
        price,
        featured,
        company,
        rating,
        category,
        productID
    } = data;


    useEffect(() => {
        if (cart.includes(productID)) setIsSavedCart(true);
        else setIsSavedCart(false);
        if (wishlist.includes(productID)) setIsSavedWishlist(true);
        else setIsSavedWishlist(false);
    }, [cart, wishlist]);

    return (
        <div className='p-1 my-1 bg-gradient-to-r from-yellow-400 via-blue-400 to-yellow-300'>
            <div className='grid grid-cols-4  p-4 bg-neutral-50'>
                <div className='rounded overflow-hidden p-0.5 h-full col-span-1'>
                    <img src={imageUrl} alt={name} loading="lazy" className="aspect-[9/12] object-center object-cover max-w-[300px] w-[300px] m-auto shadow-md shadow-gray-400 rounded" />
                </div>
                <div className='flex flex-col col-span-1 gap-4 p-6 border bg-gray-300 rounded text-neutral-800 '>
                    <div>
                        {
                            featured && <FeaturedIcon animate={true} />
                        }
                    </div>
                    <div className='flex flex-col gap-1 border-b border-neutral-600 w-fit pb-2'>
                        <h1 className='text-4xl font-extralight tracking-wide '>{name}</h1>
                        <h2 className='font-semibold text-neutral-600 tracking-wide'>Brand : {company}</h2>
                    </div>

                    <div className='border-b border-b-gray-400 pb-4 w-fit'>
                        <Rating rating={rating} />
                    </div>

                    <p className='relative border-b border-b-gray-400 w-fit'>
                        <span className=' text-neutral-600 absolute top-0'>$</span>
                        <span className='px-3 text-3xl'>{price}</span>
                    </p>
                    <>
                        <div className='w-fit flex gap-2 flex-col'>

                            <BtnAddToCart productID={productID} isSaved={isSavedCart} text={"ADD TO CART"} />

                            <BtnAddToWishlist productID={productID} isSaved={isSavedWishlist} text={"ADD TO WISHLIST"} />
                        </div>
                    </>
                </div>
            </div>
        </div>
    );
}