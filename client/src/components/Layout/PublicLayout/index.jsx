import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useSelector } from "react-redux";
import useSize from "../../../hooks/useSize";
import Footer from "../../Misc/Footer";
import Header from "../Header";
import Buttons from "./Buttons";
import Warning from "./Warning";
import * as Styled from "./style";

export default function PublicLayout({ children }) {
    const isBreakpointMd = useSelector(
        ({ breakpoints }) => breakpoints.isBreakpointMd
    );
    const [headerRef, headerHeight] = useSize();
    const [warningRef, warningHeight] = useSize();
    const [showWarning, setShowWarning] = useState(!localStorage.signInWarning);

    return (
        <>
            <Header ref={headerRef} $paddingY="1.2rem">
                <Styled.Logo />

                <Buttons expandSignIn={false} />
            </Header>

            <Styled.Content
                $headerHeight={headerHeight}
                {...(showWarning && { $warningHeight: warningHeight })}
            >
                <main>{children}</main>

                <Footer $padding={isBreakpointMd ? "3rem 0" : "5rem 0 3rem"} />
            </Styled.Content>

            <AnimatePresence>
                {showWarning && (
                    <Warning ref={warningRef} setShowWarning={setShowWarning} />
                )}
            </AnimatePresence>
        </>
    );
}
