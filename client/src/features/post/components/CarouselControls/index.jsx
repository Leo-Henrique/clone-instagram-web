import IMGPrev from "../../../../assets/icons/arrow-left.png";
import IMGNext from "../../../../assets/icons/arrow-right.png";
import PNGIcon from "../../../../components/Misc/PNGIcon";
import * as Styled from "./style";

export default function CarouselControls({ currentMedia, totalMedia }) {
    return (
        <>
            {currentMedia !== 0 && (
                <Styled.Arrow type="button" aria-label="Voltar" $direction="left">
                    <PNGIcon $src={IMGPrev} $size={25} />
                </Styled.Arrow>
            )}

            {currentMedia !== totalMedia - 1 && (
                <Styled.Arrow type="button" aria-label="Avançar" $direction="right">
                    <PNGIcon $src={IMGNext} $size={25} />
                </Styled.Arrow>
            )}

            <Styled.Dots>
                {Array.from({ length: totalMedia }).map((item, index) => (
                    <Styled.Dot
                        key={index}
                        $active={currentMedia === index}
                    ></Styled.Dot>
                ))}
            </Styled.Dots>
        </>
    );
}
