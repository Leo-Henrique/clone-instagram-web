import { useEffect, useRef, useState } from "react";

export default function useSize() {
    const element = useRef();
    const [width, setWidth] = useState("0px");
    const [height, setHeight] = useState("0px");

    useEffect(() => {
        const { current } = element;

        if (current) {
            const observer = new ResizeObserver(entries => {
                entries.forEach(entry => {
                    const [sizes] = entry.borderBoxSize;

                    setWidth(`${sizes.inlineSize}px`);
                    setHeight(`${sizes.blockSize}px`);
                });
            });

            observer.observe(current);
            return () => observer.disconnect();
        }
    }, [element.current]);

    return { element, width, height };
}
