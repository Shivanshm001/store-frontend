import React from 'react';


export function Rating({ rating }) {
    return (
        <div className='flex flex-col gap-1 '>
            <div>
                <span className='pt-1 pr-1 font-semibold'>Rating : {rating} / 10
                    <span className='text-neutral-500 font-extralight px-2'>|</span>
                </span>
            </div>

            <p className="rating">
                {
                    new Array(rating).fill(null).map(el => {
                        return <input disabled className='mask mask-star-2 bg-yellow-300 mx-1'></input>;
                    })
                }
            </p>
        </div>
    );
}