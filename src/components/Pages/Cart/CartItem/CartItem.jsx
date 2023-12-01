import React, { useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

function QuantityHandlerButton({ onClick, disabled, icon }) {
    return (
        <button className='bg-yellow-400 px-2 py-0.5 disabled:bg-gray-400 font-bold' 
        onClick={onClick} disabled={disabled} >
            {icon}
        </button>
    );
}
export function CartItem({ image, name, price, productID }) {
    const [quantity, setQuantity] = useState(1);
    const [error, setError] = useState("");

    useEffect(() => {
        if (quantity < 1) {
            setError("Quantity cannot be less than 1.");
            setQuantity(1);
        }
    }, [quantity]);
    return (
        <>
            <div className='flex gap-6 items-center bg-neutral-100 shadow shadow-gray-300 rounded p-2 overflow-hidden relative'>
                <span className='absolute top-3 right-3 p-0.5 rounded hover:bg-gray-200 cursor-pointer'>
                    <AiOutlineClose />
                </span>
                <div className='block rounded overflow-hidden'>
                    <img src={image} alt={name} width={"100px"} className='filter saturate-50' />
                </div>
                <div className='flex flex-col gap-2'>
                    <a href='#' className='text-2xl border-b-2 border-b-transparent hover:border-b-blue-600 transition-all duration-100 '>{name}</a>
                    <h2>${price} X </h2>
                    <hr />
                    <h2 className='font-semibold'>${quantity * price}</h2>
                </div>
                <div className='flex flex-col justify-center items-center gap-2 absolute top-3 right-10'>
                    <QuantityHandlerButton disabled={quantity >= 5} icon={"+"}
                        onClick={() => setQuantity(prev => prev + 1)} />
                    <h2>{quantity}</h2>
                    <QuantityHandlerButton disabled={(quantity <= 1)} icon={"-"}
                        onClick={() => setQuantity(prev => prev - 1)} />

                </div>
            </div>
        </>
    );
}
