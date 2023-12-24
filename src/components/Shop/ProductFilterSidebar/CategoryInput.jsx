import React from 'react';


export function CategoryInput({ item, checked, value, onChange }) {
    return (
        <>
            <div className='flex gap-2 my-1 mx-4 cursor-pointer'>

                {/* CATEGORY INPUT  */}

                <input 
                type="radio" 
                name={"category"} 
                id={item}
                checked={checked}
                value={value} 
                onChange={onChange} 
                className='outline-none cursor-pointer' />
                <label htmlFor={item} className={`outline-none cursor-pointer}`}>{item}</label>

                {/* CATEGORY INPUT END  */}
            </div>
        </>
    );
}