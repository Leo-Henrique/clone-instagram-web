import { Fragment, useEffect, useRef, useState } from "react";
import * as Styled from "./style";

const TextWithMentions = ({ text, match }) => (
    <>
        {text.split(match).map((part, index) => (
            <Fragment key={index}>
                {part.match(match) ? (
                    <Styled.Mention to={`/${part.slice(1)}`}>{part}</Styled.Mention>
                ) : (
                    part
                )}
            </Fragment>
        ))}
    </>
);

export default function Legend({ className, children, text, viewMore, mentions }) {
    const settings = {
        viewMore: {
            use: true,
            maxRows: 2,
            ...viewMore,
        },
        mentions: {
            use: true,
            regex: /(@[\w.]+)/g,
            ...mentions,
        },
    };
    const textRef = useRef(null);
    const [hasLongText, setHasLongText] = useState(null);
    const [expand, setExpand] = useState(false);

    useEffect(() => {
        const { current } = textRef;

        setHasLongText(current.scrollHeight > current.clientHeight);
    }, []);

    return (
        <div className={className}>
            <Styled.Text
                ref={textRef}
                $maxRows={
                    settings.viewMore.use ? settings.viewMore.maxRows : Infinity
                }
                $expand={expand}
            >
                {children}

                {settings.mentions.use ? (
                    <TextWithMentions text={text} match={settings.mentions.regex} />
                ) : (
                    text
                )}
            </Styled.Text>

            {hasLongText && (
                <Styled.Button onClick={() => setExpand(!expand)}>
                    {expand ? "Ver menos" : "Ver mais"}
                </Styled.Button>
            )}
        </div>
    );
}
