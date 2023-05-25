import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import SVGConfig from "../../../assets/icons/vectors/config.svg";
import SVGMore from "../../../assets/icons/vectors/menu.svg";
import SVGMode from "../../../assets/icons/vectors/moon.svg";
import SVGSaved from "../../../assets/icons/vectors/save.svg";
import useMotion from "../../../hooks/useMotion";
import useSize from "../../../hooks/useSize";
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
    const [menuOpen, setMenuOpen] = useState(false);
    const motionProps = useMotion({
        variants: {
            initial: { opacity: 0, y: 15 },
            animate: { opacity: 1, y: 0 },
        },
    });
    const { element: button, size: buttonHeight } = useSize("Height", menuOpen);

    return (
        <Styled.Wrapper>
            <Styled.Button
                type="button"
                onClick={() => setMenuOpen(!menuOpen)}
                $menuOpen={menuOpen}
                ref={button}
            >
                <Styled.ButtonIcon>
                    <SVGMore />
                </Styled.ButtonIcon>

                <span>Mais</span>
            </Styled.Button>
            
            <AnimatePresence>
                {menuOpen && (
                    <Styled.Menu {...motionProps} $buttonHeight={buttonHeight}>
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
