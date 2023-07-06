import { AnimatePresence, m } from "framer-motion";
import { useSelector } from "react-redux";
import { useTheme } from "styled-components";
import SVGLike from "../../../../assets/icons/vectors/heart.svg";
import SVGLiked from "../../../../assets/icons/vectors/liked.svg";
import useMotion from "../../../../hooks/useMotion";
import useToggleLikePost from "../../api/likePost";
import * as Styled from "./style";

export default function Like({ what, id, likes, ...rest }) {
    const authUserId = useSelector(({ auth }) => auth.user.id);
    const [toggleLikePost] = useToggleLikePost(id, likes);
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
    const hasLike = likes.includes(authUserId);
    const callback = () => {
        switch (what) {
            case "publicação":
                toggleLikePost();
                break;
        }
    };

    return (
        <Styled.Wrapper
            aria-label={hasLike ? `Descurtir ${what}` : `Curtir ${what}`}
            onClick={callback}
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
