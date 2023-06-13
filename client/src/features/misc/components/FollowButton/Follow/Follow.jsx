import { useDispatch, useSelector } from "react-redux";

import { showError } from "../../../../../app/slices/message";
import { warnThunk } from "../../../../feed/slices/newPosts";
import { useFollowMutation } from "../../../api/follow";
import * as Styled from "../style";

export default function Follow({ buttonConfig, instagramUser, handlePostAlert }) {
    const userId = useSelector(({ auth }) => auth.user.id);
    const dispatch = useDispatch();
    const [request] = useFollowMutation();
    const follow = async () => {
        const { username, postsCount } = instagramUser;

        try {
            await request({ username }).unwrap();

            if (handlePostAlert) dispatch(warnThunk(postsCount));
        } catch (error) {
            dispatch(showError({ error }));
        }
    };
    const followYou = instagramUser.following.includes(userId);

    return (
        <Styled.Button
            {...buttonConfig}
            text={followYou ? "Seguir de volta" : "Seguir"}
            onClick={follow}
        />
    );
}
