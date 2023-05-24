import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import SVGCreate from "../../../assets/icons/vectors/create.svg";
import SVGExplore from "../../../assets/icons/vectors/explore.svg";
import SVGNotifications from "../../../assets/icons/vectors/heart.svg";
import SVGHome from "../../../assets/icons/vectors/home.svg";
import SVGMessages from "../../../assets/icons/vectors/messages.svg";
import SVGReels from "../../../assets/icons/vectors/reels.svg";
import SVGSearch from "../../../assets/icons/vectors/search.svg";
import { SERVER_HOST } from "../../../config";
import Nav from "./style";

export default function Navigation({ filter }) {
    const { user } = useSelector(({ auth }) => auth);
    const links = [
        {
            name: "Página inicial",
            href: "/",
            icon: <SVGHome />,
        },
        {
            name: "Pesquisa",
            icon: <SVGSearch />,
        },
        {
            name: "Explorar",
            href: "/explore",
            icon: <SVGExplore />,
        },
        {
            name: "Reels",
            href: "/reels",
            icon: <SVGReels />,
        },
        {
            name: "Mensagens",
            href: "/direct",
            icon: <SVGMessages />,
        },
        {
            name: "Notificações",
            icon: <SVGNotifications />,
        },
        {
            name: "Criar",
            icon: <SVGCreate />,
        },
        {
            name: "Perfil",
            href: `/${user.username}`,
            icon: `${SERVER_HOST}/${user.picture}`,
        },
    ];
    const renderLinks = filter
        ? links.filter(({ name }) => filter.includes(name))
        : links;

    return (
        <Nav>
            {renderLinks.map(({ name, href, icon }) => (
                <Nav.Item key={name}>
                    <Nav.Action
                        {...(href
                            ? { as: NavLink, to: href }
                            : { as: "button", type: "button" })}
                    >
                        <Nav.Icon>
                            {typeof icon === "string" ? (
                                <img
                                    src={icon}
                                    alt={`Sua foto de perfil, ${user.name}`}
                                />
                            ) : (
                                icon
                            )}
                        </Nav.Icon>
                        <Nav.Text>{name}</Nav.Text>
                    </Nav.Action>
                </Nav.Item>
            ))}
        </Nav>
    );
}
