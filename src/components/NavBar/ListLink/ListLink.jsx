import React from 'react';
import { Link } from 'react-router-dom';

export function ListLink({ name, dist }) {

    return <Link to={dist} className='bg-neutral-800 px-6 py-3 h-full hover:bg-yellow-500 transition-all duration-300 ease-in-out w-full'>
        <li className=''>
            <span className='font-semibold  text-neutral-50'>{name}</span>
        </li>
    </Link>;
}
