import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import basketball from './images/basketball.jpg';
import { Carousel } from '../Carousel/Carousel';
import { useDispatch, useSelector } from 'react-redux';
import { getSportsProducts } from '../../../redux/home/home.slice';

export function SportsSection() {
    const dispatch = useDispatch();
    const { sportsProducts } = useSelector(store => store.home);
    useEffect(() => {
        dispatch(getSportsProducts());
    }, []);
    return (
        <div className='grid w-full  min-h-screen grid-cols-4'>
            <div className='col-span-3 grid place-items-center'>
                {sportsProducts && <Carousel data={sportsProducts} />}
            </div>
            <div className=' col-span-1 relative '>
                <img src={basketball} alt="Static iamge" className='min-w-full max-w-full min-h-full object-cover shadow-inner shadow-black scale-90 filter contrast-75' />
                <div className='absolute top-[40%] w-full flex justify-center items-center text-center'>
                    <div className='flex w-full justify-center items-center gap-4 flex-col'>
                        <p className='font-semibold text-neutral-100 tracking-wider text-6xl'>Sports</p>
                        <Link to={"/shop?category=sports"} title='Sports' className='text-white pb-2  text-2xl border-b-2 border-b-white hover:tracking-widest transition-all duration-150'>Discover More</Link>
                    </div>
                </div>
            </div>
            
        </div>
    );
}
