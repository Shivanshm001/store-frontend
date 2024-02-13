export const cardVariants = {
    carousel: {
        initial: (direction) => {
            x: direction > 1 ? 100 : -100;
        },
        animate: {
            x: 0,
            transition: {
                type: 'spring',
            }
        },
        exit: {
            x: 0
        }
    },
    shop: {
        initial: {
            scale: 0,
            opacity: 0,
        },

        animate: {
            opacity: 1,
            scale: 1,
            transition: {
                bounce: 1,
                duration: 2,
                ease: 'circInOut'
            }
        },
        exit: {}
    }
};


export const childVariants = { 
    onParentHover: {
        opacity: 1,
        scale: 1,
        y: -42
    }
};
