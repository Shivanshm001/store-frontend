import React from 'react';

export function NavIcon({ children, quantity }) {
    return <div className='relative'>
        {children}
        <span className='bg-red-400 text-white px-2 scale-75 rounded-full absolute -top-2 -right-2 text-sm'>{quantity}</span>
    </div>;
}
