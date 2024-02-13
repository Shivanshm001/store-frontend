import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';

export function TrendingCard({ image, link, text }) {
    const cardRef = useRef(null);
    const cardInView = useInView(cardRef, {
        once: true,
    });

    return <motion.div
        initial={{ y: -20, scale: 0.2, opacity: 0.2 }}
        whileInView={!cardInView && { scale: 1, y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: 'backInOut', type: 'spring', }}
    >
        <div
            ref={cardRef}
            className='relative trending-card-hover-effect'>
            <img src={image} alt="Bike" className='min-w-[400px] min-h-[300px] max-w-[300px] max-h-[300px]' />
            <Link to={link} className='absolute text-center w-full hover:bg-yellow-500  top-1/2 bottom-1/2 '>
                <span className='text-neutral-800 text-2xl bg-white hover:bg-yellow-400 font-semibold tracking-wider px-6 py-3'>{text}</span>
            </Link>
        </div>
    </motion.div>;
}