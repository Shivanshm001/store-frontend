import React from 'react'
import { RiDeleteBin7Line } from 'react-icons/ri';
import { Rating } from './Rating';
import { Currency } from './Currency';
import { useDispatch } from 'react-redux';
import { deleteProduct } from '../../redux/products/productsSlice';
import { Link } from 'react-router-dom';








export function ProductCard({ productID, name, category, company, featured, price, rating }) {

    const dispatch = useDispatch();
    function handleDelete(e){
        e.preventDefault();
        e.stopPropagation();
        dispatch(deleteProduct(productID))
    }
    return (
        <Link to={`/update/${productID}`} replace={true}>
            <div id={productID} className='w-[600px] max-w-[600px] min-h-[150px] shadow-md shadow-gray-400 rounded-lg p-4 bg-gradient-to-tr from-blue-500 via-blue-400 to-blue-300 text-neutral-800'>
                <button className='w-full' onClick={handleDelete}>
                    <span>
                        <RiDeleteBin7Line className='float-right text-2xl' />
                    </span>
                </button>
                <p className='text-sm font-semibold'>{company}</p>
                <h1 className='font-semibold text-2xl tracking-wide flex justify-start items-center gap-2'>
                    <span>{name}</span>
                    <span className='text-end text-xs'>{featured && "🙌"}</span>
                </h1>
                <h2 className='text-sm'>{category}</h2>
                <p>
                    <Rating rating={rating} />
                </p>
                <Currency type="USD" amount={price} />
            </div>
        </Link>
    )
}
