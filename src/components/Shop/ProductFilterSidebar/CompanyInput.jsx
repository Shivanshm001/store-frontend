import React from 'react';


export function CompanyInput({ item, checked, onChange }) {
    return (
        <>
            <div className='flex flex-col gap-5 cursor-pointer'>
                <div className='flex gap-2 my-1 mx-4'>

                    {/* COMPANIES INPUT  */}

                    <input type="radio" name={"company"}
                        id={item}
                        value={item}
                        checked={checked}
                        onChange={onChange} />
                    <label htmlFor={item} className='cursor-pointer'>{item}</label>

                    {/* COMPANIES INPUT END  */}
                </div>
            </div>
        </>
    );
}