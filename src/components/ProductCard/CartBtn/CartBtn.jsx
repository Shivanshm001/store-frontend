import React from 'react';
import { BsCartCheck, BsCartPlus } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../../../redux/user/user.slice';

import { motion } from 'framer-motion';

function MotionIcon({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
    >
      {children}
    </motion.div>
  );
}

export function CartBtn({ productID, isSaved }) {
  const dispatch = useDispatch();
  const cart = useSelector((store) => store.user.cart);

  const handleClick = (e) => {
    e.preventDefault();
    if (isSaved) {
      dispatch(removeFromCart({ productID }));
    } else {
      dispatch(addToCart({ productID }));
    }
  };

  return (
    <motion.button
      initial={{ opacity: 0.8 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className='bg-white px-2 py-1.5 rounded-sm'
      onClick={handleClick}
    >
      {isSaved ? (
        <MotionIcon key={"cartCheck"}>
          <BsCartCheck className={'text-2xl font-mono font-extralight bg-transparent textgreen'} color='rgb(34, 197, 94)'/>
        </MotionIcon>
      ) : (
        <MotionIcon key={"cartPlus"}>
          <BsCartPlus className={'text-2xl font-mono font-extralight bg-transparent'} />
        </MotionIcon>
      )}
    </motion.button>
  );
  
}
