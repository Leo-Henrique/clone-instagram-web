import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { toggleTheme } from "../../../app/slices/theme";
import SVGConfig from "../../../assets/icons/vectors/config.svg";
import SVGMore from "../../../assets/icons/vectors/menu.svg";
import SVGMode from "../../../assets/icons/vectors/moon.svg";
import SVGSaved from "../../../assets/icons/vectors/save.svg";
import { logoutThunk } from "../../../features/auth/slices/auth";
import useClose from "../../../hooks/useClose";
import useMotion from "../../../hooks/useMotion";
import * as Styled from "./style";

export default function MoreNavigation() {
    const username = useSelector(({ auth }) => auth.user.username);
    const dispatch = useDispatch();
    const menu = [
        {
            name: "Configurações",
            href: "/accounts",
            icon: <SVGConfig />,
        },
        {
            name: "Salvos",
            href: `/${username}/saved`,
            icon: <SVGSaved />,
        },
        {
            name: "Alterar modo",
            icon: <SVGMode />,
            onClick: () => dispatch(toggleTheme()),
        },
        {
            name: "Sair",
            onClick: () => dispatch(logoutThunk()),
        },
    ];
    const motionProps = useMotion({
        variants: {
            initial: { opacity: 0, y: 15 },
            animate: { opacity: 1, y: 0 },
        },
    });
    const [menuOpen, setMenuOpen] = useState(false);
    const { notClose } = useClose({
        state: menuOpen,
        callback: () => setMenuOpen(false),
    });

    return (
        <Styled.Wrapper ref={notClose}>
            <Styled.Button
                type="button"
                onClick={() => setMenuOpen(!menuOpen)}
                $menuOpen={menuOpen}
                aria-label="Mais"
            >
                <Styled.ButtonIcon>
                    <SVGMore />
                </Styled.ButtonIcon>

                <Styled.ButtonText>Mais</Styled.ButtonText>
            </Styled.Button>

            <AnimatePresence>
                {menuOpen && (
                    <Styled.Menu {...motionProps}>
                        {menu.map(({ name, href, icon, onClick }) => (
                            <li key={name}>
                                <Styled.MenuAction
                                    {...(href
                                        ? { as: Link, to: href }
                                        : {
                                              as: "button",
                                              type: "button",
                                              onClick,
                                          })}
                                >
                                    <span>{name}</span>
                                    {icon && (
                                        <Styled.MenuIcon>{icon}</Styled.MenuIcon>
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
