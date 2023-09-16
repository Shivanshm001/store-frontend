import React from "react";
import { Link } from "react-router-dom";

export function LinkDropdown({ dist, name }) {
    return <Link to={dist.toLowerCase()} className='bg-neutral-100 py-3 h-full w-full transition-all duration-300 ease-in-out'>
        <li className='w-full'>
            <span className=' hover:bg-gray-200 text-neutral-800 tracking-wider px-4 py-2 inline-block  w-full'>{name}</span>
        </li>
    </Link>;
}
