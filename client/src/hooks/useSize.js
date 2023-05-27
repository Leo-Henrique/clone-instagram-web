import { useEffect, useRef, useState } from "react";

export default function useSize() {
    const element = useRef();
    const [width, setWidth] = useState("0px");
    const [height, setHeight] = useState("0px");

    useEffect(() => {
        const observer = new ResizeObserver(entries => {
            entries.forEach(entry => {
                const [sizes] = entry.borderBoxSize;

                setWidth(`${sizes.inlineSize}px`);
                setHeight(`${sizes.blockSize}px`);
            });
        });

        observer.observe(element.current);
        return () => observer.disconnect();
    }, []);

    return { element, width, height };
}
