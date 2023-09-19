import React, { useEffect, useState } from "react";
import { Card } from "./Card";



import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';


export function Carousel({ data }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? data.length - 3 : prevIndex - 1
        );
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === data.length - 3 ? 0 : prevIndex + 1
        );
    };

    // useEffect(() => {
    //     const slideInterval = setInterval(nextSlide,1000);
    //     return () => clearInterval(slideInterval);
    // },[]);
    return (
        <div className="relative w-full overflow-hidden">
            {/* <hr className="p-[1px] w-1/2 mb-4 mx-4 bg-gradient-to-r from-blue-100"/> */}
            <div className="flex justify-evenly items-center">

                {data && Array.isArray(data) &&
                    data.slice(currentIndex, currentIndex + 3).map((card) => (
                        <Card {...card} />
                    ))}
            </div>

            <button
                onClick={prevSlide}
                className="absolute left-0 top-[40%] transform -translate-y-1/2 px-2 py-1 text-3xl h-1/2 text-neutral-400 hover:text-neutral-600 transition-colors duration-150 font-semibold"
            >
                <BsChevronLeft />
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-0 top-[40%] transform -translate-y-1/2 px-2 py-1 text-3xl h-1/2 text-neutral-400 hover:text-neutral-600 font-semibold"
            >
                <BsChevronRight />
            </button>
        </div>
    );
};
