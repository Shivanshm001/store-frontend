import React from 'react';

export function Rating({ rating }) {
    rating = Math.ceil(rating);
    const stars = [];
    for (let i = 1; i <= rating; i++) {
        stars.push(<span key={i} className='cursor-default'>✨</span>);
    }

    return stars;
}
