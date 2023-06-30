import { useDispatch, useSelector } from "react-redux";
import Post from "../Post";
import Modal from "../../../../components/Features/Modal";
import * as Styled from "./style";

export default function ModalPost() {
    const dispatch = useDispatch();
    const postId = useSelector(({ modal }) => modal.post.id);

    return (
        <Modal name="post" dialogStyles={Styled.dialog}>
            <Post id={postId} highlight={true} />
        </Modal>
    );
}
