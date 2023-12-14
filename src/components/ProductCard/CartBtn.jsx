import React, { useEffect } from 'react';
import { LiaShoppingBagSolid } from 'react-icons/lia';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/user/user.slice';

export function CartBtn({ productID, isSaved }) {
    const dispatch = useDispatch();
    const { cart } = useSelector(store => store.user);

    useEffect(() => {
        console.log("Cart items", cart);
    }, [cart]);
    return (
        <>
            <button
                // onClick={() => dispatch(addToCart({ productID }))} 
                className={'px-2 py-1.5' + (!isSaved?'bg-yellow-400':'bg-blue-400') }>
                <LiaShoppingBagSolid className='text-2xl font-mono font-extralight bg-transparent' />
            </button>
        </>
    );
}
