import * as Styled from "./style";

export default function PostControl({ children, label, ...rest }) {
    return (
        <Styled.Button aria-label={label} {...rest}>
            {children}
        </Styled.Button>
    );
}
