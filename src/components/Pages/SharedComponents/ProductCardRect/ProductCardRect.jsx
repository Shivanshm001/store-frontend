import React, { useId } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { motion, AnimatePresence } from 'framer-motion';
import { BtnAddToCart } from '../../../SharedComponents/BtnAddToCart/BtnAddToCart';
import { Link } from 'react-router-dom';
import { SUB_CATEGORIES_MOBILES } from '../../../../config/urlPaths';


function RemoveProductBtn({ handleCloseButton, title }) {
    return <motion.button
        onClick={handleCloseButton}
        title={title}
        initial={{y: 0}}
        whileHover={{ backgroundColor: "rgb(229, 231, 235)", y: 1 }}
        whileTap={{ backgroundColor: "rgb(229, 231, 235)", y: 1 }}
        transition={{ duration : 0.1}}
        className='absolute top-3 right-3 p-1 text-xs bg-red-300 rounded cursor-pointer'>
        Remove 
    </motion.button>;
}

export function ProductCardRect(props) {
    const { productID, name, imageUrl, price, category, company, animationVariants, handleRemove, pageType } = props;
    const randomId = useId();
    function handleCloseButton(e) {
        e.preventDefault();
        handleRemove();
    }

    return (

        <motion.div
            key={randomId}
            variants={animationVariants}
            initial="hidden"
            animate="visible"
            exit="remove"
            className='flex gap-6 items-center max-h-[250px] bg-neutral-50 shadow shadow-gray-300 rounded px-4 py-2 overflow-hidden relative '>
            <RemoveProductBtn handleCloseButton={handleCloseButton} title={`Remove from ${pageType}`} />

            <div className='block overflow-hidden border-r border-r-gray-400 pr-2'>
                <img src={imageUrl} alt={name} width={"220px"} height={"100%"} className='filter saturate-50 aspect-[9/12] rounded' />
            </div>
            <div className='flex flex-col gap-2'>
                <span className='text-lg'>{company}</span>
                <div className='max-w-max'>
                    <motion.a
                        whileHover={{borderBottom: '1px solid rgb(253,224,71)'}}
                        whileTap={{borderBottom: '1px solid rgb(253,224,71)'}}
                        transition={{duration: 0.2}}
                        href='#' className='text-2xl block font-semibold mb-1 pb-1  max-w-fit'>{name}</motion.a>

                    <Link to={`/shop?${SUB_CATEGORIES_MOBILES}`} className='text-xs border border-gray-400 px-1 bg-gray-200 font-semibold capitalize '>{category}</Link>
                </div>
                <p className=' text-sm stext-neutral-700'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, asperiores beatae </p>
                <h2 className='text-xl font-semibold'>${price}</h2>
            </div>
            <div>
                <span>{pageType === "wishlist" && <BtnAddToCart productID={productID} />}</span>
            </div>
        </motion.div>
    );
}
