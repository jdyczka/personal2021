import React, { useEffect } from 'react'

export default function WithIntersectionObserver({ children, domRef, options, callback }) {

    useEffect(() => {
        let observerRefValue = null; // <-- variable to hold ref value

        const observer = new IntersectionObserver(entries => callback(entries), options);

        if (domRef.current) {
            observer.observe(domRef.current);
            observerRefValue = domRef.current; // <-- save ref value
        }

        return () => {
            if (observerRefValue) observer.unobserve(observerRefValue); // <-- use saved value
        };
    }, [domRef]);

    return (
        <>
            {children}
        </>
    )
}