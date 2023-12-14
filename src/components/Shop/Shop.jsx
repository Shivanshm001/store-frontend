//Hooks
import React, { useEffect } from 'react';
import { useDeferredValue } from 'react';
//Components
import { ProductCard } from '../ProductCard/ProductCard';
import { Pagination } from './Pagination/Pagination';
import { ProductFilterSidebar } from './ProductFilterSidebar/ProductFilterSidebar';
//Redux
import { useDispatch, useSelector } from 'react-redux';
import { Loading } from './Loading/Loading';
import { filterPageData } from '../../redux/shop/shop.slice';

export function ShopPage() {

    const { products, error, isLoading } = useSelector(store => store.shopPage);
    const { price, company, category } = useSelector(store => store.filters);
    const dispatch = useDispatch();
    const filters = { price, category, company };
    console.log(products);
    const deferredProducts = useDeferredValue(products);
    useEffect(() => {
        dispatch(filterPageData({ filters }));
    }, [price, category, company]);
    return (
        <div className='grid place-items-center pt-4'>
            <div className='grid grid-cols-5 max-w-[90%] min-w-[90%] '>
                <div className='col-span-1 min-h-max p-4 border-r border-r-gray-100'>
                    <ProductFilterSidebar />
                </div>
                <div className='col-span-4 min-h-screen'>
                    <div className="grid w-full grid-cols-3 justify-evenly gap-4 bg-gray-100 min-h-screen ">
                        {isLoading ? <h1>Loading...</h1>
                            :
                            ((deferredProducts) && Array.isArray(deferredProducts))
                            && deferredProducts.map((product, i) => {
                                return <div className='scale-90' key={i}>
                                    <ProductCard key={i} {...product} />;
                                </div>;
                            })
                        }
                    </div>
                    <Pagination />
                </div>
            </div>
        </div>
    );
}
