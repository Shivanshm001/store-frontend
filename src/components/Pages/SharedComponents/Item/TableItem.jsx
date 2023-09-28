import React, { useState } from 'react'

export function TableItem({ image, name, price, total }) {
    const [quantity, setQuantity] = useState(1);
    return (
        <>
            <tr className='text-center'>
                <td>
                    <img src={image} alt={name}
                    />
                </td>
                <td>
                    <h5>{name}</h5>
                </td>
                <td>
                    <p>{price}</p>
                </td>
                <td>
                    <div>
                        <div>
                            <button onClick={() => { setQuantity(prev => prev - 1) }}>-</button>
                            <input type="text" value={quantity} min={0}/>
                            <button onClick={() => { setQuantity(prev => prev + 1) }}>+</button>
                        </div>
                    </div>
                </td>
                <td>
                    <p>{price * quantity}</p>
                </td>
                <td></td>
            </tr>
        </>
    )
}
