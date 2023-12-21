import React, { useRef } from 'react';


export function useScrollIntoView() {
    const scrollRef = useRef(null);
    const scrollIntoView = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return [scrollRef, scrollIntoView];
}