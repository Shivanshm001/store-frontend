import React, { useEffect, useState } from 'react';
import { OrderItem } from './OrderItem/OrderItem';
import { OrderItemDetail } from './OrderItemDetail/OrderItemDetail';
import { useDispatch, useSelector } from 'react-redux';
import { getProductByID } from '../../../../api/productApi/productApiControllers';
import { addToBuyNowAsync } from '../../../../redux/user/user.slice.actions';




export function Orders() {
  const dispatch = useDispatch();
  const [discount, setDiscount] = useState(0);
  const [subTotal, setSubTotal] = useState(0);
  const [total, setTotal] = useState(0);
  const { cartItems, buyNowProductId } = useSelector(store => store.user);
  const [buyNowItem, setBuyNowItem] = useState({});


  async function fetchBuyNowItem() {
    if (!buyNowProductId || buyNowProductId === "") return;
    const item = await getProductByID(buyNowProductId);
    if (item) setBuyNowItem(item);
    dispatch(addToBuyNowAsync(""))
  }

  useEffect(() => {
    fetchBuyNowItem();
    console.log("Buy Now Item ", buyNowItem)
  },[]);

  function calculateCheckoutAmount() {
    let subTotal = 0;
    if (Object.keys(buyNowItem).length > 0) {
      setSubTotal(buyNowItem.price);
      setTotal(subTotal - discount);
    }
    else if (Object.keys(buyNowItem).length <= 0 && cartItems.length > 0) {
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
