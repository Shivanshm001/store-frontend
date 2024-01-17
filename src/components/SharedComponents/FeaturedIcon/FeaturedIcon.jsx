import React from 'react';
import { motion } from 'framer-motion';
import { RiVipCrownFill } from "react-icons/ri";

export function FeaturedIcon({ animate }) {
    return (<motion.span
        initial={{ y: -4 }}
        animate={{ y: 0, }}
        transition={{ repeat: animate && Infinity, ease: "circInOut", repeatType: "mirror", duration: 0.6 }}
        className=' flex gap-2 items-baseline'>
        <motion.span
            initial={{ scale: 1.4 }}>
            <RiVipCrownFill className='text-rose-600 inline-block' />
        </motion.span>
        <span className='text-sm tracking-widest border-b-2  font-semibold inline-block'>
            Featured
        </span>
    </motion.span>
    );
}