import React from 'react';
import { Link } from 'react-router-dom';

export function Logo() {
    return <Link to={"/"} title='Home'>
        <h1 className='text-4xl font-bold flex justify-center items-baseline gap-1'>
            <span className=''>Store</span>
            <span className='bg-lime-400 p-[5px]'></span>
        </h1>
    </Link>;
}
