import { useState } from "react";
import SVGEmote from "../../../../assets/icons/vectors/emoji.svg";
import * as Styled from "./style";

export default function AddComment() {
    const [comment, setComment] = useState("");
    const change = ({ target }) => {
        const defineHeight = () => {
            const lineHeight = parseFloat(getComputedStyle(target).lineHeight);
            const max = lineHeight * 4;

            target.style.height = "inherit";
            target.style.height = `${Math.min(target.scrollHeight, max)}px`;
        };

        setComment(target.value);
        defineHeight();
    };

    return (
        <Styled.Wrapper>
            <Styled.ViewEmotes aria-label="Ver emojis">
                <SVGEmote />
            </Styled.ViewEmotes>

            <Styled.ToComment
                autoComplete="off"
                placeholder="Adicione um comentário..."
                spellCheck="true"
                value={comment}
                onChange={change}
                rows="1"
            ></Styled.ToComment>

            <Styled.Submit>Publicar</Styled.Submit>
        </Styled.Wrapper>
    );
}
