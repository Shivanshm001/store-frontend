import React from 'react';
import { motion } from 'framer-motion';
import { RiVipCrownFill } from "react-icons/ri";
import { Link } from 'react-router-dom';

export function FeaturedIcon({ animate, category }) {
    return (<motion.span
        initial={{ y: -4 }}
        animate={{ y: 0, }}
        transition={{ repeat: animate && Infinity, ease: "circInOut", repeatType: "mirror", duration: 0.6 }}
        className=' flex gap-2 items-baseline'>
        <motion.span
            initial={{ scale: 1.4 }}>
            <RiVipCrownFill className='text-rose-600 inline-block' />
        </motion.span>
        <span className='text-xs font-semibold tracking-widest border-b-2  inline-block text-yellow-600'>
            Featured in
            {
                category && <Link to={`/shop?category=${category}`} className='inline-block capitalize hover:text-yellow-400'>&nbsp; {category}</Link>
            }
        </span>
    </motion.span>
    );
}