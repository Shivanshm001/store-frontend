import React, { useState } from 'react';
import { BillingDetails } from './BillingDetails/BillingDetails';
import { Orders } from './Orders/Orders';

export function Checkout() {
    
    return (
        <section className='py-20'>
            <div className='px-4 mx-auto w-full max-w-[1080px] '>
                <form>
                    <div className='grid grid-cols-12 gap-10'>
                        <div className="col-span-6 w-full">
                            <h4 className='text-2xl font-semibold tracking-wide mb-8'>Billing Details</h4>
                            <BillingDetails />
                        </div>


                        <div className="col-span-6 w-full">
                            <h4 className='text-2xl font-semibold tracking-wide mb-8'>Your Orders</h4>
                            <div className='px-10 py-6 border-2 border-gray-300'>
                                <Orders />

                                <div className='flex justify-center items-center my-8'>
                                    <button className='bg-neutral-900 tracking-wider text-neutral-100 px-7 py-3 focus:text-neutral-100 focus:bg-neutral-900'>PLACE ORDER</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </form>
            </div>
        </section>
    );
}
