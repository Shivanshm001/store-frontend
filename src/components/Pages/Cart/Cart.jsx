import React from 'react';
import { CartItem } from './CartItem/CartItem';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const array = [1, 2, 3, 4, 5, 6, 7, 8];
export function Cart() {
    const { cart } = useSelector(store => store.user);

    return (
        <>
            <section className='grid grid-cols-2 gap-10 p-4 bg-gray-200'>
                {
                    array.map(el => <CartItem name={"Converse shoes"} image={"https://picsum.photos/500"} price={el * 50} productId={el} key={el} />)
                }
            </section>
            <section className='flex justify-center items-center mt-4 mx-4 p-4 border-t border-t-gray-300'>
                <div className='w-1/2 flex flex-col bg-gray-200'>
                    <div className='flex justify-between text-lg tracking-wider p-4 border-b border-b-gray-300'>
                        <h1>Subtotal : </h1>
                        <h1 className='font-bold'>$343</h1>
                    </div>
                    <div className='flex justify-between text-lg tracking-wider p-4 border-b border-b-gray-300'>
                        <h1 className='font-bold'>Total : </h1>
                        <h1>$343</h1>
                    </div>
                    <Link to={"/checkout"} className='text-center text-neutral-200 bg-gray-950 p-4 tracking-wide hover:font-semibold transition-all ease-linear duration-75'>PROCEED TO PAYMENT</Link>
                </div>
            </section>
        </>
    );
}
