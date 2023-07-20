import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import useMotion from "../../../../hooks/useMotion";
import { updateFeed } from "../../slices/newPosts";
import * as Styled from "./style";

export default function NewPosts() {
    const dispatch = useDispatch();
    const isBreakpointMd = useSelector(
        ({ breakpoints }) => breakpoints.isBreakpointMd
    );
    const motionProps = useMotion({
        variants: {
            initial: { opacity: 0, y: -30 },
            animate: { opacity: 1, y: 0 },
        },
    });
    const [headerHeight, setHeaderHeight] = useState("0px");

    useEffect(() => {
        if (isBreakpointMd) {
            const header = document.getElementById("header");

            setHeaderHeight(`${header.offsetHeight}px`);
        } else setHeaderHeight("0px");
    }, [isBreakpointMd]);

    return (
        <Styled.Wrapper {...motionProps} $headerHeight={headerHeight}>
            <button type="button" onClick={() => dispatch(updateFeed())}>
                Novas publicações
            </button>
        </Styled.Wrapper>
    );
}
