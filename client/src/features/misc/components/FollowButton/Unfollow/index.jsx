import { useDispatch } from "react-redux";

import { showErrorMessage } from "../../../../../app/slices/message";
import { requireConfirmation } from "../../../../../app/slices/modal";
import { notWarnNewPosts } from "../../../../feed/slices/newPosts";
import { useUnfollowMutation } from "../../../api/follow";
import ConfirmationUnfollow from "../ConfirmationUnfollow";
import * as Styled from "../style";

export default function Unfollow({ buttonConfig, instagramUser, handlePostAlert }) {
    const dispatch = useDispatch();
    const [request] = useUnfollowMutation();
    const unfollow = async () => {
        try {
            await request(instagramUser.id).unwrap();

            if (handlePostAlert) dispatch(notWarnNewPosts());
        } catch (error) {
            dispatch(showErrorMessage({ error }));
        }
    };
    const confirm = () => {
        const payload = {
            action: {
                name: "Deixar de seguir",
                callback: unfollow,
            },
            content: <ConfirmationUnfollow instagramUser={instagramUser} />,
        };

        dispatch(requireConfirmation(payload));
    };

    return <Styled.Button {...buttonConfig} text="Seguindo" onClick={confirm} />;
}
