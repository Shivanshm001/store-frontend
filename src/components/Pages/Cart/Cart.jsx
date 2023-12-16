import React, { useDeferredValue, useEffect, useState } from 'react';
import { ProductCardRect } from '../SharedComponents/ProductCardRect';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getProductByID } from '../../../api/productApi/productApiControllers';
import { setCartItemsRedux } from '../../../redux/user/user.slice';

export function Cart() {
    const dispatch = useDispatch();
    const [cartItems, setCartItems] = useState([]);
    const { cart } = useSelector(store => store.user);
    const [subTotal, setSubTotal] = useState(0);
    const [total, setTotal] = useState(0);
    const deferredCartItems = useDeferredValue(cartItems);
    console.log(cartItems);
    useEffect(() => {
        async function fetchCartItems() {
            const items = await Promise.all(cart.map(async productID => {
                const { product } = await getProductByID(productID);
                return product;
            }));
            setCartItems(items.filter(Boolean));

            let totalPrice = 0;
            for (const item of items) {
                totalPrice += item.price;
            }
            setTotal(totalPrice);
            setSubTotal(totalPrice);
        };
        fetchCartItems();
    }, [cart]);

    useEffect(() => {
        dispatch(setCartItemsRedux({ cartItems }));
    }, [cartItems]);
    return (
        <>
            <section className='grid grid-cols-2 gap-10 p-4 bg-gray-200 min-h-screen'>
                {deferredCartItems.length > 0
                    ? deferredCartItems.map(product => <ProductCardRect {...product} key={product.productID} pageType={"cart"} />)
                    : <h1 className="text-3xl">Cart is empty</h1>
                }
            </section>
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
