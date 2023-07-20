import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal, showPost } from "../../../../app/slices/modal";
import AddComment from "../AddComment";
import Comments from "../Comments";
import * as Styled from "./style";

export default function ModalComments() {
    const dispatch = useDispatch();
    const post = useSelector(({ modal }) => modal.comments.post);
    const isBreakpointMd = useSelector(
        ({ breakpoints }) => breakpoints.isBreakpointMd
    );

    useEffect(() => {
        if (!isBreakpointMd) {
            dispatch(closeModal("comments"));
            dispatch(showPost(post.id));
        }
    }, [isBreakpointMd]);

    return (
        <Styled.Modal name="comments">
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
