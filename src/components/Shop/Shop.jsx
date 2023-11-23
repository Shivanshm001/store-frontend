import React from 'react';
import { ProductFilterSidebar } from './ProductFilterSidebar/ProductFilterSidebar';
import {  useSelector } from 'react-redux';
import { ProductCard } from '../ProductCard/ProductCard';
import { Pagination } from './Pagination/Pagination';


export function ShopPage() {
   
    const { products, error } = useSelector(store => store.shopPage);
    console.log("Items", products)
   
    return (
        <div className='grid place-items-center pt-4'>
            <div className='grid grid-cols-5 max-w-[90%] min-w-[90%] '>
                <div className='col-span-1 min-h-max p-4 border-r border-r-gray-100'>
                    <ProductFilterSidebar />
                </div>
                <div className='col-span-4'>
                    <div className="grid w-full grid-cols-3 justify-evenly gap-4 bg-gray-100">
                        {
                            (products && Array.isArray(products))
                            && products.map((product, i) => {
                                return <div className='scale-90'>
                                    <ProductCard key={i} {...product} />;
                                    </div>
                            })
                        }
                    </div>

                   <Pagination  />
                </div>
            </div>
        </div>
    );
}
