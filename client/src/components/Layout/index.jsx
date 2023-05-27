import SVGLogo from "../../assets/icons/vectors/logo.svg";
import useBreakpoint from "../../hooks/useBreakpoint";
import useMotion from "../../hooks/useMotion";
import useSize from "../../hooks/useSize";
import Logo from "../Misc/Logo";
import MoreNavigation from "./MoreNavigation";
import Navigation from "./Navigation";
import * as Styled from "./style";

export default function Layout({ children }) {
    const { isBreakpointXl, isBreakpointMd } = useBreakpoint(["xl", "md"]);
    const { element: menu, height: menuHeight } = useSize();
    const motionProps = useMotion({});

    return (
        <>
            <Styled.Sidebar {...motionProps} ref={menu}>
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
            </Styled.Sidebar>
            <Styled.Container $menuHeight={menuHeight}>
                <Styled.Content>{children}</Styled.Content>
            </Styled.Container>
        </>
    );
}
