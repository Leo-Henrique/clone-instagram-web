import { shallowEqual, useSelector } from "react-redux";

import SVGLogo from "../../assets/icons/vectors/logo.svg";
import useMotion from "../../hooks/useMotion";
import useSize from "../../hooks/useSize";
import MoreNavigation from "./MoreNavigation";
import Navigation from "./Navigation";
import * as Styled from "./style";

export default function Layout({ children, MobileHeader }) {
    const { isBreakpointXl, isBreakpointMd } = useSelector(
        ({ breakpoints }) => breakpoints,
        shallowEqual
    );
    const [navbarRef, navbarHeight, navbarWidth] = useSize();
    const [headerRef, headerHeight] = useSize();
    const motionProps = useMotion();

    return (
        <>
            {MobileHeader && isBreakpointMd && (
                <Styled.MobileHeader ref={headerRef} id="header">
                    <MobileHeader />
                </Styled.MobileHeader>
            )}

            <Styled.Navbar {...motionProps} ref={navbarRef} id="navbar">
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
                    reorder={isBreakpointMd && { create: 3, reels: 4, profile: 5 }}
                />

                <MoreNavigation />
            </Styled.Navbar>
            <main
                style={{
                    minHeight: isBreakpointMd
                        ? `calc(100vh - ${headerHeight} - ${navbarHeight})`
                        : "100vh",
                    marginBottom: isBreakpointMd && navbarHeight,
                    marginLeft: isBreakpointMd || navbarWidth,
                    display: "flex",
                }}
            >
                <Styled.Content>{children}</Styled.Content>
            </main>
        </>
    );
}
