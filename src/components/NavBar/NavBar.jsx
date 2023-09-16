import React from 'react'

import { Search } from './Search/Search'
import { Filter } from './Filter/Filter'
import { Link } from 'react-router-dom';

import { GrAdd } from 'react-icons/gr';

function Logo() {
    return <Link to={"/"}>
        <h1 className='text-2xl font-bold'>Store</h1>
    </Link>
}
function BtnAddProduct() {
    return <Link to={"/add"} replace={true} className='p-3 mx-4 hover:ring ring-gray-200 active:scale-90 active:bg-gray-300 border rounded-full border-gray-400' title='Add Product'>
        <GrAdd />
    </Link>
}
export function NavBar() {
    return (
        <nav className='w-full bg-white p-4 sticky top-0 shadow-md shadow-gray-200'>
            <div className='flex gap-4'>
                <Logo />
                <div className='w-full flex items-center justify-start'>
                    <Search />
                    <BtnAddProduct />
                </div>
                <Filter />
            </div>
        </nav>
    )
}
