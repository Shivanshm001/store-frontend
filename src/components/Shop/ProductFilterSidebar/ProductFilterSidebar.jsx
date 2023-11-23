import React, { useEffect, useState } from 'react';
import categories from '../../../json/categories.json';
const categoryArray = Object.values(categories).map(item => item.name);
import { useDispatch, useSelector } from 'react-redux';
import { filterPageData, setFilters } from '../../../redux/shop/shop.slice';
const brands = ["Apple", "Zara", "Samsung", "Oppo", "Levi's",];


export function ProductFilterSidebar() {
    const dispatch = useDispatch();
    const { filters } = useSelector(store => store.shopPage);
    const [category, setCategory] = useState('');
    const [company, setCompany] = useState('');
    const [price, setPrice] = useState(1000);
    const minPrice = 5;

    function handleFormSubmit(e) {
        e.preventDefault();
        const productFilters = { category, company, price };
        dispatch(setFilters({ filters: productFilters }));
    };

    useEffect(() => {
        dispatch(filterPageData(filters))
    },[filters]);


    return (
        <form className='' onSubmit={handleFormSubmit}>
            <div className='flex flex-col gap-8'>
                <h1 className='text-2xl font-semibold tracking-wide mb-3'>Categories</h1>
                <div className='flex flex-col gap-4 '>
                    {
                        categoryArray.map((item, i) => {
                            return <div className='flex flex-col gap-5 cursor-pointer' key={i}>
                                <div className='flex gap-2 my-1 mx-4'>
                                    <input type="radio" name={"category"} id={item} value={category} onChange={(e) => setCategory(e.target.value)} className='outline-none' />
                                    <label htmlFor={item} className={` outline-none cursor-pointer ${category == item ? "bg-yellow-400" : ""}`}>{item}</label>
                                </div>
                            </div>;
                        })
                    }
                </div>
            </div>


            <div className='flex flex-col gap-4 mt-8'>
                <h1 className='text-2xl font-semibold tracking-wide my-3'>Brand</h1>
                {
                    brands.map((item, i) => {
                        return <div className='flex flex-col gap-5 cursor-pointer' key={i}>
                            <div className='flex gap-2 my-1 mx-4'>
                                <input type="checkbox" name={"company"} id={item} value={category} onChange={(e) => setCompany(e.target.value)} />
                                <label htmlFor={item} className='cursor-pointer'>{item}</label>
                            </div>
                        </div>;
                    })
                }
            </div>

            <div>

                <label htmlFor="customRange1" className="text-2xl tracking-wide font-semibold mb-2 inline-block">
                    Price
                </label>

                <div className='flex justify-between text-sm font-semibold tracking-wide'>
                    <p>${minPrice}</p>
                    <p>${price}</p>
                </div>
                <input
                    type="range"
                    className="transparent h-1.5 w-full cursor-pointer appearance-none rounded-lg border-transparent bg-neutral-200"
                    id="customRange1"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    min={0}
                    max={100000}
                />
            </div>

            <div className='flex justify-end  my-4 px-2'>
                <button type='submit' className='px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-white font-semibold text-sm tracking-wider'>FILTER</button>
            </div>
        </form>
    );
}
