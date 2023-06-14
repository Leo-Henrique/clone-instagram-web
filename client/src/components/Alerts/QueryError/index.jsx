import SVGWarning from "../../../assets/icons/vectors/warning.svg";
import useMotion from "../../../hooks/useMotion";
import Button from "../../Misc/Button";
import * as Styled from "./style";

export default function QueryError({ error, pageError }) {
    const motionProps = useMotion({
        variants: {
            initial: { opacity: 0, scale: 0.6 },
            animate: { opacity: 1, scale: 1 },
        },
        transition: "error",
    });
    const message = error?.data?.error;
    const messageFormatted = () => {
        const firstLetter = message[0];
        const lastLetter = message[message.length - 1];
        const lowercase = firstLetter.toLowerCase() + message.slice(1);

        return `Oops, ${lastLetter === "." ? lowercase.slice(0, -1) : lowercase} :(`;
    };

    return (
        <Styled.Wrapper {...motionProps} $pageError={pageError}>
            {pageError && (
                <Styled.Icon>
                    <SVGWarning />
                </Styled.Icon>
            )}

            <Styled.Text $pageError={pageError}>
                {!error || !message
                    ? "Oops, não foi possível carregar o conteúdo :("
                    : messageFormatted()}
            </Styled.Text>

            {pageError && (
                <Button
                    text="Tentar novamente"
                    expand={false}
                    onClick={() => location.reload()}
                />
            )}
        </Styled.Wrapper>
    );
}
