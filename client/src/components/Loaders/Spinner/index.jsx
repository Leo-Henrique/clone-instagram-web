import SVGLoading from "../../../assets/icons/vectors/loading.svg";
import { Wrapper } from "./style";

export default function Spinner(props) {
    return (
        <Wrapper ${...props}>
            <SVGLoading aria-label="Carregando..." />
        </Wrapper>
    );
}
