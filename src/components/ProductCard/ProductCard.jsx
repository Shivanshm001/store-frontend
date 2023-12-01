import React from "react";
import { QuickView } from './QuickView';
import { AddToCartBtn } from './AddToCartBtn';
import { AddToWishlistBtn } from "./AddToWishlistBtn";


export function ProductCard({ productID, imageUrl, name, price, featured, link }) {


    return (
        <div
            id="card"
            key={name}
            className=" flex h-full p-4 transition-transform transform duration-300 justify-center items-center"
        >
            {/* Display your card content here */}

            <div className="">
                <div className="relative group ">
                    <img src={imageUrl} alt={name} className="min-w-full max-w-full min-h-[300px] max-h-[300px]  object-cover" />
                    {
                        featured &&
                        <span className="absolute top-3 left-0 bg-lime-500 text-xs font-semibold text-white p-2 shadow-md tracking-wide  shadow-lime-900">Featured</span>
                    }

                    <div className="absolute -bottom-10 -z-10 opacity-0 group-hover:z-10 group-hover:opacity-100 group-hover:bottom-0 transition-all duration-300 flex justify-center items-end w-full gap-2">
                        <AddToCartBtn productID={productID}/>
                        <QuickView />
                        <AddToWishlistBtn />
                    </div>
                </div>
                <div className="flex flex-col mt-4">

                    <h3 className="text-xl text-center font-extralight text-neutral-800 tracking-wide">{name}</h3>
                    <h3 className="text-xl text-center text-yellow-500 opacity-75 tracking-wide">${price ? price : 0}</h3>
                </div>
            </div>

        </div>
    );
}
