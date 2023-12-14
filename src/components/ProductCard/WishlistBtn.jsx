import React from 'react';
import { BiHeart } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { addToWishlist, removeFromWishlist } from '../../redux/user/user.slice';

export function WishlistBtn({ productID, isSaved }) {
  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();
    if (isSaved) dispatch(removeFromWishlist({ productID }));
    else dispatch(addToWishlist({ productID }));
  }
  return (
    <button className='bg-white px-2 py-1.5' onClick={handleClick}>
      <BiHeart className={'text-2xl font-mono font-extralight bg-transparent' + (isSaved && 'bg-red-500')} />
    </button>
  );
}
