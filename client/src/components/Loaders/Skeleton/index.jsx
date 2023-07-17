import useSize from "../../../hooks/useSize";
import * as Styled from "./style.js";

export default function Skeleton({ count = 1, circle = false, ...props }) {
    const [wrapperRef, wrapperHeight, wrapperWidth] = useSize();

    return (
        <>
            {Array.from({ length: count }).map((item, index) => (
                <Styled.Wrapper
                    key={index}
                    ref={wrapperRef}
                    $circle={circle}
                    $computedWidth={circle && wrapperWidth}
                    {...props}
                />
            ))}
        </>
    );
}
