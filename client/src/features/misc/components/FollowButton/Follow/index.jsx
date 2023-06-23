import { useDispatch, useSelector } from "react-redux";

import { showErrorMessage } from "../../../../../app/slices/message";
import { warnNewPosts } from "../../../../feed/slices/newPosts";
import { useFollowMutation } from "../../../api/follow";
import * as Styled from "../style";

export default function Follow({ buttonConfig, instagramUser, handlePostAlert }) {
    const authUserId = useSelector(({ auth }) => auth.user.id);
    const dispatch = useDispatch();
    const [request] = useFollowMutation();
    const follow = async () => {
        try {
            await request(instagramUser.id).unwrap();

            if (handlePostAlert) dispatch(warnNewPosts());
        } catch (error) {
            dispatch(showErrorMessage({ error }));
        }
    };
    const followYou = instagramUser.following.includes(authUserId);

    return (
        <Styled.Button
            {...buttonConfig}
            text={followYou ? "Seguir de volta" : "Seguir"}
            onClick={follow}
        />
    );
}
