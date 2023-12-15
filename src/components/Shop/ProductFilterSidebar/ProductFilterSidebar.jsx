import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import categories from '../../../json/categories.json';
import {
    setCategory,
    setCompany,
    setPrice
} from '../../../redux/filters/filters.slice';
const categoryArray = Object.values(categories).map(item => item.name);

const BRANDS = ["Apple", "Zara", "Samsung", "Oppo", "Levi's"];
const MIN_PRICE = 100;
const MIN_PRICE_STEP = 100;



export function ProductFilterSidebar() {
    //State hooks
    const [searchParams, setSearchParams] = useSearchParams();
    const [localPrice, setLocalPrice] = useState(searchParams.get('price') || MIN_PRICE);
    const [localCategory, setlocalCategory] = useState(searchParams.get('category') || '');
    const [localCompany, setLocalCompany] = useState(searchParams.get('company') || '');
    //Redux hooks
    const dispatch = useDispatch();

    //Router hooks
    const location = useLocation();
    const navigate = useNavigate();

    //On form submission
    function handleFormSubmit(e) {
        e.preventDefault();
        dispatch(setPrice({ price: localPrice }));
        dispatch(setCategory({ category: localCategory }));
        dispatch(setCompany({ company: localCompany }));

        navigate({
            pathname: location.pathname,
            search: location.search,
        }, {
            replace: true,
        });
    };


    function resetFilters() {
        setLocalCompany('');
        setlocalCategory('');
        setLocalPrice('');
        dispatch(setPrice({ price: localPrice }));
        dispatch(setCategory({ category: localCategory }));
        dispatch(setCompany({ company: localCompany }));
    }


    function updateURL() {
        if (localCategory) searchParams.set('category', localCategory);
        else searchParams.delete('category');
        if (localPrice) searchParams.set('price', localPrice);
        else searchParams.delete('price');
        if (localCompany) searchParams.set('company', localCompany);
        else searchParams.delete('company');
        setSearchParams(searchParams);
    }

    useEffect(() => {
        updateURL();
    }, []);
    useEffect(() => {
        updateURL();
    }, [localCategory, localPrice, localCompany]);



    return (
        <form className='' onSubmit={handleFormSubmit}>
            <div className='flex flex-col gap-8'>
                <h1 className='text-2xl font-semibold tracking-wide mb-3'>Categories</h1>
                <div className='flex flex-col gap-4 '>
                    {
                        categoryArray.map((item, i) => {
                            return <div className='flex flex-col gap-5 cursor-pointer' key={i}>
                                <div className='flex gap-2 my-1 mx-4 cursor-pointer'>

                                    {/* CATEGORY INPUT  */}

                                    <input type="radio" name={"category"} id={item}
                                        checked={item.toLowerCase() === localCategory.toLowerCase()}
                                        value={item.toLowerCase()} onChange={(e) => setlocalCategory(e.target.value)} className='outline-none cursor-pointer' />
                                    <label htmlFor={item} className={`outline-none cursor-pointer}`}>{item}</label>

                                    {/* CATEGORY INPUT END  */}
                                </div>
                            </div>;
                        })
                    }
                </div>
            </div>

            <div className='flex flex-col gap-4 mt-8'>
                <h1 className='text-2xl font-semibold tracking-wide my-3'>Brand</h1>
                {
                    BRANDS.map((item, i) => {
                        return <div className='flex flex-col gap-5 cursor-pointer' key={i}>
                            <div className='flex gap-2 my-1 mx-4'>

                                {/* COMPANIES INPUT  */}

                                <input type="radio" name={"company"} id={item} value={item}
                                    checked={item === localCompany}
                                    onChange={(e) => setLocalCompany(e.target.value)} />
                                <label htmlFor={item} className='cursor-pointer'>{item}</label>

                                {/* COMPANIES INPUT END  */}
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
                    <p>${MIN_PRICE}</p>
                    <p>${localPrice}</p>
                </div>

                {/* PRICE INPUT  */}
                <input
                    type="range"
                    className="transparent h-1.5 w-full cursor-pointer appearance-none rounded-lg border-transparent bg-neutral-200"
                    id="customRange1"
                    value={localPrice}
                    onChange={(e) => setLocalPrice(e.target.value)}
                    min={MIN_PRICE}
                    step={MIN_PRICE_STEP}
                    max={10000}
                />
                {/* PRICE INPUT END */}
            </div>

            <div className='flex justify-between  my-4 px-2 '>
                <button type='submit' className='px-4 py-2 bg-gray-400 hover:bg-gray-500 text-white font-semibold text-sm tracking-wider active:scale-90'
                    onClick={() => {
                        resetFilters();
                        updateURL();
                    }}>RESET</button>
                <button type='submit' className='px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-white font-semibold text-sm tracking-wider active:scale-90'>FILTER</button>
            </div>
        </form>
    );
}
