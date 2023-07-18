import { Fragment } from "react";
import { useDispatch } from "react-redux";
import { showComments } from "../../../../../../app/slices/modal";
import SVGComments from "../../../../../../assets/icons/vectors/comments.svg";
import SVGSave from "../../../../../../assets/icons/vectors/save.svg";
import SVGShare from "../../../../../../assets/icons/vectors/share.svg";
import useDisable from "../../../../../../hooks/useDisable";
import Like from "../../../../../misc/components/Like";
import * as Styled from "./style";

export default function Actions({ post, isHighlight }) {
    const dispatch = useDispatch();
    const { buttonDisabled } = useDisable();
    const actions = [
        {
            id: "comments",
            description: "Ver comentários da publicação",
            icon: <SVGComments />,
            show: post.showComments,
            callback: () => dispatch(showComments(post, isHighlight)),
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
                    {index === 0 && (
                        <Like
                            what="publicação"
                            requestArgs={post.id}
                            likes={post.likes}
                            $padding={`${Styled.padding} 0`}
                        />
                    )}

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
