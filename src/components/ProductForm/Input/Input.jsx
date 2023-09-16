import React from 'react'

export function Input({ type, name, value, onChange, placeholder, label }) {
    return (
        <div className={label ? "flex  cursor-pointer" : "flex flex-col gap-2 w-full"}>
            <label htmlFor={name} className={label ? "m-2" : "text-xs font-semibold"}>
                <p className={`first-letter:uppercase`}>{label ? label : name} :*</p>
            </label>
            <input
                id={name}
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                required={type === "checkbox" ? false : true}
                checked={type === "checkbox" && value}
                className={` p-2 rounded outline-gray-600 bg-gray-200 text-neutral-900`}
            />
        </div>
    )
}
