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
    <motion.button className='bg-white px-2 py-1.5'
      initial={{ opacity: 0.8 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      title='Add to Wishlist'
      onClick={handleClick}>
      {
        !isSaved ? (
          <MotionIcon key={"heart"}>
            <BsHeart id='icon' className={'text-xl font-mono font-extralight'} />
          </MotionIcon>)
          : (<MotionIcon key={"heartFill"}>
            <BsHeartFill id='icon' className={'text-xl font-mono font-extralight'} color='rgb(239 68 68)' />
          </MotionIcon>)

      }
    </motion.button>
  );
}
