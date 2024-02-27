import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { ProductCard } from "components/ProductCard/ProductCard";
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { carouselVariants } from "./animationVariants";

export function Carousel({ slides }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const slideToShow = 3; // number of slides to show at once

    const prevSlide = () => {
        setDirection(-1);
        setCurrentIndex((prevIndex) => (prevIndex - slideToShow + slides.length) % slides.length);
    };

    const nextSlide = () => {
        setDirection(1);
        setCurrentIndex((prevIndex) => (prevIndex + slideToShow) % slides.length);
    };

    const getSlides = () => {
        let slideArray = [...slides, ...slides, ...slides]; // make sure we have enough slides to loop
        let start = slideArray.length / 3 + currentIndex; // start from the middle third
        return slideArray.slice(start, start + slideToShow);
    };

    return (
        <div className="relative w-full overflow-hidden p-4">
            <AnimatePresence mode="wait" initial={false} custom={direction}>
                <motion.div
                variants={carouselVariants}
                initial="enter"
                animate="center"
                exit="exit"
                custom={direction}
                transition={{
                    duration: 5,
                    ease: 'circInOut',
                    type: 'spring'
                }}
                    className="flex gap-8 justify-center items-center">
                    {
                        getSlides().map((product, i) => {
                            return <ProductCard {...product} key={i} context="carousel" />;
                        })
                    }
                </motion.div>
            </AnimatePresence>
            <button
                onClick={prevSlide}
                className="absolute left-0 top-[40%] transform -translate-y-1/2 px-2 py-1 text-3xl h-1/2 text-neutral-400  font-semibold"
            >
                <BsChevronLeft />
            </button>

            <motion.button

                onClick={nextSlide}
                className="absolute right-0 top-[40%] transform -translate-y-1/2 px-2 py-1 text-3xl h-1/2 text-neutral-400 hover:text-neutral-600  font-semibold"
            >
                <BsChevronRight />
            </motion.button>
        </div>
    );
};
