import { styled } from "styled-components";
import DefaultNavigation from "../../../../components/Layout/PrivateLayout/Navigation";
import DefaultLogo from "../../../../components/Misc/Logo";

export const Logo = styled(DefaultLogo)`
    align-self: stretch;

    a {
        height: 100%;
        display: flex;
    }
`;

export const Navigation = styled(DefaultNavigation)`
    max-width: initial !important;
    margin: initial !important;
    padding: initial !important;
    flex: initial !important;

    #messages {
        padding-right: 0;
    }
`;
