import React, { useEffect, useState } from "react";
import { QuickView } from './QuickView';
import { CartBtn } from './CartBtn';
import { WishlistBtn } from "./WishlistBtn";
import { useSelector } from 'react-redux';

export function ProductCard({ productID, imageUrl, name, price, featured, link }) {
    const [isSavedCart, setIsSavedCart] = useState(false);
    const [isSavedWishlist, setIsSavedWishlist] = useState(false);

    const { cart, wishlist } = useSelector(store => store.user);

    useEffect(() => {
        if (cart.includes(productID)) setIsSavedCart(true);
        else setIsSavedCart(false);
    }, [cart]);

    useEffect(() => {
        if (wishlist.includes(productID)) setIsSavedWishlist(true);
        else setIsSavedWishlist(false);
    }, [wishlist]);
    return (
        <div
            id="card"
            key={name}
            className=" flex h-full p-4 transition-transform transform duration-300 justify-center items-center"
        >
            {/* Display your card content here */}

            <div className="group">
                <div className="relative">
                    <img src={imageUrl} alt={name} loading="lazy" className="aspect-[9/12] object-center object-cover max-w-[250px] w-[250px] m-auto" />
                    {
                        featured &&
                        <span className="absolute top-3 left-0 bg-lime-500 text-xs font-semibold text-white p-2 shadow-md tracking-wide  shadow-lime-900">Featured</span>
                    }

                    <div className="absolute -bottom-10 -z-10 opacity-0 group-hover:z-10 group-hover:opacity-100 group-hover:bottom-0 transition-all duration-300 flex justify-center items-end w-full gap-0.5">
                            <CartBtn productID={productID} isSaved={isSavedCart} />
                            <QuickView />
                            <WishlistBtn productID={productID} isSaved={isSavedWishlist} />
                    </div>
                </div>
                <div className="flex flex-col gap-2 mt-4">
                    <h3 className="text-xl text-center font-extralight text-neutral-800 tracking-wide">{name}</h3>
                    <h3 className="text-xl text-center text-yellow-500 opacity-75 tracking-wide">${price ? price : 0}</h3>
                </div>
            </div>

        </div>
    );
}
