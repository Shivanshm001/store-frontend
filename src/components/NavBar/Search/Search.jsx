import React, { useRef, useEffect } from 'react';
import { useDeferredValue, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BiSearch } from 'react-icons/bi';
import { searchProductByName } from 'redux/search/search.slice';
import { motion } from 'framer-motion';
import { LoadingBubble } from 'components/SharedComponents/LoadingBubble/LoadingBubble';
import { useNavigate } from 'react-router-dom';

export function Search() {
    const { isLoading, products } = useSelector(store => store.search);
    const searchedProducts = useDeferredValue(products) ?? [];
    const [formIsFocused, setFormIsFocused] = useState(false);
    const [name, setName] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        dispatch(searchProductByName({ name }));
    }

    useEffect(() => {
        dispatch(searchProductByName({ name }));
    }, [name]);

    return (
        <div className='w-full flex flex-col justify-center items-center relative'>
            <form className='relative flex justify-center items-center w-full '
                onSubmit={handleSubmit}
                autoComplete='off'
                onFocus={() => setTimeout(() => setFormIsFocused(true), 500)}
                onBlur={() => setTimeout(() => setFormIsFocused(false), 900)}>
                <div className='flex justify-center items-center border border-gray-400 w-[60%]'>
                    <input type="text" name='name' value={name} onChange={(e) => setName(e.target.value)}
                        placeholder='What do you need?'
                        className='appearance-none outline-none p-3 text-neutral-400 w-full'
                    />
                    <button className='p-4 bg-amber-500' >
                        <BiSearch className='text-xl text-white' />
                    </button>
                </div>
            </form>
            {/* Search Results  */}
            {
                formIsFocused &&
                <ul className={`w-1/2 my-2 z-50 absolute bg-neutral-100 shadow shadow-gray-400 flex flex-col top-14 `}>
                    <div>
                        {isLoading ?
                            <div className='grid place-items-center'> 
                                <motion.div initial={{ scale: 0.4 }}>
                                    <LoadingBubble />
                                </motion.div>
                            </div>
                            : <div className={`flex flex-col ${searchedProducts.length > 0 ? "visible" : "invisible"}`}
                            >
                                {
                                    searchedProducts && searchedProducts.map((product, index) => {
                                        return <button tabIndex={index}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                navigate(`/product/${product.productID}`);
                                            }}
                                            key={product.productID} className='p-2 hover:bg-gray-200 focus-visible:bg-gray-200 focus:bg-gray-200 active:bg-gray-200'>
                                            {product.name}
                                        </button>;
                                    })
                                }
                            </div>}
                    </div>
                </ul>
            }
        </div>
    );
}
