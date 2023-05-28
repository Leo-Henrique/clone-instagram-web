import { styled } from "styled-components";

import CloneNavigation from "../../../components/Layout/Navigation";
import CloneLogo from "../../../components/Misc/Logo";

export const Logo = styled(CloneLogo)`
    align-self: stretch;

    a {
        height: 100%;
        display: flex;
    }
`;

export const Navigation = styled(CloneNavigation)`
    max-width: initial;
    margin: initial;
    padding: initial;
    flex: initial;
`;
