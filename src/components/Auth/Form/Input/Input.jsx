import React from 'react'

export function Input({ id, label, type, value, onChange }) {
    return (
        <div className='flex flex-col gap-2'>
            <label htmlFor={id} className='text-lg tracking-wide font-poppins'>{label} *</label>
            <input
                type={type}
                value={value}
                onChange={onChange}
                required={true}
                className='p-2 w-full outline-none border border-gray-400 focus:outline  focus:outline-gray-400' />
        </div>
    )
}