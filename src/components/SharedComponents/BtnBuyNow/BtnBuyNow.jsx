import { motion } from 'framer-motion';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { CHECKOUT_DETAILS } from 'config/urlPaths';
import { addToBuyNowAsync } from 'redux/user/user.slice.actions';

export function BtnBuyNow({ productID }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function checkBuyNowClicked(){
    
  };

  async function handleClick(e) {
    e.preventDefault();
    await dispatch(addToBuyNowAsync({ productID }));
    console.log("Buy now!");
    navigate(CHECKOUT_DETAILS);
  }
  return (
    <motion.button
      initial={{ opacity: 0.8 }}
      whileTap={{ scale: 0.9 }}
      className='bg-yellow-500 text-neutral-50 px-2 py-1.5 flex gap-1 '
      onClick={handleClick}
    >
      <span className='font-semibold tracking-wide'>BUY NOW</span>
    </motion.button>
  );

}
