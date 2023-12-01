import React, { useEffect } from 'react';
import { LiaShoppingBagSolid } from 'react-icons/lia';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/user/user.slice';

export function AddToCartBtn({ productID }) {
    const dispatch = useDispatch();
    const { cart } = useSelector(store => store.user);

    useEffect(() => {
        console.log("Cart items", cart);
    }, [cart]);
    return (
        <>
            <button
                // onClick={() => dispatch(addToCart({ productID }))} 
                className='bg-yellow-400 px-2 py-1.5'>
                <LiaShoppingBagSolid className='text-2xl font-mono font-extralight bg-transparent' />
            </button>
        </>
    );
}
