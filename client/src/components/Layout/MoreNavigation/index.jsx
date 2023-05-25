import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import SVGConfig from "../../../assets/icons/vectors/config.svg";
import SVGMore from "../../../assets/icons/vectors/menu.svg";
import SVGMode from "../../../assets/icons/vectors/moon.svg";
import SVGSaved from "../../../assets/icons/vectors/save.svg";
import useMotion from "../../../hooks/useMotion";
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
    const [open, setOpen] = useState(true);
    const motionProps = useMotion({
        variants: {
            initial: { opacity: 0, y: 15 },
            animate: { opacity: 1, y: 0 },
        },
    });

    return (
        <Styled.Wrapper>
            <Styled.Button
                type="button"
                onClick={() => setOpen(!open)}
                $menuOpen={open}
            >
                <Styled.ButtonIcon>
                    <SVGMore />
                </Styled.ButtonIcon>

                <span>Mais</span>
            </Styled.Button>
            <AnimatePresence>
                {open && (
                    <Styled.Menu {...motionProps}>
                        {menu.map(({ name, href, icon }) => (
                            <li key={name}>
                                <Styled.MenuAction
                                    {...(href
                                        ? { as: Link, to: href }
                                        : { as: "button", type: "button" })}
                                >
                                    <span>{name}</span>
                                    {icon && (
                                        <Styled.MenuIcon>
                                            {icon}
                                        </Styled.MenuIcon>
                                    )}
                                </Styled.MenuAction>
                            </li>
                        ))}
                    </Styled.Menu>
                )}
            </AnimatePresence>
        </Styled.Wrapper>
    );
}
