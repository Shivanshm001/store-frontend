import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FcPrevious, FcNext } from "react-icons/fc";
import { fetchPageData, filterPageData } from '../../../redux/shop/shop.slice';
import { useSearchParams } from 'react-router-dom';



function Button({ children, onClick, disable }) {
    return (
        <button
            onClick={onClick}
            disabled={disable}
            className='text-3xl rounded bg-gray-300 p-2 text-black hover:bg-gray-400 active:scale-95 disabled:bg-gray-500'>
            {children}
        </button>
    );
}
export function Pagination() {
    const [searchParams, setSearchParams] = useSearchParams();
    const { currentPage, totalPages, filtered } = useSelector(store => store.shopPage);
    const [page, setPage] = useState(1);
    const dispatch = useDispatch();


    useEffect(() => {
        if (filtered) {
            const filters = {
                price: searchParams.get('price'),
                company: searchParams.get('company'),
                category: searchParams.get('category'),
                page: page
            };
            dispatch(filterPageData({ filters }));
        } else {
            dispatch(fetchPageData({ page }));
        }
    }, [page]);
    return (
        <>
            <div className='w-full flex justify-center items-center gap-8 mt-4'>
                <Button onClick={() => setPage(prev => prev - 1)} disable={(currentPage <= 1)}>
                    <FcPrevious />
                </Button>
                <span>{currentPage} / {totalPages}</span>
                <Button onClick={() => setPage(prev => prev + 1)} disable={(currentPage >= totalPages)}>
                    <FcNext />
                </Button>
            </div>
        </>
    );
}
