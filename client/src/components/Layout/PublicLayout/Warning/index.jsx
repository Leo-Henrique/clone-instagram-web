import { forwardRef } from "react";
import SVGClose from "../../../../assets/icons/vectors/close.svg";
import SVGLogo from "../../../../assets/icons/vectors/logo.svg";
import useMotion from "../../../../hooks/useMotion";
import Buttons from "../Buttons";
import * as Styled from "./style";

const Warning = forwardRef(({ setShowWarning }, ref) => {
    const motionProps = useMotion({
        variants: {
            initial: { opacity: 0, y: 30 },
            animate: { opacity: 1, y: 0 },
        },
    });

    return (
        <Styled.Wrapper ref={ref} {...motionProps}>
            <Styled.Container>
                <Styled.Logo>
                    <SVGLogo aria-label="Logo do Instagram" />
                </Styled.Logo>

                <Styled.Texts>
                    <span>Entrar no Instagram</span>

                    <p>
                        Entre para ver fotos e vídeos de amigos e descubra outras
                        contas que você vai adorar.
                    </p>
                </Styled.Texts>

                <Buttons $direction="column" $expand />
            </Styled.Container>

            <Styled.Close
                onClick={() => {
                    setShowWarning(false);
                    localStorage.setItem("signInWarning", true);
                }}
            >
                <SVGClose aria-label="Fechar" />
            </Styled.Close>
        </Styled.Wrapper>
    );
});

export default Warning;