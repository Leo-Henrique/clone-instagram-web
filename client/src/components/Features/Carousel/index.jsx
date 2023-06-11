import { useEffect, useRef } from "react";
import useDrag from "./hooks/useDrag";
import useVisibility from "./hooks/useVisibility";
import * as Styled from "./style";

export default function Carousel({ children, checkVisible }) {
    const containerRef = useRef(null);
    const innerRef = useRef(null);
    const visibleClass = useVisibility({ containerRef, innerRef, checkVisible });
    const { adjustDisplacement, ...dragEvents } = useDrag({
        containerRef,
        innerRef,
        visibleClass,
    });

    useEffect(() => {
        const observer = new ResizeObserver(() => {
            adjustDisplacement();
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
