export const textContainerVariants = {
    hidden: {
        opacity: 0,
    },

    show: {
        opacity: 1,
        transition: {
            delayChildren: 0,
            staggerChildren: 0.8
        }
    }
};


export const textVariants = {
    hidden: {
        opacity: 0,
        y: 100,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 2,
            type: "spring",
            bounce: 0,
            repeat: Infinity,
            repeatDelay: 2,
            repeatType: "mirror"
        }
    }
};
