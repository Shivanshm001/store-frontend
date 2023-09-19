import React from "react";
import { Link } from "react-router-dom";


export function Card({ image, name, price, featured, link }) {


    return (
        <>

            <div
                key={name}
                className="w-1/4 flex h-full p-4 transition-transform transform duration-300 hover:scale-105"
            >
                {/* Display your card content here */}

                <div>
                <div className="relative group">
                    <img src={image} alt={name} className="min-w-full max-w-full min-h-[270px] object-cover" />
                    {
                        featured &&
                        <span className="absolute top-3 left-0 bg-lime-500 text-xs font-semibold text-white p-2 shadow-md tracking-wide  shadow-lime-900">Featured</span>
                    }

                    <div className="absolute -bottom-10 -z-10 opacity-0 group-hover:z-10 group-hover:opacity-100 group-hover:bottom-0 transition-all duration-300 flex justify-center items-center w-full">
                        <span className="bg-white text-lg font-light px-3 py-1">Quick view</span>
                    </div>
                </div>
                <div className="flex flex-col gap-2 mt-4">

                    <h3 className="text-2xl text-center font-extralight text-neutral-800 tracking-wide">{name}</h3>
                    <h3 className="text-xl text-center font-semibold text-yellow-500 opacity-75 tracking-wide">${price ? price : 0}</h3>
                </div>
                </div>

            </div>
        </>
    );
}
