import { useDispatch, useSelector } from "react-redux";

import { useTheme } from "styled-components";
import { closeModal } from "../../../app/slices/modal";
import useClose from "../../../hooks/useClose";
import useDisableScrollbar from "../../../hooks/useDisableScrollbar";
import useMotion from "../../../hooks/useMotion";
import Button from "../../Modals/Button";
import * as Styled from "./style";

export default function Modal({ children, name, closeOptions }) {
    const close = {
        clickOnAnyElement: false,
        cancelButton: false,
        ...closeOptions,
    };
    const dispatch = useDispatch();
    const theme = useTheme();
    const isBreakpointMd = useSelector(
        ({ breakpoints }) => breakpoints.isBreakpointMd
    );
    const show = useSelector(({ modal }) => modal[name].show);
    const closeCallback = () => dispatch(closeModal(name));
    const { notClose } = useClose({
        callback: closeCallback,
        clickOnAnyElement: close.clickOnAnyElement,
    });
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

    useDisableScrollbar(show);

    return (
        <Styled.Wrapper
            id={`modal-${name}`}
            data-transition={theme.transitions[transition].duration}
            {...wrapperMotion}
            $zIndex={name}
        >
            <Styled.Dialog
                {...(isBreakpointMd ? mobileDialogMotion : desktopDialogMotion)}
                ref={notClose}
            >
                {children}

                {close.cancelButton && (
                    <Button text="Cancelar" onClick={closeCallback} />
                )}
            </Styled.Dialog>
        </Styled.Wrapper>
    );
}
