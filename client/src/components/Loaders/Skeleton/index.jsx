import useSize from "../../../hooks/useSize";
import * as Styled from "./style.js";

export default function Skeleton({ count = 1, circle = false, ...props }) {
    const { element, width } = circle && useSize();

    return (
        <>
            {Array.from({ length: count }).map((item, index) => (
                <Styled.Wrapper
                    key={index}
                    ref={element}
                    $circle={circle}
                    $computedWidth={circle && width}
                    {...props}
                />
            ))}
        </>
    );
}
