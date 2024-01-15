import React from 'react';
import { motion } from 'framer-motion';
import { textContainerVariants, textVariants } from '../animationVariants';
import {Link} from 'react-router-dom';

export function TextAnimation() {
    return (
        <div className='col-span-1 grid place-items-center'>
            <motion.div
                className='min-w-full flex flex-col gap-4 justify-center items-start p-8'
                initial="hidden"
                animate="show"
                variants={textContainerVariants}
            >
                <motion.p
                    className={"font-semibold text-lg  tracking-wider text-yellow-400 font-poppins pl-1"}
                    variants={textVariants}
                >
                    WELCOME
                </motion.p>

                <motion.p
                    className={"text-8xl font-poppins font-bold tracking-wide px-0 mx-0"}
                    variants={textVariants}>
                    To the store
                </motion.p>

                <motion.p
                    className={"text-neutral-600 pl-2"}
                    variants={textVariants}
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos cum veritatis tenetur quos sunt quod nihil sapiente ab debitis odio natus maxime minima totam ex omnis repellendus, unde libero. Ut.
                </motion.p>
                <motion.div
                className='my-4 mx-1'
                variants={textVariants}>
                    <Link to={"/shop"} className="px-3 py-2 text-neutral-50 tracking-wide  bg-yellow-400 hover:bg-yellow-500">SHOP NOW</Link>
                </motion.div>
            </motion.div>
        </div>
    );
}