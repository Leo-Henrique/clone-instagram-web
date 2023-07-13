import { useDispatch, useSelector } from "react-redux";
import Modal from "../../../../components/Features/Modal";
import { resetComment } from "../../../comments/slices/comment";
import Post from "../Post";
import * as Styled from "./style";

export default function ModalPost() {
    const dispatch = useDispatch();
    const postId = useSelector(({ modal }) => modal.post.id);
    const callbackClose = () => dispatch(resetComment());

    return (
        <Modal
            name="post"
            dialogStyles={Styled.dialog}
            closeOptions={{ x: true, callback: callbackClose }}
        >
            <Post id={postId} startWithHighlight={true} isModalHighlight={true} />
        </Modal>
    );
}
