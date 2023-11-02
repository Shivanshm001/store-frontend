import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { CartItem } from './CartItem/CartItem';

const array = [1,2,3,4,5,6,7,8];
export function Cart() {
    return (
        <>
            <section className='grid grid-cols-3 gap-16'>
                {
                    array.map(el => <CartItem name={"Converse shoes"} image={"https://picsum.photos/500"} price={el*50} productId={el} key={el} />)
                }
            </section>
        </>
    );
}
