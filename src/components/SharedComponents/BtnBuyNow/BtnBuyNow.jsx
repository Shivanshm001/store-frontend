import { motion } from 'framer-motion';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { CHECKOUT_DETAILS } from '../../../config/urlPaths';
import { addToCartAsync } from '../../../redux/user/user.slice.actions';

export function BtnBuyNow({ productID, showText }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function handleClick(e) {
    e.preventDefault();
    await dispatch(addToCartAsync({ productID }));
    console.log("Buy now!")
    navigate(CHECKOUT_DETAILS);
  }
  return (
    <motion.button
      initial={{ opacity: 0.8 }}
      whileTap={{ scale: 0.9 }}
      className='bg-white px-2 py-1.5 flex gap-1 '
      onClick={handleClick}
    >
      <span className='font-semibold tracking-wide'>BUY NOW</span>
    </motion.button>
  );

}
