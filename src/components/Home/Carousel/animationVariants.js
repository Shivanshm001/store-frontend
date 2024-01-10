export const carouselVariants = {
    enter: (direction) => {
        return {
            x: direction > 0 ? 1000 : -1000,
        };
    },
    center: {
        zIndex: 1,
        x: 0,
    },
    exit: (direction) => {
        return {
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
        };
    },
};