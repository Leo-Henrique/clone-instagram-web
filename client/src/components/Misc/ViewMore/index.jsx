import { useEffect, useRef, useState } from "react";
import * as Styled from "./style";

export default function ViewMore({ className, children, maxRows }) {
    const textRef = useRef(null);
    const [hasLongText, setHasLongText] = useState(null);
    const [expand, setExpand] = useState(false);

    useEffect(() => {
        const { current } = textRef;

        setHasLongText(current.scrollHeight > current.clientHeight);
    }, []);

    return (
        <div className={className}>
            <Styled.Text ref={textRef} $maxRows={maxRows} $expand={expand}>
                {children}
            </Styled.Text>

            {hasLongText && (
                <Styled.Button onClick={() => setExpand(!expand)}>
                    {expand ? "Ver menos" : "Ver mais"}
                </Styled.Button>
            )}
        </div>
    );
}
