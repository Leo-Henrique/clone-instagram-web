import SVGLogo from "../../assets/icons/vectors/logo.svg";
import useBreakpoint from "../../hooks/useBreakpoint";
import Logo from "../Misc/Logo";
import MoreNavigation from "./MoreNavigation";
import Navigation from "./Navigation";
import * as Styled from "./style";

export default function Layout({ children }) {
    const { isBreakpointXl } = useBreakpoint("xl");

    return (
        <>
            <Styled.Sidebar>
                <Logo as={Styled.Logo} SVG={isBreakpointXl && <SVGLogo />} />

                <Navigation />

                <MoreNavigation />
            </Styled.Sidebar>
            <Styled.Container>
                <Styled.Content>{children}</Styled.Content>
            </Styled.Container>
        </>
    );
}
