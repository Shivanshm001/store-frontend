import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPageData, filterPageData } from '../../../redux/shop/shop.slice';
import { useSearchParams } from 'react-router-dom';



function Button({ children, onClick, disable }) {
    return (
        <button
            onClick={onClick}
            disabled={disable}
            className='join-item btn'>
            {children}
        </button>
    );
}
export function Pagination() {
    const [searchParams, setSearchParams] = useSearchParams();
    const { currentPage, totalPages, filtered, isLoading } = useSelector(store => store.shopPage);
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
            <div className='flex justify-center items-center my-4'>
                <div className='join'>
                    <Button onClick={() => setPage(prev => prev - 1)} disable={(currentPage <= 1)}>
                        «
                    </Button>
                    <Button>
                        {
                            isLoading ?
                                <span className="loading loading-ring loading-md"></span>
                                : <span>Page {currentPage} of {totalPages}</span>
                        }
                    </Button>
                   
                    <Button onClick={() => setPage(prev => prev + 1)} disable={(currentPage >= totalPages)}>
                        »
                    </Button>
                </div>
            </div>

        </>
    );
}
