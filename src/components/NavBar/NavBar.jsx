import React from 'react';

import { Search } from './Search/Search';

import { BiHeart } from 'react-icons/bi';
import { LiaShoppingBagSolid } from 'react-icons/lia';
import { Logo } from './Logo/Logo';
import { NavIcon } from './NavIcon/NavIcon';
import { Dropdown } from './Dropdown/Dropdown';
import { ListLink } from './ListLink/ListLink';

import categories from './json/categories.json';
import pages from './json/pages.json';


export function NavBar() {
    return (
        <nav className='w-full bg-white sticky top-0 shadow-md shadow-gray-200'>
            {/* Primary nav bar */}
            <div className='flex px-4 gap-4 justify-center items-center my-8'>
                <Logo />
                <Search />
                <div className='flex justify-center items-baseline gap-x-2'>
                    <NavIcon>
                        <BiHeart className='text-3xl font-extralight' />
                    </NavIcon>
                    <NavIcon>
                        <LiaShoppingBagSolid className='text-3xl font-extralight mb-0.5' />
                    </NavIcon>
                </div>
            </div>

            {/* Secondary navbar  */}
            <div className='bg-neutral-950 grid place-items-center'>
                <ul className='flex gap-2 w-fit justify-center items-center bg-neutral-600 px-2'>
                    <Dropdown name={"CATEGORIES"} hamburgerIcon={true} items={categories}/>
                    <ListLink name={"HOME"} dist={"/"} />
                    <ListLink name={"SHOP"} dist={"/shop"} />
                    <ListLink name={"ABOUT"} dist={"/contact"} />
                    <Dropdown name={"PAGES"} items={pages} />
                </ul>
            </div>
        </nav>
    )
}