import React, { useEffect, useState } from 'react';
import { OrderItem } from './OrderItem/OrderItem';
import { OrderItemDetail } from './OrderItemDetail/OrderItemDetail';
import { useSelector } from 'react-redux';




export function Orders() {

  const [discount, setDiscount] = useState(0);
  const [subTotal, setSubTotal] = useState(0);
  const [total, setTotal] = useState(0);
  const { cartItems } = useSelector(store => store.user);

  function calculateCheckoutAmount() {
    if (cartItems.length > 0) {
      let subTotal = 0;
      for (const item of cartItems) subTotal += item.price;
      setSubTotal(subTotal);
      setTotal(subTotal - discount);
    } else {
      setTotal(0);
      setSubTotal(0);
      setDiscount(0);
    }
  }


  useEffect(() => {
    calculateCheckoutAmount();
  }, [cartItems]);


  return (
    <>
      <ul>
        <li className='flex justify-between font-semibold border-b border-neutral-800 pb-2'>
          <span>Product</span>
          <span>Total</span>
        </li>

        {
          Array.isArray(cartItems) && cartItems.length > 0 &&
          cartItems.map(item => <OrderItem price={item.price} name={item.name} quantity={item.quantity || 1} key={item.productID} />)
        }

        <OrderItemDetail title={"Subtotal"} value={subTotal.toFixed(2)} />
        <OrderItemDetail title={"Discount"} value={discount.toFixed(2)} />
        <OrderItemDetail title={"Total"} value={(total).toFixed(2)} />
      </ul>
    </>
  );
}
