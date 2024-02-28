import React, { useDeferredValue, useEffect, useLayoutEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getProductByID } from 'api/productApi/productApiControllers';
import { useScrollIntoView } from 'hooks/useScrollIntoView';
import { setCartItemsRedux } from 'redux/user/user.slice';
import { LoadingRing } from 'components/SharedComponents/LoadingRing/LoadingRing';
import { ProductCardRect } from 'components/SharedComponents/ProductCardRect/ProductCardRect';

import { AnimatePresence, motion } from 'framer-motion';
import { CHECKOUT_DETAILS } from 'config/urlPaths';
import { removeFromCartAsync } from 'redux/user/user.slice.actions';
import { EmptyIcon } from 'components/SharedComponents/EmptyIcon/EmptyIcon';
import { childVariants, parentVariants } from './animationVariants';

export function Cart() {
    const dispatch = useDispatch();
    const [cartRef, scrollIntoView] = useScrollIntoView();
    const [cartItems, setCartItems] = useState([]);
    const [loadingItems, setLoadingItems] = useState(false);
    const { cartProductsId } = useSelector(store => store.user);
    const [subTotal, setSubTotal] = useState(0);
    const [total, setTotal] = useState(0);
    const deferredCartItems = useDeferredValue(cartItems);

    useLayoutEffect(() => {
        async function fetchCartItems() {
            setLoadingItems(true);
            const items = await Promise.all(cartProductsId.map(async productID => {
                const { product } = await getProductByID(productID);
                return product;
            }));
            setCartItems(items.filter(Boolean));
            setLoadingItems(false);
            let totalPrice = 0;
            for (const item of items) {
                totalPrice += item.price;
            }
            setTotal(totalPrice);
            setSubTotal(totalPrice);
        };
        fetchCartItems();
    }, [cartProductsId]);

    useEffect(() => {
        scrollIntoView();
        if (!cartProductsId || !cartItems) {
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
                        ? deferredCartItems.map(product => {
                            console.log("Product in cart : ", product);
                            return <ProductCardRect
                                pageType={"cart"}
                                {...product}
                                handleRemove={() => dispatch(removeFromCartAsync({ productID: product.productID }))}
                                key={product.productID}
                                animationVariants={childVariants}
                            />;
                        })
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
                        <motion.div

                            className='flex w-full h-full justify-center items-center my-2'
                        >
                            <motion.div
                                initial={{ scale: 1 }}
                                whileTap={{ scale: 0.9 }}
                                whileHover={{ borderRadius: 10 }}
                                transition={{
                                    ease: "circInOut",
                                }}
                                className='overflow-hidden h-max w-max py-4'
                            >

                                <Link role='button' to={CHECKOUT_DETAILS} className='text-center text-neutral-200 bg-gray-950 p-4 tracking-wide transition-all ease-linear duration-75'>PROCEED TO CHECKOUT</Link>
                            </motion.div>
                        </motion.div>
                    </div>
                }
            </section>
        </>
    );
}
