import { useEffect, useState } from 'react';

export const useScrollHeight = () => {
    const [windowHeight, setWindowHeight] = useState(0);
    const [scroll, setScroll] = useState(0);

    const onScrollHandler = () => {
        setScroll(window.pageYOffset || document.documentElement.scrollTop);
    };

    useEffect(() => {
        setWindowHeight(document.documentElement.clientHeight);
        document.addEventListener('scroll', onScrollHandler);

        return () => {
            document.removeEventListener('scroll', onScrollHandler);
        };
    }, []);

    if (scroll > windowHeight) {
        return true;
    }
    return false;
};
