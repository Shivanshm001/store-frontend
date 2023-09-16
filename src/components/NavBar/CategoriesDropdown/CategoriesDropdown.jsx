import React, { useState } from 'react'

import { GiHamburgerMenu } from 'react-icons/gi';
import { BsChevronDown } from 'react-icons/bs';
import categories from '../../../json/categories.json';
import { LinkDropdown } from './LinkDropdown';

export function CategoriesDropdown() {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className='flex flex-col justify-center items-center group relative '>
            <div className='bg-neutral-800 px-6 py-3 w-fit h-full cursor-pointer '>
                <li className='flex justify-evenly items-center gap-4'>
                    <GiHamburgerMenu className='text-xl text-neutral-50' />
                    <span className='font-semibold  text-neutral-50'>CATEGORIES</span>
                    <BsChevronDown className='text-xl text-neutral-50' />
                </li >
            </div>

            <div className='hidden group-hover:block absolute w-full top-12 transition-all duration-300 ease-in-out'>
                <ul className='bg-neutral-100 w-full h-max shadow-md rounded shadow-gray-400'>
                    {
                        categories.map(category => <LinkDropdown dist={`/category/${category}`} name={category} key={category} />)
                    }
                </ul>
            </div>
        </div>
    )
}
