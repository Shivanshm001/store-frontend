import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProductByIDRedux } from '../../redux/products/product.slice.actions';
import { LoadingRing } from '../SharedComponents/LoadingRing/LoadingRing';
import { ProductDetails } from './ProductDetails/ProductDetails';


export function SingleProduct() {
    const { productID } = useParams();
    const { product, isLoading, error } = useSelector(store => store.products);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProductByIDRedux({ productID }));
    }, [productID]);
    return (
        <div className=''>
        {
            isLoading ?
            <div className="w-[100vw] h-screen grid place-items-center">
                 <LoadingRing />
            </div>
            : <div>
                <ProductDetails data={product}/>
            </div>
        }
        </div>
    );
}