import React from 'react'
import { useLocation } from 'react-router-dom'

import { AiOutlineRight, AiFillHome } from 'react-icons/ai';
import { Crumb } from './Crumb/Crumb';

export default function BreadCrumb() {
    const location = useLocation();
    let crumbLink = "";

    const pathname = decodeURIComponent(location?.pathname);

    const crumbs = pathname.split("/").filter(el => el !== "");
    console.log(crumbs)

    return (

        <nav className="flex py-2" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <Crumb icon={<AiFillHome />} link={"/"} name={"Home"} />
                {
                    crumbs &&
                    crumbs.map((crumb, index) => {
                        crumbLink += `/${crumb}`;
                        return (
                            <Crumb
                                key={index}
                                icon={<AiOutlineRight />}
                                link={crumbLink}
                                name={crumb}
                                isLast={(index === (crumbs.length - 1))}
                            />
                        )
                    }
                    )
                }
            </ol>
        </nav>

    )
}