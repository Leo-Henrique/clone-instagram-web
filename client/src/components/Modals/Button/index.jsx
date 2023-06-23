import * as Styled from "./style";

export default function Button({ text, $danger, ...rest }) {
    return (
        <Styled.Wrapper $danger={$danger}>
            <button type="button" {...rest}>
                {text}
            </button>
        </Styled.Wrapper>
    );
}
