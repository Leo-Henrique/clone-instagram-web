import { AnimatePresence } from "framer-motion";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useClose from "../../../hooks/useClose";
import useMotion from "../../../hooks/useMotion";
import * as Styled from "./style";

export default function Modal({ children, showModal: show, setShowModal: setShow }) {
    const isBreakpointMd = useSelector(
        ({ breakpoints }) => breakpoints.isBreakpointMd
    );
    const { notClose } = useClose(show, setShow);
    const [dialogVariants, setDialogVariants] = useState(null);
    const wrapperMotion = useMotion();
    const dialogMotion = useMotion(
        dialogVariants ? { variants: dialogVariants } : {}
    );

    useEffect(() => {
        if (isBreakpointMd) {
            setDialogVariants({
                initial: { opacity: 0, y: 50 },
                animate: { opacity: 1, y: 0 },
            });
        } else {
            setDialogVariants({
                initial: { opacity: 0, scale: 0.5 },
                animate: { opacity: 1, scale: 1 },
            });
        }
    }, [isBreakpointMd]);

    useEffect(() => {
        if (show) document.body.classList.add("hide-scrollbar");
        else document.body.classList.remove("hide-scrollbar");
    }, [show]);

    return (
        <AnimatePresence>
            {show && (
                <Styled.Wrapper {...wrapperMotion}>
                    <Styled.Dialog {...dialogMotion} ref={notClose}>
                        {children}
                    </Styled.Dialog>
                </Styled.Wrapper>
            )}
        </AnimatePresence>
    );
}
