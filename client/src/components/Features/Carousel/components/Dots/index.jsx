import * as Styled from "./style";

export default function Dots({ items, currentItem }) {
    return (
        <Styled.Wrapper>
            {Array.from({ length: items?.length }).map((item, index) => (
                <Styled.Dot key={index} $active={index === currentItem} />
            ))}
        </Styled.Wrapper>
    );
}
