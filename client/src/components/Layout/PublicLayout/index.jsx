import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import useSize from "../../../hooks/useSize";
import Footer from "../../Misc/Footer";
import Header from "../Header";
import Buttons from "./Buttons";
import Warning from "./Warning";
import * as Styled from "./style";

export default function PublicLayout({ children }) {
    const [headerRef, headerHeight] = useSize();
    const [warningRef, warningHeight] = useSize();
    const [showWarning, setShowWarning] = useState(!localStorage.signInWarning);

    return (
        <>
            <Header ref={headerRef} $paddingY="1.2rem">
                <Buttons expandSignIn={false} />
            </Header>

            <AnimatePresence>
                {showWarning && (
                    <Warning ref={warningRef} setShowWarning={setShowWarning} />
                )}
            </AnimatePresence>

            <Styled.Content
                $headerHeight={headerHeight}
                {...(showWarning && { $warningHeight: warningHeight })}
            >
                <main>{children}</main>

                <Footer />
            </Styled.Content>
        </>
    );
}
