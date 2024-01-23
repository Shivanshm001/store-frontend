import React from 'react';
import { useDeferredValue, useEffect, useRef, useState, useLayoutEffect } from 'react';
import { ProductCardRect } from '../SharedComponents/ProductCardRect/ProductCardRect';
import { useDispatch, useSelector } from 'react-redux';
import { useScrollIntoView } from '../../../hooks/useScrollIntoView';
import { Link } from 'react-router-dom';
import { getProductByID } from '../../../api/productApi/productApiControllers';
import { setCartItemsRedux } from '../../../redux/user/user.slice';
import { LoadingRing } from '../../SharedComponents/LoadingRing/LoadingRing';

import { removeFromCart } from '../../../redux/user/user.slice';
import { motion, AnimatePresence, useIsPresent } from 'framer-motion';
import { parentVariants, childVariants } from './animationVariants';
import { EmptyIcon } from '../../SharedComponents/EmptyIcon/EmptyIcon';

export function Cart() {
    const dispatch = useDispatch();
    const [cartRef, scrollIntoView] = useScrollIntoView();
    const [cartItems, setCartItems] = useState([]);
    const [loadingItems, setLoadingItems] = useState(false);
    const { cart } = useSelector(store => store.user);
    const [subTotal, setSubTotal] = useState(0);
    const [total, setTotal] = useState(0);
    const deferredCartItems = useDeferredValue(cartItems);
    console.log(deferredCartItems);

    useLayoutEffect(() => {
        async function fetchCartItems() {
            setLoadingItems(true);
            const items = await Promise.all(cart.map(async productID => {
                const { product } = await getProductByID(productID);
                return product;
            }));
            setCartItems(items.filter(Boolean));
            setLoadingItems(false);
            let totalPrice = 0;
           
            setTotal(totalPrice);
            setSubTotal(totalPrice);
        };
        fetchCartItems();
    }, [cart]);

    useEffect(() => {
        scrollIntoView();
        if (!cart || !cartItems) {
            setTimeout(() => {
                setLoadingItems(false);
            }, 3000);
        }
    }, []);
    useLayoutEffect(() => {
        dispatch(setCartItemsRedux({ cartItems }));
    }, [cartItems]);

    return (
        <>
            <motion.section
                ref={cartRef}
                variants={parentVariants}
                initial="hidden"
                animate="visible"
                className='grid grid-cols-2 relative gap-10 p-4 bg-gray-200 min-h-screen'>
                <AnimatePresence>
                    {deferredCartItems.length > 0
                        ? deferredCartItems.map(product => <ProductCardRect
                            {...product}
                            handleRemove={() => dispatch(removeFromCart({ productID: product.productID }))}
                            key={product.productID}
                            animationVariants={childVariants}
                        />)
                        : <div className='absolute top-1/2 right-1/2'>
                            {
                                loadingItems ? <LoadingRing />
                                    : <EmptyIcon context={"cart"} />
                            }
                        </div>
                    }
                </AnimatePresence>
            </motion.section>
            <section className='flex justify-center items-center mt-4 mx-4 p-4 border-t border-t-gray-300'>
                {
                    deferredCartItems.length > 0 &&
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
            </section>
        </>
    );
}
