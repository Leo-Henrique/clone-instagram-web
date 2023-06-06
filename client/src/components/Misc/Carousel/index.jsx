import { useEffect, useRef } from "react";
import useDrag from "./hooks/useDrag";
import useVisibility from "./hooks/useVisibility";
import * as Styled from "./style";

export default function Carousel({ children }) {
    const containerRef = useRef(null);
    const innerRef = useRef(null);
    const { initialDisplacement, ...dragEvents } = useDrag({ containerRef, innerRef });

    useVisibility({ containerRef, innerRef });

    useEffect(() => {
        const observer = new ResizeObserver(() => {
            initialDisplacement();
        });

        observer.observe(containerRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <Styled.Wrapper ref={containerRef} {...dragEvents}>
            <Styled.Inner ref={innerRef}>{children}</Styled.Inner>
        </Styled.Wrapper>
    );
}
