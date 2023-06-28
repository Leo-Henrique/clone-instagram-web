import * as Styled from "./style";

export default function Delete({ title, description }) {
    return (
        <>
            <Styled.Title>{title}</Styled.Title>

            <Styled.Description>{description}</Styled.Description>
        </>
    );
}
