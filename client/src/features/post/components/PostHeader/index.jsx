import { useNavigate } from "react-router-dom";
import SVGBack from "../../../../assets/icons/vectors/arrow-simple.svg";
import * as Styled from "./style";

export default function PostHeader() {
    const navigate = useNavigate();

    return (
        <>
            <Styled.Back onClick={() => navigate(-1)}>
                <SVGBack aria-label="Voltar" />
            </Styled.Back>

            <Styled.Title>Publicação</Styled.Title>

            <div></div>
        </>
    );
}
