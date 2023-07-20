import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { closeModal, showComments } from "../../../../app/slices/modal";
import QueryError from "../../../../components/Alerts/QueryError";
import { resetComment } from "../../../comments/slices/comment";
import { useGetPostQuery } from "../../api/getPost";
import Post from "../Post";
import * as Styled from "./style";

export default function ModalPost() {
    const location = useLocation();
    const dispatch = useDispatch();
    const postId = useSelector(({ modal }) => modal.post.id);
    const {
        data: post,
        isError,
        error,
        refetch,
    } = useGetPostQuery(postId, { skip: !postId });
    const isBreakpointMd = useSelector(
        ({ breakpoints }) => breakpoints.isBreakpointMd
    );
    const closeCallback = () => {
        dispatch(resetComment());
        history.replaceState(null, null, window.location.origin + location.pathname);
    };
    const close = () => dispatch(closeModal("post", closeCallback));

    useEffect(() => {
        history.replaceState(null, null, `${window.location.origin}/post/${postId}`);
    }, []);

    useEffect(() => {
        if (isBreakpointMd) {
            close();
            dispatch(showComments(post));
        }
    }, [isBreakpointMd]);

    return (
        <Styled.Modal
            name="post"
            closeOptions={{ x: true, callback: closeCallback }}
            $isError={isError}
        >
            {isError ? (
                <QueryError
                    error={error}
                    refetch={refetch}
                    $large
                    $padding="4rem 1.5rem"
                />
            ) : (
                <Post post={post} startWithHighlight isModalHighlight />
            )}
        </Styled.Modal>
    );
}
