import React from "react";

export function FashionCard({ image, ref, name, price, featured, link }) {


    return (
        <>
            <div ref={ref} className='col-span-1 flex flex-col justify-center items-center gap-4 min-w-[250px]  max-w-[250px] max-h-fit'>
                <div className='w-full  relative'>
                    {
                        featured &&
                        <span className="absolute top-3 left-0 bg-lime-500 text-xs font-semibold text-white p-2 shadow-md tracking-wide  shadow-lime-900">Featured</span>
                    }
                    <img src={image} alt={name} className='min-w-full max-w-full max-h-full object-cover' />
                </div>
                <div className="my-4">
                    <p className='text-2xl text-center font-light text-neutral-800'>{name}</p>
                    <p className='text-center text-2xl text-yellow-500 font-semibold opacity-75'>${price ? price : 0}</p>
                </div>
            </div>
        </>
    );
}
