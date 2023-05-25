import { useEffect, useRef, useState } from "react";

export default function useSize(dimension) {
    const element = useRef();
    const [size, setSize] = useState("0px");

    useEffect(() => {
        const { current } = element;
        const addSize = () => {
            const property = `offset${dimension}`;

            setSize(`${current[property]}px`);
        };

        addSize();
        window.addEventListener("resize", addSize);
        return () => window.removeEventListener("resize", addSize);
    }, []);

    return { element, size };
}
