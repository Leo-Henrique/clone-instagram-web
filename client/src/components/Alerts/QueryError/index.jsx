import useMotion from "../../../hooks/useMotion";
import Button from "../../Misc/Button";
import * as Styled from "./style";

export default function QueryError({ ...receivedSettings }) {
    const { error, refetch, ...styles } = {
        error: null,
        refetch: null,
        $large: false,
        $center: true,
        $expandHeight: true,
        $padding: null,
        ...receivedSettings,
    };
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
        <Styled.Wrapper {...motionProps} {...styles}>
            <Styled.Text {...styles}>
                {!error || !message
                    ? "Oops, não foi possível carregar o conteúdo :("
                    : messageFormatted()}
            </Styled.Text>

            <Styled.TryAgain
                text={refetch ? "Tentar novamente" : "Recarregar a página"}
                expand={false}
                onClick={() => (refetch ? refetch() : location.reload())}
                {...styles}
            />
        </Styled.Wrapper>
    );
}
