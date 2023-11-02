import React, { useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

export function CartItem({ image, name, price, productId }) {
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

            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className=''>
                    <img className="p-8 rounded-t-lg min-w-[300px] object-cover" src={image} alt={name} />
                </div>
                <div className="px-5 pb-5">
                    <div >
                        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                    </div>
                    <div className='my-4'>
                        <div className=" font-semibold tracking-tight text-gray-800 dark:text-white">
                            <p className='flex gap-4 items-center py-2 px-4'>
                                <span>Quantity</span>
                                <span>:</span>
                                <span>{quantity}</span>
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                        <span className="text-3xl font-bold text-gray-900 dark:text-white">${price}</span>
                        <btn className="text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium text-sm px-5 py-2.5 text-center dark:bg-yellow-500 dark:hover:bg-yellow-400 dark:focus:ring-blue-800">Remove</btn>
                    </div>
                </div>

            </div>

        </>
    );
}
