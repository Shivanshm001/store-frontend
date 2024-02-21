import React, { useState } from 'react'

import { GiHamburgerMenu } from 'react-icons/gi';
import { BsChevronDown } from 'react-icons/bs';
import { DropdownItem } from '../DropdownItem/DropdownItem';

export function Dropdown({ name, items, hamburgerIcon }) {
    const [isClicked, setIsClicked] = useState(false);

    return (
        <button className='flex w-full flex-col justify-center items-center group relative' 
        onClick={() => setIsClicked(prev => !prev)}>
            <li className='bg-neutral-800  w-fit h-full cursor-pointer '>
                <div className='flex justify-evenly px-6 py-3 items-center gap-4' >
                    {hamburgerIcon &&
                        <GiHamburgerMenu className='text-xl text-neutral-50' />
                    }
                    <span className='font-semibold  text-neutral-50'>{name}</span>
                    <BsChevronDown className='text-xl text-neutral-50' />
                </div >
            </li>

            <div className={`hidden opacity-0 group-hover:opacity-100 absolute w-full top-12 transition-all duration-300 ease-in-out group-hover:block group-active:block group-focus:block`}>
                <ul className='bg-neutral-100 w-full h-max shadow-md rounded shadow-gray-400'>
                    {
                        items &&
                        Object.values(items).map(item => {
                            const linkPath = name === "PAGES" ? `${item.path}` : `/shop?${item.path}`;
                            return <DropdownItem dist={linkPath} name={item.name} key={item.name} />
                        })
                    }
                </ul>
            </div>
        </button>
    )
}