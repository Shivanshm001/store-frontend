import React, { useState } from 'react';
import { ProductFilterSidebar } from './ProductFilterSidebar/ProductFilterSidebar';
import { useSelector } from 'react-redux';
import { ProductCard } from '../ProductCard/ProductCard';



export function ShopPage() {
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState(1000);
    const {products} = useSelector(store => store.products)
    return (
        <div className='grid place-items-center pt-4'>
            <div className='grid grid-cols-5 max-w-[90%] min-w-[90%] border border-black min-h-screen'>
                <div className='col-span-1 min-h-max p-4 border-r border-r-gray-100'>
                    <ProductFilterSidebar />
                </div>
                <div className='col-span-4'>
                    <div className="grid w-full grid-cols-3 justify-evenly gap-4">
                        {
                            (products && Array.isArray(products))
                            && products.map((product,i) => {
                                return <ProductCard key={i} {...product} />
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
