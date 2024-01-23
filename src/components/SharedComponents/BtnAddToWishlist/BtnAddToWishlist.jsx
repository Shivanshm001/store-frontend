import React from 'react';
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { addToWishlist, removeFromWishlist } from '../../../redux/user/user.slice';
import { motion } from 'framer-motion';

function MotionIcon({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10, }}
      animate={{ opacity: 1, y: 0, }}
      exit={{ opacity: 0, y: -10 }}
    >
      {children}
    </motion.div>
  );
}


export function BtnAddToWishlist({ productID, isSaved, text }) {
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
    <motion.button className={' px-2 py-1.5 flex gap-1 rounded-sm '+`${text && 'bg-white'}`}
      initial={{ opacity: 0.8 }}
      whileHover={{ scale: text ? 1.05 : 1.2 }}
      whileTap={{ scale: 0.9 }}
      title='Add to Wishlist'
      onClick={handleClick}>
      {
        !isSaved ? (
          <MotionIcon key={"heart"}>
           <BsHeartFill id='icon' className={'text-xl text-white font-mono font-extralight'} color='rgb(250,250,250)' />
          </MotionIcon>)
          : (<MotionIcon key={"heartFill"}>
            <BsHeartFill id='icon' className={'text-xl text-white font-mono font-extralight'} color='rgb(239,68,68)' />
          </MotionIcon>)
      }

      <span className='font-semibold tracking-wide'>{text}</span>
    </motion.button>
  );
}
