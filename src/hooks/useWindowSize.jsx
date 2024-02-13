import React, { useEffect, useState } from 'react';


export function useWindowSize() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);

    window.addEventListener('resize', () => {
        setWindowHeight(window.innerHeight);
        setWindowWidth(window.innerWidth);
    });

    return [innerWidth, innerHeight];
}