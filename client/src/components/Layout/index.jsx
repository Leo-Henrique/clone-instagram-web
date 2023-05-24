import Navigation from "./Navigation";
import Wrapper from "./style";

export default function Layout({ children }) {
    return (
        <Wrapper>
            <Navigation />
            {children}
        </Wrapper>
    );
}
