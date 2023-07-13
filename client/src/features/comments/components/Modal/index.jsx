import { useSelector } from "react-redux";
import AddComment from "../AddComment";
import Comments from "../Comments";
import * as Styled from "./style";

export default function ModalComments() {
    const post = useSelector(({ modal }) => modal.comments.post);

    return (
        <Styled.Modal name="comments" closeOptions={{ x: true }}>
            <Styled.Header>
                <h1>Comentários</h1>
            </Styled.Header>

            <Comments post={post} isHighlight={true} bgColorTheme="blockSupport1" />

            <AddComment
                postId={post?.id}
                isHighlight={true}
                bgColorTheme="blockSupport1"
            />
        </Styled.Modal>
    );
}
