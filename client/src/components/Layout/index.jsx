import { Link } from "react-router-dom";

import SVGInstagram from "../../assets/icons/vectors/instagram.svg";
import SVGLogo from "../../assets/icons/vectors/logo.svg";
import useBreakpoint from "../../hooks/useBreakpoint";
import MoreNavigation from "./MoreNavigation";
import Navigation from "./Navigation";
import * as Styled from "./style";

export default function Layout({ children }) {
    const { isBreakpointXl } = useBreakpoint("xl");

    return (
        <>
            <Styled.Sidebar>
                <Styled.Logo>
                    <Link to="/">
                        {isBreakpointXl ? <SVGLogo /> : <SVGInstagram />}
                    </Link>
                </Styled.Logo>

                <Navigation />

                <MoreNavigation />
            </Styled.Sidebar>
            <Styled.Content>{children}</Styled.Content>
        </>
    );
}
