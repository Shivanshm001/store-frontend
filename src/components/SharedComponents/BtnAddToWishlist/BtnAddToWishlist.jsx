import React, { useEffect, useState } from 'react';
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { addToWishlistAsync, removeFromWishlistAsync } from '../../../redux/user/user.slice.actions';
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


export function BtnAddToWishlist({ productID, showText }) {
  const dispatch = useDispatch();
  const [productInWishlist, setProductInWishlist] = useState(false);
  const wishlist = useSelector(store => store.user.wishlist);

  function checkProductInWishlist(productID) {
    const inWishlist = Array.isArray(wishlist) && wishlist.includes(productID);
    setProductInWishlist(inWishlist);
  }

  useEffect(() => {
    checkProductInWishlist(productID);
  }, [wishlist]);


  async function handleClick(e) {
    e.preventDefault();
    if (productInWishlist) {
      await dispatch(removeFromWishlistAsync({ productID }));
    }
    else {
      await dispatch(addToWishlistAsync({ productID }));
    };
  }
  return (
    <motion.button className={' px-2 py-1.5 flex gap-1 rounded-sm ' + `${showText && 'bg-white'}`}
      initial={{ opacity: 0.8 }}
      whileHover={{ scale: showText ? 1.05 : 1.2 }}
      whileTap={{ scale: 0.9 }}
      title='Add to Wishlist'
      onClick={handleClick}>
      {
        !productInWishlist ? (
          <MotionIcon key={"heart"}>
            <BsHeartFill id='icon' className={'text-xl text-white font-mono font-extralight'} color='rgb(250,250,250)' />
          </MotionIcon>)
          : (<MotionIcon key={"heartFill"}>
            <BsHeartFill id='icon' className={'text-xl text-white font-mono font-extralight'} color='rgb(239,68,68)' />
          </MotionIcon>)
      }

      <span className='font-semibold tracking-wide'>{
        showText && (
          productInWishlist ? "ADDED TO WISHLIST" : "ADD TO WISHLIST"
        )
      }</span>
    </motion.button>
  );
}
