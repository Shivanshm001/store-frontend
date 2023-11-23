import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FcPrevious, FcNext } from "react-icons/fc";
import { fetchPageData } from '../../../redux/shop/shop.slice';




function Button({ children, onClick }) {
    return (
        <button
            onClick={onClick}
            className='text-3xl rounded bg-gray-300 p-2 text-black hover:bg-gray-400 active:scale-95'>
            {children}
        </button>
    );
}
export function Pagination() {
    const { currentPage, totalPages } = useSelector(store => store.shopPage);
    const [page, setPage] = useState(1);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchPageData({ page }));
    }, [page]);
    return (
        <>
            <div className='w-full flex justify-center items-center gap-8 mt-4'>
                <Button onClick={() => setPage(prev => prev - 1)}>
                    <FcPrevious />
                </Button>
                <Button onClick={() => setPage(prev => prev + 1)}>
                    <FcNext />
                </Button>
            </div>
        </>
    );
}
