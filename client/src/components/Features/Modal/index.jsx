import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTheme } from "styled-components";
import { closeModal } from "../../../app/slices/modal";
import SVGClose from "../../../assets/icons/vectors/close.svg";
import useClose from "../../../hooks/useClose";
import useMotion from "../../../hooks/useMotion";
import Button from "../../Modals/components/Button";
import useScrollbar from "./hooks/useScrollbar";
import * as Styled from "./style";

export default function Modal({
    className,
    children,
    name,
    closeOptions,
    dialogStyles,
}) {
    const close = {
        cancelButton: false,
        x: false,
        callback: null,
        ...closeOptions,
    };
    const dispatch = useDispatch();
    const theme = useTheme();
    const isBreakpointMd = useSelector(
        ({ breakpoints }) => breakpoints.isBreakpointMd
    );
    const transition = "modal";
    const wrapperMotion = useMotion({ transition });
    const desktopDialogMotion = useMotion({
        variants: {
            initial: { opacity: 0, scale: 0.5 },
            animate: { opacity: 1, scale: 1 },
        },
        transition,
    });
    const mobileDialogMotion = useMotion({
        variants: {
            initial: { opacity: 0, y: 50 },
            animate: { opacity: 1, y: 0 },
        },
        transition,
    });
    const closeCallback = () => dispatch(closeModal(name, close.callback));
    const closeRef = useRef(null);

    useClose({
        callback: closeCallback,
        clickOutside: {
            ref: closeRef,
            close: true,
        },
    });

    useScrollbar(name);

    return (
        <Styled.Wrapper
            className={className}
            id={`modal-${name}`}
            data-transition={theme.transitions[transition].duration}
            $zIndex={name}
            ref={closeRef}
            {...wrapperMotion}
        >
            <Styled.Dialog
                {...(isBreakpointMd ? mobileDialogMotion : desktopDialogMotion)}
                $styles={dialogStyles}
            >
                {children}

                {close.cancelButton && (
                    <Button text="Cancelar" onClick={closeCallback} />
                )}
            </Styled.Dialog>

            {close.x && (
                <Styled.Close aria-label="Fechar janela" onClick={closeCallback}>
                    <SVGClose />
                </Styled.Close>
            )}
        </Styled.Wrapper>
    );
}
