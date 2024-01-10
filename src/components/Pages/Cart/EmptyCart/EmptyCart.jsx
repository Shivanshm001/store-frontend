import React from 'react';
import { IconContext } from 'react-icons/lib';
import { motion } from 'framer-motion';
import { TbShoppingCartExclamation } from 'react-icons/tb';

export function EmptyCart() {
    return (
        <div className=''>
            <motion.h1 className='flex gap-2 justify-center items-center shadow bg-gray-300 rounded p-1'
            initial={{
                scale: 5
            }}
            animate={{
                scale: 5.3,
                shadow: '0 1px 3px 0 rgb(75 85 99), 0 1px 2px -1px rgb(0 0 0 / 0.1)'
            }}

            transition={{
                repeat: Infinity,
                duration: 2,
                repeatDelay: 0,
                repeatType: "reverse"
            }}
            >
                <span className='text-gray-600'>
                    <TbShoppingCartExclamation />
                </span>
                <span className='text-xs font-extralight text-gray-500'>
                    Empty Cart!
                </span>
            </motion.h1>
        </div>
    );
}