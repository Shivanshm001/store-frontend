import React from 'react';
import {motion} from 'framer-motion';


export function SidebarButton({type, baseColor, hoverColor, activeColor, onClick, text }) {
    return (
        <motion.button
            initial={{
                scale: 1,
                backgroundColor: baseColor,
                letterSpacing: '0.05rem'
            }}
            whileHover={{
                scale: 1.05,
                backgroundColor: hoverColor,
                letterSpacing: '0.08rem'
            }}
            whileTap={{
                scale: 0.95
            }}
            type={type} className='px-2 py-1 text-white text-sm '
            onClick={onClick}>{text}</motion.button>
    );
}