import React from 'react';
import { Link } from "react-router-dom";

export function QuickView({productID, title}) {
    return (
        <Link to={`/product/${productID}`} title={title} className="bg-white  text-lg font-light px-3 py-1 opacity-80">Quick view</Link>
    );
}
