import * as Styled from "./style";

export default function FeedHeader() {
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
