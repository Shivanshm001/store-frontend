import React from 'react'

import { TrendingCard } from './TrendingCard/TrendingCard'
import bike from './images/bike.jpg';
import phone from './images/phone.jpg';
import clothes from './images/clothes.jpg';

export  function TrendingSection() {
    return (
        <div className='flex justify-evenly gap-8 px-16 items-center '>
            {/* Trending */}
            <TrendingCard image={bike} text={"Bikes"} link={"/category/bike"} />
            <TrendingCard image={phone} text={"Phones"} link={"/category/mobiles"} />
            <TrendingCard image={clothes} text={"Clothes"} link={"/category/fashion"} />
        </div>
    )
}
