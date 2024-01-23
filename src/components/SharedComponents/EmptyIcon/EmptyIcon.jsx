import React from 'react';
import { IconContext } from 'react-icons/lib';
import { motion } from 'framer-motion';
import { TbShoppingCartExclamation } from 'react-icons/tb';

export function EmptyIcon({ context }) {
    return (
        <div className=''>
            <motion.h1 className='flex gap-1justify-center items-center shadow bg-gray-300 rounded p-1'
                initial={{
                    scale: 5
                }}


            >
                <span className='text-gray-600'>
                    <TbShoppingCartExclamation />
                </span>
                <span className='text-xs font-extralight text-gray-500'>
                    {context === "cart" && "Cart is empty!"}
                    {context === "wishlist" && "Wishlist is empty!"}
                </span>
            </motion.h1>
        </div>
    );
}
