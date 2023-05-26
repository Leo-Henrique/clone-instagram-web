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
import * as Styled from "./style";

export default function Navigation({ filter, reorder }) {
    const { user } = useSelector(({ auth }) => auth);
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
        <Styled.Wrapper>
            <Styled.List>
                {renderLinks.map(({ id, name, href, icon }) => (
                    <Styled.Item
                        key={name}
                        $order={reorder?.[id] && reorder[id]}
                    >
                        <Styled.Action
                            aria-label={name}
                            {...(href
                                ? { as: NavLink, to: href }
                                : { as: "button", type: "button" })}
                        >
                            <Styled.Icon>
                                {typeof icon === "string" ? (
                                    <img
                                        src={icon}
                                        alt={`Sua foto de perfil, ${user.name}`}
                                    />
                                ) : (
                                    icon
                                )}
                            </Styled.Icon>
                            <Styled.Text>{name}</Styled.Text>
                        </Styled.Action>
                    </Styled.Item>
                ))}
            </Styled.List>
        </Styled.Wrapper>
    );
}
