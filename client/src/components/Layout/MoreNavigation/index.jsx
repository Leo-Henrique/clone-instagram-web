import { AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { toggleTheme } from "../../../app/slices/theme";
import SVGConfig from "../../../assets/icons/vectors/config.svg";
import SVGMore from "../../../assets/icons/vectors/menu.svg";
import SVGMode from "../../../assets/icons/vectors/moon.svg";
import SVGSaved from "../../../assets/icons/vectors/save.svg";
import { logoutThunk } from "../../../features/auth/slices/auth";
import useClose from "../../../hooks/useClose";
import useDisable from "../../../hooks/useDisable";
import useMotion from "../../../hooks/useMotion";
import * as Styled from "./style";

export default function MoreNavigation() {
    const dispatch = useDispatch();
    const { linkDisabled } = useDisable();
    const menu = [
        {
            name: "Configurações",
            icon: <SVGConfig />,
            callback: linkDisabled,
        },
        {
            name: "Salvos",
            icon: <SVGSaved />,
            callback: linkDisabled,
        },
        {
            name: "Alterar modo",
            icon: <SVGMode />,
            callback: () => dispatch(toggleTheme()),
        },
        {
            name: "Sair",
            callback: () => dispatch(logoutThunk()),
        },
    ];
    const motionProps = useMotion({
        variants: {
            initial: { opacity: 0, y: 15 },
            animate: { opacity: 1, y: 0 },
        },
    });
    const [menuOpen, setMenuOpen] = useState(false);
    const notCloseRef = useRef(null);

    useClose({
        state: menuOpen,
        callback: () => setMenuOpen(false),
        clickOutside: {
            ref: notCloseRef,
            close: false,
        },
    });

    return (
        <Styled.Wrapper ref={notCloseRef}>
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
                        {menu.map(({ name, callback, icon }) => (
                            <li key={name}>
                                <Styled.MenuAction
                                    {...(typeof callback === "string"
                                        ? { as: Link, to: callback }
                                        : {
                                              as: "button",
                                              type: "button",
                                              onClick: callback,
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
