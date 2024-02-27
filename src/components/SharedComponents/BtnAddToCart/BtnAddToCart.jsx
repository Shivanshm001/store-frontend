import React, { useEffect, useState } from 'react';
import { BsCartCheck, BsCartPlus } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { addToCartAsync, removeFromCartAsync } from '../../../redux/user/user.slice.actions';

import { motion } from 'framer-motion';

function MotionIcon({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className='flex gap-1'
    >
      <span>{children}</span>
    </motion.div>
  );
}

export function BtnAddToCart({ productID, showText }) {
  const dispatch = useDispatch();
  const [productInCart, setProductInCart] = useState(false);
  const {cartProductsId} = useSelector(store => store.user);

  function checkProductInCart(productID) {
    const inCart = Array.isArray(cartProductsId) && cartProductsId.indexOf(productID) !== -1;
    setProductInCart(inCart);
  }

  useEffect(() => {
    checkProductInCart(productID);
  }, [cartProductsId]);

  async function handleClick(e) {
    e.preventDefault();
    if (productInCart) {
      await dispatch(removeFromCartAsync({ productID }));
    } else {
      await dispatch(addToCartAsync({ productID }));
    }
  }
  return (
    <motion.button
      initial={{ opacity: 0.8 }}
      whileHover={{ scale: showText ? 1 : 1.1 }}
      whileTap={{ scale: 0.9 }}
      className='bg-white px-2 py-1.5 rounded-sm flex gap-1 '
      onClick={handleClick}
    >
      {productInCart ? (
        <MotionIcon key={"cartCheck"} >
          <BsCartCheck className={'text-2xl font-mono font-extralight bg-transparent textgreen'} color='rgb(34, 197, 94)' />
        </MotionIcon>
      ) : (
        <MotionIcon key={"cartPlus"}>
          <BsCartPlus className={'text-2xl font-mono font-extralight bg-transparent'} />
        </MotionIcon>
      )}

      <span className='font-semibold tracking-wide'>{showText &&
        (productInCart ? "ADDED TO CART" : "ADD TO CART")
      }</span>
    </motion.button>
  );

}
