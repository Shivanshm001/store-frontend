import React from 'react';
import { Link } from 'react-router-dom';
import { Search } from './Search/Search';

import { BiHeart } from 'react-icons/bi';
import { LiaShoppingCartSolid } from 'react-icons/lia';
import { Logo } from '../Logo/Logo';
import { NavIcon } from './NavIcon/NavIcon';
import { Dropdown } from './Dropdown/Dropdown';
import { ListLink } from './ListLink/ListLink';
import { useSelector } from 'react-redux';
import { categories } from '../../json/categories';
import { pages } from '../../json/pages';
import { ABOUT, CART, CONTACT, HOME, SHOP, WISHLIST } from '../../config/urlPaths';


export function NavBar() {
    const { cartProductsId } = useSelector(store => store.user);
    const { wishlistProductsId } = useSelector(store => store.user);
    return (
        <div className='w-full bg-white sticky top-0 z-50 shadow-md shadow-gray-200'>
            {/* Primary nav bar */}
            <div className='flex px-4 gap-4 justify-center items-center my-8'>
                <Logo />
                <Search />
                <div className='flex justify-center items-baseline gap-x-2'>
                    <NavIcon quantity={wishlistProductsId?.length || 0}>
                        <Link to={WISHLIST} title='Wishlist'>
                            <BiHeart className='text-3xl font-extralight' />
                        </Link>
                    </NavIcon>
                    <NavIcon quantity={cartProductsId?.length || 0}>
                        <Link to={CART} title='Shopping Cart'>
                            <LiaShoppingCartSolid className='text-3xl font-extralight mb-0.5' />
                        </Link>
                    </NavIcon>
                </div>
            </div>

            {/* Secondary navbar  */}
            <div className='bg-neutral-950 grid place-items-center w-full'>
                <ul className='flex gap-0.5  justify-center items-center bg-neutral-600 px-0.5 w-[80%] text-center'>
                    <Dropdown name={"CATEGORIES"} hamburgerIcon={true} items={categories} />
                    <ListLink name={"HOME"} dist={HOME} />
                    <ListLink name={"SHOP"} dist={SHOP} />
                    <ListLink name={"ABOUT"} dist={ABOUT} />
                    <ListLink name={"CONTACT"} dist={CONTACT} />
                    <Dropdown name={"PAGES"} items={pages} />
                </ul>
            </div>
        </div>
    );
}