import * as Styled from "./style";

export default function Button({ text, as: tagName = "button", ...rest }) {
    return (
        <Styled.Wrapper>
            <Styled.Button
                as={tagName}
                {...(tagName === "button" && { type: "button" })}
                {...rest}
            >
                {text}
            </Styled.Button>
        </Styled.Wrapper>
    );
}
