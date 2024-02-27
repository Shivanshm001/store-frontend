//Hooks
import React, { useEffect } from 'react';
import { useDeferredValue } from 'react';
import { useScrollIntoView } from 'hooks/useScrollIntoView';
//Components
import { ProductCard } from 'components/ProductCard/ProductCard';
import { LoadingRing } from 'components/SharedComponents/LoadingRing/LoadingRing';
import { Pagination } from './Pagination/Pagination';
import { ProductFilterSidebar } from './ProductFilterSidebar/ProductFilterSidebar';
//Redux
import { useDispatch, useSelector } from 'react-redux';

export function ShopPage() {
    const [shopRef, scrollIntoView] = useScrollIntoView();
    const { products, error, isLoading } = useSelector(store => store.shopPage);
    const deferredProducts = useDeferredValue(products);

    useEffect(() => { scrollIntoView(); }, [deferredProducts]);


    return (
        <div className='grid place-items-center pt-4'>
            <div className='grid grid-cols-5 max-w-[90%] min-w-[90%] '>
                <div className='col-span-1 min-h-max p-4 border-r border-r-gray-100'>
                    <ProductFilterSidebar />
                </div>
                <div className='col-span-4 min-h-screen'>
                    <div ref={shopRef} className="relative grid w-full grid-cols-3 justify-evenly gap-4 bg-gray-100 min-h-screen ">
                        {isLoading
                            ? <div className='absolute top-1/2 right-1/2'><LoadingRing /></div>
                            : ((deferredProducts) && Array.isArray(deferredProducts))
                            && deferredProducts.map((product, i) => {
                                return <div className='scale-90' key={i}>
                                    <ProductCard key={i} {...product} context={"shop"}/>;
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
