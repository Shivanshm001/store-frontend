import React, { useEffect, useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { searchProductByName } from '../../../redux/search/search.slice';

export function Search() {
    const [name, setName] = useState('');
    const dispatch = useDispatch();
    const { products } = useSelector(store => store.search);
    async function handleSubmit(e) {
        e.preventDefault();
        dispatch(searchProductByName({ name }));
        console.log(products)
    }

    return (
        <form className='flex justify-center items-center w-full ' onSubmit={handleSubmit}>
            <div className='flex justify-center items-center border border-gray-400 w-1/2'>
                <input type="text" name='name' value={name} onChange={(e) => setName(e.target.value)}
                    placeholder='What do you need?'
                    className='appearance-none outline-none p-3 text-neutral-400 w-full'
                />
                <button className='p-4 bg-amber-500'>
                    <BiSearch className='text-xl text-white' />
                </button>
            </div>
        </form>
    );
}
