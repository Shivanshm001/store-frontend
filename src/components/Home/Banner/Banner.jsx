import React from 'react';
import { motion } from 'framer-motion';
import images from './images/images';
import { textContainerVariants, textVariants } from './animationVariants';


export function Banner() {
  return (
    <div className='min-h-screen grid-cols-2 grid'>
      <div className='col-span-1 grid place-items-center'>
        <motion.div
          className='min-w-full flex flex-col gap-2 justify-center items-start p-8'
          initial="hidden"
          animate="show"
          variants={textContainerVariants}
        >
          <motion.p
            className={"font-semibold  tracking-wider text-yellow-400 font-poppins pl-1"}
            variants={textVariants}
          >
            WELCOME,
          </motion.p>

          <motion.p
            className={"text-6xl font-poppins font-bold tracking-wide px-0 mx-0"}
            variants={textVariants}>
            To the store
          </motion.p>

          <motion.p
            className={"text-neutral-400 pl-2"}
            variants={textVariants}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos cum veritatis tenetur quos sunt quod nihil sapiente ab debitis odio natus maxime minima totam ex omnis repellendus, unde libero. Ut.
          </motion.p>
        </motion.div>
      </div>

      <div className='col-span-1 w-full h-screen bg-black'>

      </div>
    </div>
  );
}