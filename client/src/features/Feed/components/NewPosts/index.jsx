import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import useMotion from "../../../../hooks/useMotion";
import * as Styled from "./style";
import { resetWarn } from "../../slices/newPosts";

export default function NewPosts({ refetch }) {
    const [headerHeight, setHeaderHeight] = useState("0px");
    const {
        newPosts: { show },
        breakpoints: { isBreakpointMd },
    } = useSelector(state => state);
    const motionProps = useMotion({
        variants: {
            initial: { opacity: 0, y: -30 },
            animate: { opacity: 1, y: 0 },
        },
    });
    const dispatch = useDispatch()
    const showFeed = () => {
        refetch();
        dispatch(resetWarn());
    }

    useEffect(() => {
        if (isBreakpointMd) {
            const header = document.getElementById("header");

            setHeaderHeight(`${header.offsetHeight}px`);
        } else setHeaderHeight("0px");
    }, [isBreakpointMd]);

    return (
        <AnimatePresence>
            {show && (
                <Styled.Wrapper {...motionProps} $headerHeight={headerHeight}>
                    <button type="button" onClick={showFeed}>
                        Novas publicações
                    </button>
                </Styled.Wrapper>
            )}
        </AnimatePresence>
    );
}
