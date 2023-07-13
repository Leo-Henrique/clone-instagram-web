import { AnimatePresence } from "framer-motion";
import { Suspense, lazy, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../../../../components/Loaders/Spinner";
import useCreateComment from "../../api/createComment";
import { focusAddComment, setComment } from "../../slices/comment";
import ReplyTo from "./ReplyTo";
import * as Styled from "./style";

const Emojis = lazy(() => import("./Emojis"));

export default function AddComment({
    postId,
    isHighlight,
    bgColorTheme = "background",
}) {
    const dispatch = useDispatch();
    const content = useSelector(({ comment }) => comment.content);
    const focus = useSelector(({ comment }) => comment.focus);
    const isReplyComment = useSelector(({ comment }) => comment.reply.isReply);
    const isBreakpointMd = useSelector(
        ({ breakpoints }) => breakpoints.isBreakpointMd
    );
    const commentRef = useRef(null);
    const handleRows = () => {
        const element = commentRef.current;
        const lineHeight = parseFloat(getComputedStyle(element).lineHeight);
        const max = lineHeight * 4;

        element.style.height = "inherit";
        element.style.height = `${Math.min(element.scrollHeight, max)}px`;
    };
    const change = ({ target }) => {
        handleRows();
        dispatch(setComment(target.value));
    };
    const [createComment, { isLoading }] = useCreateComment(postId, handleRows);

    useEffect(() => {
        if (focus) {
            commentRef.current.focus();
            dispatch(focusAddComment(false));
        }
    }, [focus]);

    return (
        <Styled.Wrapper $isHighlight={isHighlight}>
            <AnimatePresence>{isReplyComment && <ReplyTo />}</AnimatePresence>

            {isBreakpointMd || (
                <Suspense fallback={<Spinner $padding="0 1.5rem" />}>
                    <Emojis />
                </Suspense>
            )}

            <Styled.ToComment
                ref={commentRef}
                autoComplete="off"
                placeholder="Adicione um comentário..."
                spellCheck="true"
                value={content}
                onChange={change}
                rows="1"
                disabled={isLoading}
                $bgColorTheme={bgColorTheme}
            ></Styled.ToComment>

            {isLoading && <Spinner $size={22} $styles={Styled.spinner} />}

            <Styled.Submit
                disabled={!content.length || isLoading}
                onClick={createComment}
            >
                Publicar
            </Styled.Submit>
        </Styled.Wrapper>
    );
}
