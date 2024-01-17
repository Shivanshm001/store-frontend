import React, { useEffect, useLayoutEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProductByIDRedux } from '../../redux/products/productActions';
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
        <>
        {
            isLoading ?
            <div className="w-[100vw] h-screen grid place-items-center">
                 <LoadingRing />
            </div>
            : <div>
                <ProductDetails data={product}/>
            </div>
        }
        </>
    );
}