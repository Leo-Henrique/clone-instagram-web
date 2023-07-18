import * as Styled from "./style";

export default function LayoutHeader() {
    return (
        <>
            <Styled.Logo />

            <Styled.Navigation
                filter={["notifications", "messages"]}
                reorder={{ messages: 1 }}
            />
        </>
    );
}
