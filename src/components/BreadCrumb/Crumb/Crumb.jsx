import React from 'react';
import { Link } from 'react-router-dom';

export function Crumb({ icon, link, name, isLast }) {
    return (
        <li>
            <div className="flex items-center">
                {icon}
                {isLast
                    ? <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400 capitalize">{name}</span>
                    : <Link to={link} className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white capitalize">{name}</Link>}
            </div>
        </li>
    );
}