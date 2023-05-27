import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import SVGCreate from "../../../assets/icons/vectors/create.svg";
import SVGExplore from "../../../assets/icons/vectors/explore.svg";
import SVGNotifications from "../../../assets/icons/vectors/heart.svg";
import SVGHome from "../../../assets/icons/vectors/home.svg";
import SVGMessages from "../../../assets/icons/vectors/messages.svg";
import SVGReels from "../../../assets/icons/vectors/reels.svg";
import SVGSearch from "../../../assets/icons/vectors/search.svg";
import { SERVER_DOMAIN } from "../../../config";
import Tooltip from "../../Misc/Tooltip";
import * as Styled from "./style";

const Action = ({ name, href, icon, ...rest }) => {
    const { user } = useSelector(({ auth }) => auth);

    return (
        <Styled.Action
            {...rest}
            aria-label={name}
            {...(href
                ? { as: NavLink, to: href }
                : { as: "button", type: "button" })}
        >
            <Styled.Icon>
                {typeof icon === "string" ? (
                    <img src={icon} alt={`Sua foto de perfil, ${user.name}`} />
                ) : (
                    icon
                )}
            </Styled.Icon>

            <Styled.Text>{name}</Styled.Text>
        </Styled.Action>
    );
};
export default function Navigation({ filter, reorder, ...props }) {
    const {
        auth: { user },
        breakpoints: { isBreakpointXl, isBreakpointMd },
    } = useSelector(state => state);
    const links = [
        {
            id: "home",
            name: "Página inicial",
            href: "/",
            icon: <SVGHome />,
        },
        {
            id: "search",
            name: "Pesquisa",
            icon: <SVGSearch />,
        },
        {
            id: "explore",
            name: "Explorar",
            href: "/explore",
            icon: <SVGExplore />,
        },
        {
            id: "reels",
            name: "Reels",
            href: "/reels",
            icon: <SVGReels />,
        },
        {
            id: "messages",
            name: "Mensagens",
            href: "/direct",
            icon: <SVGMessages />,
        },
        {
            id: "notifications",
            name: "Notificações",
            icon: <SVGNotifications />,
        },
        {
            id: "create",
            name: "Criar",
            icon: <SVGCreate />,
        },
        {
            id: "profile",
            name: "Perfil",
            href: `/${user.username}`,
            icon: `${SERVER_DOMAIN}/${user.picture}`,
        },
    ];
    const renderLinks = filter
        ? links.filter(({ id }) => filter.includes(id))
        : links;

    return (
        <Styled.Wrapper {...props}>
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
                                Button={props => (
                                    <Action {...link} {...props} />
                                )}
                                displayDelay={1000}
                            />
                        ) : <Action {...link} />}
                    </Styled.Item>
                ))}
            </Styled.List>
        </Styled.Wrapper>
    );
}
