import React from 'react';

export function Currency({ type, amount }) {
    const currency = {
        "USD": "$",
    };
    return (
        <p className='text-sm font-semibold my-2'>
            <span>{currency[type]} {amount/100}</span>
        </p>
    );
}
