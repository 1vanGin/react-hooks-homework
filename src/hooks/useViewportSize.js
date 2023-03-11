import {useEffect, useRef, useState} from "react";

export function useViewportSize() {
    const isClient = typeof window === 'object';
    const lastWidth = useRef();
    const lastHeight = useRef();

    function getSize() {
        return {
            width: isClient ? window.innerWidth : undefined,
            height: isClient ? window.innerHeight : undefined
        }
    }

    const [windowSize, setWindowSize] = useState(getSize)

    useEffect(() => {
        if (!isClient) {
            return false
        }

        function handleResize() {
            if (window?.innerWidth !== lastWidth.current || window?.innerHeight !== lastHeight.current) {
                const {height, width} = getSize();
                lastHeight.current = height;
                lastWidth.current = width;
                setWindowSize({height, width})
            }
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return windowSize
}