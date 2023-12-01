import React from 'react';
import { BiHeart } from 'react-icons/bi';
export function AddToWishlistBtn() {
  return (
    <button className='bg-white px-2 py-1.5'>
      <BiHeart className='text-2xl font-mono font-extralight bg-transparent' />
    </button>
  );
}
