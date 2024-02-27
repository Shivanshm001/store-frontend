import React, { useDeferredValue, useEffect, useState } from 'react';
import { ProductCardRect } from '../SharedComponents/ProductCardRect/ProductCardRect';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getProductByID } from '../../../api/productApi/productApiControllers';
import { useLocalStorage } from '../../../hooks/useLocalStorage';
import { LoadingRing } from '../../SharedComponents/LoadingRing/LoadingRing';
import { useScrollIntoView } from '../../../hooks/useScrollIntoView';
import { EmptyIcon } from '../../SharedComponents/EmptyIcon/EmptyIcon';
import { removeFromWishlistAsync } from '../../../redux/user/user.slice.actions';
import { setWishlistItemsRedux } from '../../../redux/user/user.slice';

export function Wishlist() {
  const dispatch = useDispatch();
  const [wishlistRef, scrollIntoView] = useScrollIntoView();
  const [wishlistItems, setWishlistItems] = useState([]);
  const [loadingItems, setLoadingItems] = useState(false);
  const { wishlistProductsId } = useSelector(store => store.user);
  const [subTotal, setSubTotal] = useState(0);
  const [total, setTotal] = useState(0);
  const deferredWishlistItems = useDeferredValue(wishlistItems);


  useEffect(() => {
    async function fetchWishlistItems() {
      setLoadingItems(true);
      const items = await Promise.all(wishlistProductsId.map(async productID => {
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
  }, [wishlistProductsId]);


  useEffect(() => {
    if (!wishlistProductsId || !wishlistItems) {
      setTimeout(() => {
        setLoadingItems(false);
      }, 3000);
    }
  }, [wishlistProductsId, wishlistItems]);

  useEffect(() => {
    dispatch(setWishlistItemsRedux({ wishlistItems }));
  }, [wishlistItems]);

  useEffect(() => { scrollIntoView(); }, []);
  return (
    <>
      <section ref={wishlistRef} className='relative grid grid-cols-2 gap-10 p-4 bg-gray-200 min-h-screen'>
        {deferredWishlistItems.length > 0
          ? deferredWishlistItems.map(product =>
            <ProductCardRect pageType={"wishlist"} {...product} key={product.productID} handleRemove={() => dispatch(removeFromWishlistAsync({ productID: product.productID }))} />)
          : loadingItems
            ? <div className='absolute top-1/2 right-1/2'><LoadingRing /></div>
            : <EmptyIcon context={"wishlist"} />
        }
      </section>

    </>
  );
}
