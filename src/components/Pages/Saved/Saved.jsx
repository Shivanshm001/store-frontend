import React, { useEffect, useState } from 'react';
import { ProductCardRect } from '../SharedComponents/ProductCardRect';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export function Saved() {
  const { wishlist, cart } = useSelector(store => store?.user);
  const { products } = useSelector(store => store?.products);
  const [savedProducts, setSavedProducts] = useState([]);

  useEffect(() => {
    const filteredProducts = products.filter(product => wishlist.includes(product.productID));
    setSavedProducts(filteredProducts);
  }, [wishlist, cart, products]);
  console.log("Saved : ", savedProducts);
  return (
    <>
      <section className='grid grid-cols-2 gap-10 p-4 bg-gray-200'>
        {
          savedProducts.map(product => <ProductCardRect {...product} />)
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
