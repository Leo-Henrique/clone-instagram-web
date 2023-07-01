import { useSelector } from "react-redux";
import Modal from "../../../../components/Features/Modal";
import Post from "../Post";
import * as Styled from "./style";

export default function ModalPost() {
    const postId = useSelector(({ modal }) => modal.post.id);

    return (
        <Modal name="post" dialogStyles={Styled.dialog}>
            <Post id={postId} isHighlight={true} isModalHighlight={true} />
        </Modal>
    );
}
