import IMGChecked from "../../../../../assets/icons/checked.png";
import PNGIcon from "../../../../../components/Misc/PNGIcon";
import * as Styled from "./style";

export default function Finished() {
    return (
        <Styled.Wrapper>
            <PNGIcon $src={IMGChecked} $size={72} $center={true} />

            <Styled.Title>Isso é tudo</Styled.Title>

            <Styled.Text>Você viu todas as publicações.</Styled.Text>

            <Styled.Button onClick={() => scrollTo(0, 0)}>
                Voltar ao topo
            </Styled.Button>
        </Styled.Wrapper>
    );
}
