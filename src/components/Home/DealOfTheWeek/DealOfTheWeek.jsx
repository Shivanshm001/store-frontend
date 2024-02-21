import React from 'react'
import { Countdown } from './Countdown/Countdown';

import { Link } from 'react-router-dom';
import dealOfWeek from './images/dealOfWeek.png';
import { SHOP } from '../../../config/urlPaths';

export function DealOfTheWeek() {


    return (
        <div className='min-h-screen w-full px-8 flex items-center '>
            <div className='bg-gray-300 bg-gradient-to-br from-gray-300 to-gray-200 grid grid-cols-2 w-full p-8 '>
                <div className="col-span-1 flex flex-col  gap-8 justify-center items-center">
                    <div className='flex flex-col gap-4'>
                        <h1 className='text-4xl font-semibold text-center w-full tracking-wide'>Deal Of The Week</h1>
                        <hr className='p-0.5 bg-yellow-400 m-auto w-[20%]' />
                    </div>

                    <div className='max-w-[80%] text-center text-neutral-400 text-sm'>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore corporis dolores possimus, totam adipisci ad maiores nihil facilis, rerum incidunt vero veritatis quam. Qui, provident itaque ut commodi voluptatibus odit.</p>

                    </div>
                    <div>
                        <h1 className='text-xl text-yellow-400 font-semibold'>$350.00 <span className='text-sm text-neutral-500 line-through mx-1'>$500.00</span></h1>
                    </div>

                    <div>
                        <Countdown />
                    </div>

                    <div>
                        <Link to={SHOP} className="bg-amber-500 px-6 py-3 text-neutral-100  tracking-wider hover:bg-amber-600 transition-all duration-150 ease-in-out">
                            SHOP NOW
                        </Link>
                    </div>
                </div>
                <div className="col-span-1">
                    <div className=''>
                        <img src={dealOfWeek} alt="" className='min-w-full max-w-full max-h-[500px] object-contain filter contrast-75 ' />
                    </div>
                </div>
            </div>
        </div>
    )
}
