import React, { useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { QuantityHandler } from './ProductCardRect/QuantityHandler/QuantityHandler';
import { useDispatch } from 'react-redux';
import { removeFromCart, removeFromWishlist } from '../../../redux/user/user.slice';


export function ProductCardRect({ image, name, price, productID, pageType }) {
    const dispatch = useDispatch();
    function handleCloseButton(e) {
        e.preventDefault();
        if (pageType === 'cart') dispatch(removeFromCart({ productID }));
        else if (pageType === 'saved') dispatch(removeFromWishlist({ productID }));
        else return;
    }

    return (
        <>
            <div className='flex gap-6 items-center bg-neutral-100 shadow shadow-gray-300 rounded p-2 overflow-hidden relative'>
                <button
                    onClick={handleCloseButton}
                    className='absolute top-3 right-3 p-0.5 rounded hover:bg-gray-200 cursor-pointer'>
                    <AiOutlineClose />
                </button>
                <div className='block rounded overflow-hidden'>
                    <img src={image} alt={name} width={"100px"} className='filter saturate-50' />
                </div>
                <div className='flex flex-col gap-2'>
                    <a href='#' className='text-2xl border-b-2 border-b-transparent hover:border-b-blue-600 transition-all duration-100 '>{name}</a>
                    <h2 className='text-xl font-semibold'>${price}</h2>
                </div>
                {
                    pageType === 'cart' && <QuantityHandler />
                }
            </div>
        </>
    );
}
