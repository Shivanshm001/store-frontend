import React from 'react'

export function Input({ id, label, type, value, onChange, required }) {
    return (
        <div className='flex flex-col'>
            <label htmlFor={id} className='text-lg tracking-wide font-poppins'>{label} {required && "*"}</label>
            <input
                type={type}
                id={id}
                value={value}
                onChange={onChange}
                required={required}
                className='p-2 w-full outline-none border border-gray-400 focus:outline  focus:outline-gray-400' />
        </div>
    )
}
