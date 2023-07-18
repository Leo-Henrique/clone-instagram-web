import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Modal from "../../../../components/Features/Modal";
import { resetComment } from "../../../comments/slices/comment";
import Post from "../Post";
import * as Styled from "./style";

export default function ModalPost() {
    const location = useLocation();
    const dispatch = useDispatch();
    const post = useSelector(({ modal }) => modal.post.data);
    const callbackClose = () => {
        dispatch(resetComment());
        history.replaceState(null, null, window.location.origin + location.pathname);
    };

    useEffect(() => {
        history.replaceState(
            null,
            null,
            `${window.location.origin}/post/${post.id}`
        );
    }, []);

    return (
        <Modal
            name="post"
            dialogStyles={Styled.dialog}
            closeOptions={{ x: true, callback: callbackClose }}
        >
            <Post post={post} startWithHighlight isModalHighlight />
        </Modal>
    );
}
