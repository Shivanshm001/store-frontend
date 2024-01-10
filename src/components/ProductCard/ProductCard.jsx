import React, { useEffect, useState } from "react";
import { QuickView } from './OuickView/QuickView';
import { CartBtn } from './CartBtn/CartBtn';
import { WishlistBtn } from "./WishlistBtn/WishlistBtn";
import { useSelector } from 'react-redux';

import { motion } from 'framer-motion';
import { cardVariants, childVariants } from "./animationVariants";


export function ProductCard({ productID, imageUrl, name, price, featured, link, context, direction }) {
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
                    <img src={imageUrl} alt={name} loading="lazy" className="aspect-[9/12] object-center object-cover max-w-[250px] w-[250px] m-auto shadow-md shadow-gray-400" />
                    {
                        featured &&
                        <span className="absolute top-3 left-0 bg-lime-500 text-xs font-semibold text-white p-2 shadow-md tracking-wide  shadow-lime-900">Featured</span>
                    }

                    <motion.div className="flex justify-center items-end w-full gap-0.5"
                        initial={{
                            y: 0,
                            opacity: 0,
                            zIndex: -10,
                        }}

                        variants={childVariants}
                    >
                        <CartBtn productID={productID} isSaved={isSavedCart} />
                        <QuickView />
                        <WishlistBtn productID={productID} isSaved={isSavedWishlist} />
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
