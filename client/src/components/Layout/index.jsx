import { Link } from "react-router-dom";

import SVGInstagram from "../../assets/icons/vectors/instagram.svg";
import MoreNavigation from "./MoreNavigation";
import Navigation from "./Navigation";
import * as Styled from "./style";

export default function Layout({ children }) {
    return (
        <>
            <Styled.Sidebar>
                <Styled.Logo>
                    <Link to="/">
                        <SVGInstagram />
                    </Link>
                </Styled.Logo>

                <Navigation />

                <MoreNavigation />
            </Styled.Sidebar>
            <Styled.Content>{children}</Styled.Content>
        </>
    );
}
