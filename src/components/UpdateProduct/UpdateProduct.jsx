import React from 'react'
import { useSelector } from 'react-redux';
// import { ProductForm } from '../ProductForm/ProductForm'



export function UpdateProduct() {
const { isLoading } = useSelector(store => store.products);

    return (
        <div className='w-full min-h-[90dvh] grid place-items-center bg-gray-300'>

            {/* {
                !isLoading &&
                <ProductForm type="update" />
            } */}

        </div>
    )
}
