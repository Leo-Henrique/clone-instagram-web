import { forwardRef } from "react";
import * as Styled from "./style";

const Header = forwardRef(({ children, ...rest }, ref) => (
    <Styled.Wrapper ref={ref} id="header" {...rest}>
        <Styled.Container {...rest}>
            {children}
        </Styled.Container>
    </Styled.Wrapper>
));

export default Header;
