import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../../redux/products/productsSlice';
import { ProductCard } from '../ProductCard/ProductCard';


export function MainView() {
    const dispatch = useDispatch();
    const { products } = useSelector(store => store.products);
    useEffect(() => {
        dispatch(getAllProducts());
        if (products) console.log(products);
    }, []);

    return (
        <main>
            <div className='flex justify-evenly items-center gap-4 flex-wrap p-4'>
                {
                    products
                    && Array.isArray(products)
                    && products.map(product => {
                        return <ProductCard {...product} key={product.productID} />
                    })
                }
            </div>
        </main>
    )
}
