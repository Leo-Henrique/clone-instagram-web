import Navigation from "./Navigation";
import * as Styled from "./style";

export default function Layout({ children }) {
    return (
        <Styled.Wrapper>
            <Navigation />
            {children}
        </Styled.Wrapper>
    );
}
