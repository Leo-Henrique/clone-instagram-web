import { Link } from "react-router-dom";

import SVGInstagram from "../../assets/icons/vectors/instagram.svg";
import Navigation from "./Navigation";
import * as Styled from "./style";
import MoreNavigation from "./MoreNavigation";

export default function Layout({ children }) {
    return (
        <Styled.Wrapper>
            <Styled.Sidebar>
                <Link to="/">
                    <SVGInstagram />
                </Link>

                <Navigation />

                <MoreNavigation />
            </Styled.Sidebar>
            {children}
        </Styled.Wrapper>
    );
}
