import { useEffect } from "react";

export default function useVisibility({ containerRef, innerRef, checkVisible }) {
    const visibleClass = "visible";

    useEffect(() => {
        const items = Array.from(innerRef.current.children);
        const handleVisibility = entries => {
            const callback = ({ isIntersecting, target }) => {
                if (isIntersecting) {
                    items.forEach(item => item.classList.remove(visibleClass));
                    target.classList.add(visibleClass);
                }
            };

            entries.forEach(callback);
        };
        const options = {
            root: containerRef.current,
            threshold: 0.6,
        };
        const observer = new IntersectionObserver(handleVisibility, options);

        items.forEach(item => observer.observe(item));
        return () => observer.disconnect();
    }, [checkVisible && checkVisible]);

    return visibleClass;
}
