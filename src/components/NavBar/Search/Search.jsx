import React, { useEffect, useState } from 'react'
import { BiSearch } from 'react-icons/bi';
import { useDispatch } from 'react-redux';


export function Search() {
    const [name, setName] = useState('');
    const dispatch = useDispatch();

    function handleSubmit(e){
        e.preventDefault();
    }

    return (
        <form className='w-1/2' onSubmit={handleSubmit}>
            <div className='relative'>
                <input type="text" name='name' value={name} onChange={(e) => setName(e.target.value)}
                placeholder='Search by product name'
                    className='w-full border border-gray-400 rounded-full outline-none py-2 px-4 pr-16 ring-gray-200 focus:ring-blue-300 bg-gray-100 text-neutral-800'
                />
                <button className='absolute right-1.5 top-1.5  border border-gray-400 scale-110 active:scale-100 bg-gray-300 p-1.5 rounded-full hover:ring-1 ring-gray-300'>
                    <BiSearch />
                </button>
            </div>
        </form>
    )
}
