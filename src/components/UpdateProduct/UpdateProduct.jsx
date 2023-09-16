import React from 'react'
import { ProductForm } from '../ProductForm/ProductForm'
import { useSelector } from 'react-redux';



export function UpdateProduct() {
const { isLoading } = useSelector(store => store.products);

    return (
        <div className='w-full min-h-[90dvh] grid place-items-center bg-gray-300'>

            {
                !isLoading &&
                <ProductForm type="update" />
            }

        </div>
    )
}
