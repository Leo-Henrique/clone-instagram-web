import useDrag from "./hooks/useDrag";
import * as Styled from "./style";

export default function Carousel({ children, active, inner }) {
    const { containerRef, innerRef, events } = useDrag(active);
    const Inner = () => (
        <Styled.Inner as={inner} $active={active} ref={innerRef}>
            {children}
        </Styled.Inner>
    );

    if (active)
        return (
            <Styled.Wrapper ref={containerRef} {...events}>
                <Inner />
            </Styled.Wrapper>
        );
    else return <Inner />;
}
