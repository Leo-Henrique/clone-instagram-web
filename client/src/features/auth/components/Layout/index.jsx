import { m } from "framer-motion";

import Footer from "../../../../components/Misc/Footer";
import useMotion from "../../../../hooks/useMotion";
import * as Styled from "./style";

const Template = ({ children }) => {
    const motionProps = useMotion({ variants: "fadeInRight" });

    return (
        <Styled.Wrapper>
            <Styled.Column {...motionProps} as={m.main}>
                {children}
            </Styled.Column>

            <Footer $padding="5rem 1.5rem 3rem" />
        </Styled.Wrapper>
    );
};

const Layout = { ...Styled, Template };

export default Layout;
