import React, { useEffect, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai';

export function CartItem({ image, name, price, productId }) {
    const [quantity, setQuantity] = useState(1);
    const [error, setError] = useState("");

    useEffect(() => {
        if (quantity < 1) {
            setError("Quantity cannot be less than 1.");
            setQuantity(1);
        }
    }, [quantity])
    return (
        <>
            <tr className='text-center' id={productId}>
                <td>
                    <div className='flex justify-center items-center'>
                        <img src={image} alt={name} width={"170px"} />
                    </div>
                </td>
                <td>
                    <h5>{name}</h5>
                </td>
                <td>
                    <p>{price}</p>
                </td>
                <td>
                    <div className='grid place-items-center'>
                        <div className='flex gap-4 justify-center items-center border border-gray-400 py-2 px-4 max-w-min'>
                            <button 
                            className='font-bold text-lg'
                            onClick={() => { setQuantity(prev => prev - 1) }}>-</button>
                            <h5>{quantity}</h5>
                            <button 
                            className='font-bold text-lg'
                            onClick={() => { setQuantity(prev => prev + 1) }}>+</button>
                        </div>
                    </div>
                </td>
                <td>
                    <p>{price * quantity}</p>
                </td>
                <td>
                    <button className='' onClick={() => { }}>
                        <AiOutlineClose />
                    </button>
                </td>
            </tr>
        </>
    )
}
