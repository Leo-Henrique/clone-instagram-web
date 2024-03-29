import { shallowEqual, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import SVGCreate from "../../../../assets/icons/vectors/create.svg";
import SVGExplore from "../../../../assets/icons/vectors/explore.svg";
import SVGNotifications from "../../../../assets/icons/vectors/heart.svg";
import SVGHome from "../../../../assets/icons/vectors/home.svg";
import SVGMessages from "../../../../assets/icons/vectors/messages.svg";
import SVGReels from "../../../../assets/icons/vectors/reels.svg";
import SVGSearch from "../../../../assets/icons/vectors/search.svg";
import useDisable from "../../../../hooks/useDisable";
import Tooltip from "../../../Features/Tooltip";
import * as Styled from "./style";

const Action = ({ name, callback, icon, ...rest }) => {
    const userName = useSelector(({ auth }) => auth.user.name);

    return (
        <Styled.Action
            {...rest}
            aria-label={name}
            {...(typeof callback === "string"
                ? { as: NavLink, to: callback }
                : { as: "button", type: "button", onClick: callback })}
        >
            <Styled.Icon>
                {typeof icon === "string" ? (
                    <img src={icon} alt={`Sua foto de perfil, ${userName}`} />
                ) : (
                    icon
                )}
            </Styled.Icon>

            <Styled.Text>{name}</Styled.Text>
        </Styled.Action>
    );
};
export default function Navigation({ filter, reorder, ...rest }) {
    const username = useSelector(({ auth }) => auth.user.username);
    const userPicture = useSelector(({ auth }) => auth.user.picture);
    const { isBreakpointXl, isBreakpointMd } = useSelector(
        ({ breakpoints }) => breakpoints,
        shallowEqual
    );
    const { linkDisabled, buttonDisabled } = useDisable();
    const links = [
        {
            id: "home",
            name: "Página inicial",
            icon: <SVGHome />,
            callback: "/",
        },
        {
            id: "search",
            name: "Pesquisa",
            icon: <SVGSearch />,
            callback: buttonDisabled,
        },
        {
            id: "explore",
            name: "Explorar",
            icon: <SVGExplore />,
            callback: linkDisabled,
        },
        {
            id: "reels",
            name: "Reels",
            icon: <SVGReels />,
            callback: linkDisabled,
        },
        {
            id: "messages",
            name: "Mensagens",
            icon: <SVGMessages />,
            callback: linkDisabled,
        },
        {
            id: "notifications",
            name: "Notificações",
            icon: <SVGNotifications />,
            callback: buttonDisabled,
        },
        {
            id: "create",
            name: "Criar",
            icon: <SVGCreate />,
            callback: buttonDisabled,
        },
        {
            id: "profile",
            name: "Perfil",
            icon: userPicture.source,
            callback: `/${username}`,
        },
    ];
    const renderLinks = filter
        ? links.filter(({ id }) => filter.includes(id))
        : links;

    return (
        <Styled.Wrapper {...rest}>
            <Styled.List>
                {renderLinks.map(link => (
                    <Styled.Item
                        key={link.name}
                        $order={reorder?.[link.id] && reorder[link.id]}
                    >
                        {isBreakpointXl && !isBreakpointMd ? (
                            <Tooltip
                                text={link.name}
                                position="right"
                                Button={props => <Action {...link} {...props} />}
                                displayDelay={1000}
                            />
                        ) : (
                            <Action {...link} />
                        )}
                    </Styled.Item>
                ))}
            </Styled.List>
        </Styled.Wrapper>
    );
}
