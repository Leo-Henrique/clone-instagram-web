import { AnimatePresence, m } from "framer-motion";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTheme } from "styled-components";
import { showPost } from "../../../../../../app/slices/modal";
import SVGComments from "../../../../../../assets/icons/vectors/comments.svg";
import SVGLike from "../../../../../../assets/icons/vectors/heart.svg";
import SVGLiked from "../../../../../../assets/icons/vectors/liked.svg";
import SVGSave from "../../../../../../assets/icons/vectors/save.svg";
import SVGShare from "../../../../../../assets/icons/vectors/share.svg";
import useDisable from "../../../../../../hooks/useDisable";
import useMotion from "../../../../../../hooks/useMotion";
import useToggleLikePost from "../../../../api/likePost";
import * as Styled from "./style";

const Like = ({ post }) => {
    const authUserId = useSelector(({ auth }) => auth.user.id);
    const [toggleLikePost] = useToggleLikePost(post);
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
    const hasLike = post.likes.includes(authUserId);

    return (
        <Styled.Action
            aria-label={hasLike ? "Descurtir publicação" : "Curtir publicação"}
            onClick={toggleLikePost}
            $hasLike={hasLike}
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
        </Styled.Action>
    );
};

export default function Actions({ post }) {
    const dispatch = useDispatch();
    const { buttonDisabled } = useDisable();
    const actions = [
        {
            id: "comments",
            description: "Ver comentários da publicação",
            icon: <SVGComments />,
            show: post.showComments,
            callback: () => dispatch(showPost(post.id)),
        },
        {
            id: "share",
            description: "Compartilhar publicação",
            icon: <SVGShare />,
            show: true,
            callback: buttonDisabled,
        },
        {
            id: "save",
            description: "Salvar a publicação",
            icon: <SVGSave />,
            show: true,
            callback: buttonDisabled,
        },
    ];

    return (
        <Styled.Actions>
            {actions.map(({ id, description, show, callback, icon }, index) => (
                <Fragment key={id}>
                    {index === 0 && <Like post={post} />}

                    {show && (
                        <Styled.Action onClick={callback} aria-label={description}>
                            {icon}
                        </Styled.Action>
                    )}
                </Fragment>
            ))}
        </Styled.Actions>
    );
}
