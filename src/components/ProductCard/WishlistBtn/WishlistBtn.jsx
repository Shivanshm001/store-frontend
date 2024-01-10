import React from 'react';
import { BiHeart } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { addToWishlist, removeFromWishlist } from '../../../redux/user/user.slice';
import { motion } from 'framer-motion';


export function WishlistBtn({ productID, isSaved }) {
  const dispatch = useDispatch();

  async function handleClick(e) {
    e.preventDefault();
    if (isSaved) {
      dispatch(removeFromWishlist({ productID }));
    }
    else {
      dispatch(addToWishlist({ productID }));
    };
  }
  return (
    <button className='bg-white px-2 py-1.5 opacity-80'
      title='Add to Wishlist'
      onClick={handleClick}>
      <BiHeart id='icon' className={'text-2xl font-mono font-extralight'} />
    </button>
  );
}
