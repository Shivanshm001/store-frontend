import React, { useEffect, useState } from "react";
import { QuickView } from './OuickView/QuickView';
import { useSelector } from 'react-redux';

import { motion } from 'framer-motion';
import { cardVariants, childVariants } from "./animationVariants";
import { BtnAddToCart } from "../SharedComponents/BtnAddToCart/BtnAddToCart";
import { BtnAddToWishlist } from "../SharedComponents/BtnAddToWishlist/BtnAddToWishlist";
import { FeaturedIcon } from "../SharedComponents/FeaturedIcon/FeaturedIcon";


export function ProductCard({ productID, imageUrl, name, price, featured, context, direction }) {
    const [isSavedCart, setIsSavedCart] = useState(false);
    const [isSavedWishlist, setIsSavedWishlist] = useState(false);

    const { cart, wishlist } = useSelector(store => store.user);


    useEffect(() => {
        if (cart.includes(productID)) setIsSavedCart(true);
        else setIsSavedCart(false);

        if (wishlist.includes(productID)) setIsSavedWishlist(true);
        else setIsSavedWishlist(false);
    }, [cart, wishlist]);



    return (
        <div
            id="card"
            key={name}
            className=" flex h-full p-4 justify-center items-center"
        >

            {/* Display your card content here */}
            <motion.div className=""
                variants={cardVariants}
                initial={cardVariants[context]?.initial}
                animate={cardVariants[context]?.animate}
                exit={cardVariants[context]?.exit}
                custom={direction}
                whileHover="onParentHover"
            >
                <div className="relative">
                <span className="absolute top-2 right-2">
                            <BtnAddToWishlist productID={productID} isSaved={isSavedWishlist} />
                        </span>
                    <img src={imageUrl} alt={name} loading="lazy" className="aspect-[9/12] object-center object-cover max-w-[250px] w-[250px] m-auto shadow-md shadow-gray-400" />
                    {
                        featured &&
                        <span className="absolute top-3 left-4 text-neutral-100">
                            <FeaturedIcon animate={false} />
                        </span>
                    }

                    <motion.div className="flex justify-center items-end w-full gap-2"
                        initial={{
                            y: 0,
                            opacity: 0,
                            zIndex: -10,
                        }}

                        variants={childVariants}
                    >
                        <BtnAddToCart productID={productID} isSaved={isSavedCart} />
                        <QuickView title={name} productID={productID} />
                    </motion.div>
                </div>
                <div className="flex flex-col gap-2 mt-4">
                    <h3 className="text-xl text-center font-extralight text-neutral-800 tracking-wide">{name}</h3>
                    <h3 className="text-xl text-center text-yellow-500 opacity-75 tracking-wide">${price ? price : 0}</h3>
                </div>
            </motion.div>

        </div>
    );
}
