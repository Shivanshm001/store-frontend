import React from 'react';
import { useSelector } from 'react-redux';
import { FiAlertCircle } from 'react-icons/fi';

export function Error(message) {
    return (
        <>
            {
                <div className='w-[80%] my-4'>
                    <p className='bg-red-400 px-4 py-2 rounded'>
                        <FiAlertCircle />{message}</p>
                </div>
            }
        </>
    );
}
