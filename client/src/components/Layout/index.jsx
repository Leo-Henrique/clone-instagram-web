import { useSelector } from "react-redux";

import SVGLogo from "../../assets/icons/vectors/logo.svg";
import useMotion from "../../hooks/useMotion";
import useSize from "../../hooks/useSize";
import MoreNavigation from "./MoreNavigation";
import Navigation from "./Navigation";
import * as Styled from "./style";

export default function Layout({ children, MobileHeader }) {
    const { isBreakpointXl, isBreakpointMd } = useSelector(
        ({ breakpoints }) => breakpoints
    );
    const {
        element: navbar,
        height: navbarHeight,
        width: navbarWidth,
    } = useSize();
    const { element: header, height: headerHeight } = useSize();
    const motionProps = useMotion({});

    return (
        <>
            {MobileHeader && isBreakpointMd && (
                <Styled.MobileHeader ref={header}>
                    <MobileHeader />
                </Styled.MobileHeader>
            )}

            <Styled.Navbar {...motionProps} ref={navbar}>
                <Styled.Logo SVG={isBreakpointXl && <SVGLogo />} />

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
            <Styled.Container
                $navbarHeight={navbarHeight}
                $navbarWidth={navbarWidth}
                $headerHeight={headerHeight}
            >
                <Styled.Content>
                    {children}
                </Styled.Content>
            </Styled.Container>
        </>
    );
}
