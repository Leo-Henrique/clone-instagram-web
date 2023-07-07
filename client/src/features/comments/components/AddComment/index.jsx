import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import SVGEmote from "../../../../assets/icons/vectors/emoji.svg";
import Spinner from "../../../../components/Loaders/Spinner";
import useCreateComment from "../../api/createComment";
import { focusAddComment, setComment } from "../../slices/comment";
import ReplyTo from "./ReplyTo";
import * as Styled from "./style";

export default function AddComment({ postId }) {
    const dispatch = useDispatch();
    const content = useSelector(({ comment }) => comment.content);
    const focus = useSelector(({ comment }) => comment.focus);
    const change = ({ target }) => {
        const defineHeight = () => {
            const lineHeight = parseFloat(getComputedStyle(target).lineHeight);
            const max = lineHeight * 4;

            target.style.height = "inherit";
            target.style.height = `${Math.min(target.scrollHeight, max)}px`;
        };

        defineHeight();
        dispatch(setComment(target.value));
    };
    const [createComment, { isLoading }] = useCreateComment(postId);
    const commentRef = useRef(null);

    useEffect(() => {
        if (focus) {
            commentRef.current.focus();
            dispatch(focusAddComment(false));
        }
    }, [focus]);

    return (
        <Styled.Wrapper>
            <ReplyTo />

            <Styled.ViewEmotes aria-label="Ver emojis">
                <SVGEmote />
            </Styled.ViewEmotes>

            <Styled.ToComment
                ref={commentRef}
                autoComplete="off"
                placeholder="Adicione um comentário..."
                spellCheck="true"
                value={content}
                onChange={change}
                rows="1"
                disabled={isLoading}
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
