import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import api from "../../../../app/api";
import useMotion from "../../../../hooks/useMotion";
import { updateUser } from "../../../auth/slices/auth";
import { resetNewPosts } from "../../slices/newPosts";
import * as Styled from "./style";

export default function NewPosts() {
    const dispatch = useDispatch();
    const show = useSelector(({ newPosts }) => newPosts.show);
    const hasContentInFeed = useSelector(({ auth }) => auth.user.hasContentInFeed);
    const isBreakpointMd = useSelector(
        ({ breakpoints }) => breakpoints.isBreakpointMd
    );
    const motionProps = useMotion({
        variants: {
            initial: { opacity: 0, y: -30 },
            animate: { opacity: 1, y: 0 },
        },
    });
    const showUpdatedFeed = () => {
        if (hasContentInFeed)
            dispatch(api.endpoints.getPosts.initiate(undefined, { forceRefetch: true }));
        else dispatch(updateUser({ hasContentInFeed: true }));

        dispatch(resetNewPosts());
    };

    const [headerHeight, setHeaderHeight] = useState("0px");

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
                    <button type="button" onClick={showUpdatedFeed}>
                        Novas publicações
                    </button>
                </Styled.Wrapper>
            )}
        </AnimatePresence>
    );
}
