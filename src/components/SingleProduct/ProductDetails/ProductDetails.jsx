import React from 'react';
import { Rating } from './Rating/Rating';
import { BtnAddToCart } from 'components/SharedComponents/BtnAddToCart/BtnAddToCart';
import { BtnAddToWishlist } from 'components/SharedComponents/BtnAddToWishlist/BtnAddToWishlist';
import { FeaturedIcon } from 'components/SharedComponents/FeaturedIcon/FeaturedIcon';
import {BtnBuyNow} from 'components/SharedComponents/BtnBuyNow/BtnBuyNow'
import {Link} from 'react-router-dom';


export function ProductDetails({ data }) {

    const {
        imageUrl,
        name,
        price,
        featured,
        company,
        rating,
        category,
        productID
    } = data;



    return (
        <div className='p-1 my-1 bg-gradient-to-r from-yellow-400 via-blue-400 to-yellow-300'>
            <div className='grid grid-cols-4  p-4 bg-neutral-50'>
                <div className='rounded overflow-hidden p-0.5 h-full col-span-1'>
                    <img src={imageUrl} alt={name} loading="lazy" className="aspect-[9/12] object-center object-cover max-w-[300px] w-[300px] m-auto shadow-md shadow-gray-400 rounded" />
                </div>
                <div className='flex flex-col col-span-1 gap-4 p-6 border bg-gray-300 rounded text-neutral-800 '>
                    <div>
                        {
                            featured && <FeaturedIcon animate={true} />
                        }
                    </div>
                    <div className='flex flex-col gap-1 border-b border-neutral-600 w-fit pb-2'>
                        <h1 className='text-4xl font-extralight tracking-wide '>{name}</h1>
                        <h2 className='font-semibold text-neutral-600 tracking-wide'>Brand : {company}</h2>

                        <Link to={`/shop?category=${category}`} >
                            <span className='capitalize p-1 rounded-lg bg-neutral-100 text-xs'>{category}</span>
                        </Link>
                    </div>

                    <div className='border-b border-b-gray-400 pb-4 w-fit'>
                        <Rating rating={rating} />
                    </div>

                    <p className='relative border-b border-b-gray-400 w-fit'>
                        <span className=' text-neutral-600 absolute top-0'>$</span>
                        <span className='px-3 text-3xl'>{price}</span>
                    </p>
                    <>
                        <div className=' flex gap-2 flex-col w-full'>

                            <BtnAddToCart productID={productID} showText={true} />
                            <BtnBuyNow productID={productID}/>
                        </div>
                    </>
                </div>
            </div>
        </div>
    );
}