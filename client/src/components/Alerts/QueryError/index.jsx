import useMotion from "../../../hooks/useMotion";
import * as Styled from "./style";

export default function QueryError({
    customButton: receivedCustomButton,
    ...receivedSettings
}) {
    const { error, refetch, customButton, ...styles } = {
        error: null,
        refetch: null,
        customButton: {
            text: null,
            callback: null,
            ...receivedCustomButton,
        },
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
    const text = () => {
        if (customButton.text) return customButton.text;

        if (refetch) return "Tentar novamente";

        return "Recarregar a página";
    }

    return (
        <Styled.Wrapper {...motionProps} {...styles}>
            <Styled.Text {...styles}>
                {!error || !message
                    ? "Oops, não foi possível carregar o conteúdo :("
                    : messageFormatted()}
            </Styled.Text>

            <Styled.TryAgain
                text={text()}
                expand={false}
                onClick={() => {
                    if (customButton.callback) return customButton.callback();

                    if (refetch) return refetch();
            
                    return location.reload()
                }}
                {...styles}
            />
        </Styled.Wrapper>
    );
}
