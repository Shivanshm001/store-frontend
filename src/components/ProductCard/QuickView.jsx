import React from 'react';
import { Link } from "react-router-dom";

export function QuickView({link, title}) {
    return (
        <Link href={link} title={title} className="bg-white  text-lg font-light px-3 py-1">Quick view</Link>
    );
}
