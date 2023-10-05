import React from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import { CartItem } from './CartItem/CartItem';

export function Cart() {
    return (
        <div>
            <table className='border border-neutral-200 w-full p-10 min-w-[480px] border-collapse'>
                <thead className='align-middle table-header-group'>
                    <tr className='table-row'>
                        <th className='py-5'>IMAGE</th>
                        <th className='py-5'>PRODUCT NAME</th>
                        <th className='py-5'>PRICE</th>
                        <th className='py-5'>QUANTITY</th>
                        <th className='py-5'>TOTAL</th>
                        <th className='py-5'><AiOutlineClose /></th>
                    </tr>
                </thead>

                <tbody className=''>
                    <CartItem image={"https://picsum.photos/170"} price={60} name={"Converse shoes"} />
                    <CartItem image={"https://picsum.photos/170"} price={60} name={"Converse shoes"} />
                    <CartItem image={"https://picsum.photos/170"} price={60} name={"Converse shoes"} />
                    <CartItem image={"https://picsum.photos/170"} price={60} name={"Converse shoes"} />
                    <CartItem image={"https://picsum.photos/170"} price={60} name={"Converse shoes"} />
                    <CartItem image={"https://picsum.photos/170"} price={60} name={"Converse shoes"} />
                    <CartItem image={"https://picsum.photos/170"} price={60} name={"Converse shoes"} />
                </tbody>
            </table>
        </div>
    )
}
