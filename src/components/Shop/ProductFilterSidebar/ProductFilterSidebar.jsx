import React, { useEffect, useState, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { fetchPageData, filterPageData } from '../../../redux/shop/shop.slice';
import categories from '../../../json/categories.json';
import { CategoryInput } from './CategoryInput';
import { CompanyInput } from './CompanyInput';
const categoryArray = Object.values(categories).map(item => item.name);

const COMPANIES = ["Apple", "Zara", "Samsung", "Oppo", "Levi's"];
const MIN_PRICE = 100;
const MAX_PRICE = 1_000_000;
const MIN_PRICE_STEP = 100;



export function ProductFilterSidebar() {
    //State hooks
    const [searchParams, setSearchParams] = useSearchParams();
    const [localPrice, setLocalPrice] = useState(MAX_PRICE);
    const [localCategory, setlocalCategory] = useState("");
    const [localCompany, setLocalCompany] = useState("");
    //Redux hooks
    const dispatch = useDispatch();

    //Router hooks
    const location = useLocation();
    const navigate = useNavigate();

    const filters = {
        price: Number(localPrice),
        company: localCompany,
        category: localCategory,
        page: 1
    };


    //On form submission
    function handleFormSubmit(e) {
        e.preventDefault();
        updateURL();
        dispatch(filterPageData(filters));
        navigateToUrl(location.pathname, location.search);
    };


    function resetFilters() {
        setLocalCompany('');
        setlocalCategory('');
        setLocalPrice('');
        dispatch(fetchPageData(1));
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

    function navigateToUrl(pathname, search) {
        navigate({
            pathname: pathname,
            search: search,
        });
    }

    UIEvent;
    useEffect(() => {
        const price = searchParams.get('price') ?? null;
        const company = searchParams.get('company') ?? null;
        const category = searchParams.get('category') ?? null;
        const filters = {};
        if (price) {
            setLocalPrice(price);
            filters.price = price;
        }
        if (company) {
            setLocalCompany(company);
            filters.company = company;
        }
        if (category) {
            setlocalCategory(category);
            filters.category = category;
        }
        dispatch(filterPageData(filters));
    }, [searchParams]);
    return (
        <form className='' onSubmit={handleFormSubmit}>
            <div className='flex flex-col gap-8'>
                <h1 className='text-2xl font-semibold tracking-wide mb-3'>Categories</h1>
                <div className='flex flex-col gap-4 '>
                    {
                        categoryArray.map((item, i) => {
                            return <CategoryInput
                                item={item}
                                checked={item.toLowerCase() === localCategory.toLowerCase()} onChange={(e) => setlocalCategory(e.target.value)}
                                value={item.toLowerCase()}
                                key={i} />;
                        })
                    }
                </div>
            </div>

            <div className='flex flex-col gap-4 mt-8'>
                <h1 className='text-2xl font-semibold tracking-wide my-3'>Brand</h1>
                {
                    COMPANIES.map((item, i) => {
                        return <CompanyInput
                            checked={item === localCompany}
                            item={item}
                            onChange={(e) => setLocalCompany(e.target.value)}
                            key={i} />;
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
                    value={localPrice ?? MAX_PRICE}
                    onChange={(e) => setLocalPrice(e.target.value)}
                    min={MIN_PRICE}
                    step={MIN_PRICE_STEP}
                    max={MAX_PRICE}
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
