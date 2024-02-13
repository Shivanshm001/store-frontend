import React, { useDeferredValue, useEffect, useState } from 'react';
import { ProductCardRect } from '../SharedComponents/ProductCardRect/ProductCardRect';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getProductByID } from '../../../api/productApi/productApiControllers';
import { removeFromWishlist, setWishlistItemsRedux } from '../../../redux/user/user.slice';
import { useLocalStorage } from '../../../hooks/useLocalStorage';
import { LoadingRing } from '../../SharedComponents/LoadingRing/LoadingRing';
import { useScrollIntoView } from '../../../hooks/useScrollIntoView';
import { EmptyIcon } from '../../SharedComponents/EmptyIcon/EmptyIcon';


export function Wishlist() {
  const dispatch = useDispatch();
  const [wishlistRef, scrollIntoView] = useScrollIntoView();
  const [wishlistItems, setWishlistItems] = useState([]);
  const [loadingItems, setLoadingItems] = useState(false);
  const wishlist = useSelector(store => store.user.wishlist);
  const [subTotal, setSubTotal] = useState(0);
  const [total, setTotal] = useState(0);
  const deferredWishlistItems = useDeferredValue(wishlistItems);
  
  
  useEffect(() => {
    async function fetchWishlistItems() {
      setLoadingItems(true);
      const items = await Promise.all(wishlist.map(async productID => {
        const { product } = await getProductByID(productID);
        return product;
      }));
      setWishlistItems(items.filter(Boolean));
      setLoadingItems(false);

      let totalPrice = 0;
      for (const item of items) {
        totalPrice += item.price;
      }
      setTotal(totalPrice);
      setSubTotal(totalPrice);
    };
    fetchWishlistItems();
  }, [wishlist]);


  useEffect(() => {
    if (!wishlist || !wishlistItems) {
      setTimeout(() => {
        setLoadingItems(false);
      }, 3000);
    }
  }, [wishlist, wishlistItems]);
  useEffect(() => {
    dispatch(setWishlistItemsRedux({ wishlistItems }));
  }, [wishlistItems]);

  useEffect(() => { scrollIntoView(); }, []);
  return (
    <>
      <section ref={wishlistRef} className='relative grid grid-cols-2 gap-10 p-4 bg-gray-200 min-h-screen'>
        {deferredWishlistItems.length > 0
          ? deferredWishlistItems.map(product =>
            <ProductCardRect pageType={"wishlist"} {...product} key={product.productID} handleRemove={() => dispatch(removeFromWishlist({ productID: product.productID }))} />)
          : loadingItems
            ? <div className='absolute top-1/2 right-1/2'><LoadingRing /></div>
            : <EmptyIcon context={"wishlist"} />
        }
      </section>
      
      { /*<section className='flex justify-center items-center mt-4 mx-4 p-4 border-t border-t-gray-300'>
        {
          deferredWishlistItems.length > 0 &&
          <div className='w-1/2 flex flex-col bg-gray-200'>
            <div className='flex justify-between text-lg tracking-wider p-4 border-b border-b-gray-300'>
              <h1>Subtotal : </h1>
              <h1 className='font-bold'>${subTotal}</h1>
            </div>
            <div className='flex justify-between text-lg tracking-wider p-4 border-b border-b-gray-300'>
              <h1 className='font-bold'>Total : </h1>
              <h1>${total}</h1>
            </div>
            <Link to={"/checkout"} className='text-center text-neutral-200 bg-gray-950 p-4 tracking-wide hover:font-semibold transition-all ease-linear duration-75'>PROCEED TO PAYMENT</Link>
          </div>
        }
      </section> */}
    </>
  );
}
