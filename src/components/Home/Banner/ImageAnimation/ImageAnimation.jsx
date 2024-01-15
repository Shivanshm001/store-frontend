import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BackgroundCircle } from './BackgroundCircle';

export function ImageAnimation({images}) {
    return (
        <div className='relative col-span-1  w-full h-full overflow-hidden'>
            <>
                <BackgroundCircle
                    className={"absolute top-[25%]  w-[300px] h-[300px] shadow-lg shadow-yellow-200 rounded-full p-10 bg-gradient-to-br from-yellow-300 to-yellow-100 bg-yellow-200"} />
                <BackgroundCircle
                    className={"absolute top-[35%] right-[10%]  w-[400px] h-[400px] shadow-lg shadow-blue-200 rounded-full p-10 bg-gradient-to-bl from-blue-300 to-blue-100 bg-blue-200"} />

                <motion.img src={images["clothes"]} alt="Clothes"
                    draggable={false}
                    key={"clothes"}
                    initial={{ scale: 0.5, x: 1000, opacity: 0 }}
                    animate={{ scale: 1, x: 0, opacity: 1 }}
                    exit={{ scale: 0.5, x: 1000, opacity: 0 }}
                    transition={{ duration: 4, type: "spring", repeat: Infinity, repeatDelay: 4, }}
                    className='w-[80%]  object-cover object-center absolute -top-10 left-20' />
            </>
        </div>
    );
}