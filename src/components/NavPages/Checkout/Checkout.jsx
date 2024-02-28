import React from 'react';
import { BillingDetails } from './BillingDetails/BillingDetails';
import { Orders } from './Orders/Orders';
import { motion } from 'framer-motion';


export function Checkout() {

    async function handleSubmit(e){
        e.preventDefault();
        alert('Order has been placed successfully.');
    }
    return (
        <section className='py-20'>
            <div className='px-4 mx-auto w-full max-w-[1080px] '>
                <form onSubmit={handleSubmit}>
                    <div className='grid grid-cols-12 gap-10'>


                        
                        <div className="col-span-6 w-full">
                            <h4 className='text-2xl font-semibold tracking-wide mb-8'>Your Orders</h4>
                            <div className='px-10 py-6 border-2 border-gray-300'>
                                <Orders />

                                <div className='flex justify-center items-center my-8'>
                                    <motion.button
                                        whileTap={{ scale: 0.9}}
                                        whileHover={{borderRadius: 10}}
                                        whileFocus={{backgroundColor: 'rgb(23,23,23)', color: 'rgb(245,245,245)'}}
                                        className='bg-neutral-900 tracking-wider text-neutral-100 px-7 py-3 '>PLACE ORDER</motion.button>
                                </div>
                            </div>
                        </div>

                        <div className="col-span-6 w-full">
                            <h4 className='text-2xl font-semibold tracking-wide mb-8'>Billing Details</h4>
                            <BillingDetails />
                        </div>
                    </div>

                </form>
            </div>
        </section>
    );
}
