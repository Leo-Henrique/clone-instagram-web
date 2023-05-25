import { useCallback, useEffect, useRef, useState } from "react";

export default function useSize(dimension, state) {
    const element = useRef();
    const [size, setSize] = useState("0px");
    const hasState = state !== undefined;
    const addSize = useCallback(() => {
        const property = `offset${dimension}`;

        setSize(`${element.current[property]}px`);
    }, []);

    useEffect(() => {
        const addEvent = () => window.addEventListener("resize", addSize);
        const removeEvent = () => window.removeEventListener("resize", addSize);

        addSize();
        if (hasState) state ? addEvent() : removeEvent();
        else addEvent();

        return () => removeEvent();
    }, [hasState && state]);

    return { element, size };
}
