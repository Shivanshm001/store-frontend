import React, { useState } from 'react';
import { OrderItem } from './OrderItem/OrderItem';
import { OrderItemDetail } from './OrderItemDetail/OrderItemDetail';
import { useSelector } from 'react-redux';




export function Orders() {

  const [discount, setDiscount] = useState(70);
  const [subTotal, setSubTotal] = useState(440);

  const { products } = useSelector(store => store.products);


  return (

    <>
      <ul>
        <li className='flex justify-between font-semibold border-b border-neutral-800 pb-2'>
          <span>Product</span>
          <span>Total</span>
        </li>

        <OrderItem name={"Converse shoes"} price={60} quantity={2} />
        <OrderItem name={"Converse shoes"} price={60} quantity={2} />
        <OrderItem name={"Converse shoes"} price={60} quantity={2} />
        <OrderItem name={"Converse shoes"} price={60} quantity={2} />
        <OrderItem name={"Converse shoes"} price={60} quantity={2} />


        <OrderItemDetail title={"Subtotal"} value={subTotal.toFixed(2)} />
        <OrderItemDetail title={"Discount"} value={discount.toFixed(2)} />
        <OrderItemDetail title={"Total"} value={(subTotal - discount).toFixed(2)} />
      </ul>
    </>
  );
}
