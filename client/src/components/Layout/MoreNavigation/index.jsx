import { useSelector } from "react-redux";

import { Link } from "react-router-dom";
import SVGConfig from "../../../assets/icons/vectors/config.svg";
import SVGMore from "../../../assets/icons/vectors/menu.svg";
import SVGMode from "../../../assets/icons/vectors/moon.svg";
import SVGSaved from "../../../assets/icons/vectors/save.svg";
import * as Styled from "./style";

export default function MoreNavigation() {
    const { user } = useSelector(({ auth }) => auth);
    const menu = [
        {
            name: "Configurações",
            href: "/accounts",
            icon: <SVGConfig />,
        },
        {
            name: "Salvos",
            href: `/${user.username}/saved`,
            icon: <SVGSaved />,
        },
        {
            name: "Alterar modo",
            icon: <SVGMode />,
        },
        {
            name: "Sair",
        },
    ];

    return (
        <Styled.Wrapper>
            <Styled.Button type="button">
                <SVGMore />

                <span>Mais</span>
            </Styled.Button>

            <Styled.Menu>
                {menu.map(({ name, href, icon }) => (
                    <Styled.Item key={name}>
                        <Styled.Action
                            {...(href
                                ? { as: Link, to: href }
                                : { as: "button", type: "button" })}
                        >
                            {icon && <div>{icon}</div>}
                            <span>{name}</span>
                        </Styled.Action>
                    </Styled.Item>
                ))}
            </Styled.Menu>
        </Styled.Wrapper>
    );
}
