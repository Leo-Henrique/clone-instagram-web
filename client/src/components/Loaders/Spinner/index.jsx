import SVGLoading from "../../../assets/icons/vectors/loading.svg";
import * as Styled from "./style";

export default function Spinner(props) {
    return (
        <Styled.Wrapper {...props}>
            <SVGLoading aria-label="Carregando..." />
        </Styled.Wrapper>
    );
}
