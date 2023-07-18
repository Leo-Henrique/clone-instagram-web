import { shallowEqual, useSelector } from "react-redux";
import SVGLogo from "../../../assets/icons/vectors/logo.svg";
import useMotion from "../../../hooks/useMotion";
import useSize from "../../../hooks/useSize";
import Header from "../Header";
import MoreNavigation from "./MoreNavigation";
import Navigation from "./Navigation";
import * as Styled from "./style";

export default function PrivateLayout({ children, privateHeader }) {
    const { isBreakpointXl, isBreakpointMd } = useSelector(
        ({ breakpoints }) => breakpoints,
        shallowEqual
    );
    const [navbarRef, navbarHeight, navbarWidth] = useSize();
    const [headerRef, headerHeight] = useSize();
    const navbarMotionProps = useMotion();

    return (
        <>
            {isBreakpointMd && privateHeader && (
                <Header ref={headerRef}>{privateHeader}</Header>
            )}

            <Styled.Navbar ref={navbarRef} id="navbar" {...navbarMotionProps}>
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

            <Styled.Main
                $isBreakpointMd={isBreakpointMd}
                $headerHeight={headerHeight}
                $navbarHeight={navbarHeight}
                $navbarWidth={navbarWidth}
            >
                <Styled.Content>{children}</Styled.Content>
            </Styled.Main>
        </>
    );
}
