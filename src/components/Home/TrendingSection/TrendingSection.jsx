import React, { useId } from 'react';

import { TrendingCard } from './TrendingCard/TrendingCard';
import { motion, useInView } from 'framer-motion';

import bike from './images/bike.jpg';
import phone from './images/phone.jpg';
import fashion from './images/clothes.jpg';

export function TrendingSection() {
    return (
        <motion.div

            className='flex justify-evenly flex-wrap gap-8 px-16 items-center '>
            {/* Trending */}
            <TrendingCard image={bike} text={"Bikes"} link={"/shop?category=bikes"} />
            <TrendingCard image={phone} text={"Phones"} link={"/shop?category=mobiles"}  />
            <TrendingCard image={fashion} text={"Fashion"} link={"/shop?category=fashion"} />
        </motion.div>
    );
}
