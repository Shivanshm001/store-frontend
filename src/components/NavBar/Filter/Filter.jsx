import React, { useState } from 'react'
import categories from '../../../json/categories.json';


function Selection({ options, type }) {
    const [selected, setSelected] = useState('');

    return (
        <>
            <select id="countries" value={selected} onChange={(e) => setSelected(e.target.value)}
                className="bg-gray-100 border border-gray-300 text-neutral-700 text-sm rounded-xl ring-1 focus:ring-blue-500  block w-min p-2.5 outline-none ">
                <option defaultValue={""}>{type}</option>
                {
                    Array.isArray(options) && options.map(option =>
                        <option value={option} key={option}>
                            {option}
                        </option>
                    )
                }
            </select>
        </>
    )
}

export function Filter() {
    return (
        <>
            <Selection options={categories} type={"Category"} />
        </>
    )
}
