import React from 'react';
import { LiaShoppingBagSolid } from 'react-icons/lia';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../../redux/user/user.slice';

export function CartBtn({ productID, isSaved }) {
    const dispatch = useDispatch();
    const cart = useSelector(store => store.user.cart);
    function handleClick(e) {
        e.preventDefault();
        if (isSaved) dispatch(removeFromCart({ productID }));
        else dispatch(addToCart({ productID }));
    }
    return (
        <button className='bg-white px-2 py-1.5 opacity-80' onClick={handleClick}>
            <LiaShoppingBagSolid className={'text-2xl font-mono font-extralight bg-transparent' + (isSaved && 'bg-red-500')} />
        </button>
    );
}
