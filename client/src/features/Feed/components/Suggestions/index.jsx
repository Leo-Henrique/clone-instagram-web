import FollowButton from "../../../misc/components/FollowButton";
import UserBadge from "../../../misc/components/UserBadge";
import * as Styled from "./style";

export default function Suggestions({ data }) {
    const users = data ? data : Array.from({ length: 6 });

    return (
        <>
            {users.map((user, index) => (
                <Styled.Wrapper key={user?.username || index}>
                    <UserBadge
                        user={user}
                        showName={true}
                        styles={Styled.customUserStyles}
                    />

                    <FollowButton user={user} />
                </Styled.Wrapper>
            ))}
        </>
    );
}
