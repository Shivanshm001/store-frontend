export const parentVariants = {
    hidden: {
        opacity: 0,
    },

    visible: {
        opacity: 1
    }
};


export const childVariants = {
    hidden: { y: -20, opacity: 0, },
    visible: {
        y: 0, opacity: 1,
        transition: { bounce: 1 }
    },
    remove: { y: -20, opacity: 0, }
};