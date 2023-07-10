import { AnimatePresence, m } from "framer-motion";
import { useSelector } from "react-redux";
import { useTheme } from "styled-components";
import SVGLike from "../../../../assets/icons/vectors/heart.svg";
import SVGLiked from "../../../../assets/icons/vectors/liked.svg";
import useMotion from "../../../../hooks/useMotion";
import useToggleLikeComment from "../../api/likeComment";
import useToggleLikePost from "../../api/likePost";
import * as Styled from "./style";

export default function Like({ what, requestArgs, id, likes, postId, ...rest }) {
    const authUserId = useSelector(({ auth }) => auth.user.id);
    const theme = useTheme();
    const likeProps = useMotion({
        variants: {
            initial: { opacity: 0 },
            animate: { opacity: 1, scale: 1 },
            exit: { opacity: 0, scale: 0.4 },
        },
        transition: "button",
    });
    const unlikeProps = useMotion({
        variants: {
            initial: { opacity: 0, scale: 0.4 },
            animate: { opacity: 1, scale: 1 },
            exit: { opacity: 0 },
        },
        transition: "button",
    });
    const [toggleLikePost] = useToggleLikePost(requestArgs, likes);
    const [toggleLikeComment] = useToggleLikeComment(requestArgs, likes);
    const toggleLike = () => {
        switch (what) {
            case "publicação":
                toggleLikePost();
                break;
            case "comentário":
                toggleLikeComment();
                break;
        }
    };
    const hasLike = likes.includes(authUserId);

    return (
        <Styled.Wrapper
            aria-label={hasLike ? `Descurtir ${what}` : `Curtir ${what}`}
            onClick={toggleLike}
            {...rest}
        >
            <AnimatePresence mode="wait">
                {hasLike ? (
                    <m.div key="unlike" {...unlikeProps}>
                        <SVGLiked fill={theme.colors.secondary} />
                    </m.div>
                ) : (
                    <m.div key="like" {...likeProps}>
                        <SVGLike fill={theme.colors.text} />
                    </m.div>
                )}
            </AnimatePresence>
        </Styled.Wrapper>
    );
}
