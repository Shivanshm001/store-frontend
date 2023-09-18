import React, { useState } from 'react'

import { GiHamburgerMenu } from 'react-icons/gi';
import { BsChevronDown } from 'react-icons/bs';
import { DropdownItem } from '../DropdownItem/DropdownItem';

export function Dropdown({ name, items, hamburgerIcon }) {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className='flex flex-col justify-center items-center group relative '>
            <div className='bg-neutral-800 px-6 py-3 w-fit h-full cursor-pointer '>
                <li className='flex justify-evenly items-center gap-4'>
                    {hamburgerIcon &&
                        <GiHamburgerMenu className='text-xl text-neutral-50' />
                    }
                    <span className='font-semibold  text-neutral-50'>{name}</span>
                    <BsChevronDown className='text-xl text-neutral-50' />
                </li >
            </div>

            <div className='hidden group-hover:block absolute w-full top-12 transition-all duration-300 ease-in-out'>
                <ul className='bg-neutral-100 w-full h-max shadow-md rounded shadow-gray-400'>
                    {
                        items &&
                        Object.entries(items).map(item => {
                            const linkPath = name === "PAGES"? item[0]: `/category/${item[0]}`;
                            return <DropdownItem dist={linkPath} name={item[1]} key={item[1]} />
                        })
                    }
                </ul>
            </div>
        </div>
    )
}
