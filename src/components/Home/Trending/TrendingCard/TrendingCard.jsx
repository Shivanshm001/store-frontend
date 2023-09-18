import React from 'react';
import { Link } from 'react-router-dom';

export function TrendingCard({ image, link, text }) {
    return <div className='relative trending-card-hover-effect'>
        <img src={image} alt="Bike"  className='min-w-[400px] min-h-[300px] max-w-[400px] max-h-[300px]' />
        <Link to={link} className='absolute text-center w-full hover:bg-yellow-500  top-1/2 bottom-1/2 '>
            <span className='text-neutral-800 text-2xl bg-white hover:bg-yellow-400 font-semibold tracking-wider px-6 py-3'>{text}</span>
        </Link>
    </div>
}