import React, { useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { removeFromCart, removeFromWishlist } from '../../../redux/user/user.slice';

function RemoveProductBtn({ handleCloseButton, title }) {
    return <button
        onClick={handleCloseButton}
        title={title}
        className='absolute top-3 right-3 p-0.5 rounded hover:bg-gray-200 cursor-pointer'>
        <AiOutlineClose />
    </button>;
}

export function ProductCardRect({ imageUrl, name, price, productID, pageType }) {
    const dispatch = useDispatch();
    function handleCloseButton(e) {
        e.preventDefault();
        if (pageType === 'cart') dispatch(removeFromCart({ productID }));
        else if (pageType === 'wishlist') dispatch(removeFromWishlist({ productID }));
        else return;
    }

    return (
        <>
            <div className='flex gap-6 items-center max-h-[150px] bg-neutral-50 shadow shadow-gray-300 rounded px-4 py-2 overflow-hidden relative '>
               <RemoveProductBtn handleCloseButton={handleCloseButton} title={`Remove from ${pageType}`}/>
                <div className='block overflow-hidden border-r border-r-gray-400 pr-2'>
                    <img src={imageUrl} alt={name} width={"100px"} height={"100%"} className='filter saturate-50 aspect-[9/12] rounded' />
                </div>
                <div className='flex flex-col gap-2'>
                    <a href='#' className='text-2xl font-semibold border-b-2 border-b-transparent hover:border-b-blue-600 transition-all duration-100 '>{name}</a>
                    <p className=' text-sm stext-neutral-700'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, asperiores beatae </p>
                    <h2 className='text-xl font-semibold'>${price}</h2>
                </div>
               
            </div>
        </>
    );
}
