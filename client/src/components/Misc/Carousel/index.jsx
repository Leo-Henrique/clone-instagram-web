import * as Styled from "./style";

export default function Carousel({ children, active, inner }) {
    const Inner = () => (
        <Styled.Inner as={inner} $active={active}>
            {children}
        </Styled.Inner>
    );

    if (active)
        return (
            <Styled.Wrapper>
                <Inner />
            </Styled.Wrapper>
        );
    else return <Inner />;
}
