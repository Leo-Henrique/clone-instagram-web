import { useSelector } from "react-redux";

import SVGLogo from "../../assets/icons/vectors/logo.svg";
import useMotion from "../../hooks/useMotion";
import useSize from "../../hooks/useSize";
import Logo from "../Misc/Logo";
import MoreNavigation from "./MoreNavigation";
import Navigation from "./Navigation";
import * as Styled from "./style";

export default function Layout({ children }) {
    const { isBreakpointXl, isBreakpointMd } = useSelector(({ breakpoints }) => breakpoints);
    const { element: menu, height: menuHeight } = useSize();
    const motionProps = useMotion({});

    return (
        <>
            <Styled.Navbar {...motionProps} ref={menu}>
                <Logo as={Styled.Logo} SVG={isBreakpointXl && <SVGLogo />} />

                <Navigation
                    filter={
                        isBreakpointMd && [
                            "home",
                            "search",
                            "reels",
                            "create",
                            "profile",
                        ]
                    }
                    reorder={
                        isBreakpointMd && { create: 3, reels: 4, profile: 5 }
                    }
                />

                <MoreNavigation />
            </Styled.Navbar>
            <Styled.Container $menuHeight={menuHeight}>
                <Styled.Content>{children}</Styled.Content>
            </Styled.Container>
        </>
    );
}
