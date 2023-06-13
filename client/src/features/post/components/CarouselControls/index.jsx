import IMGPrev from "../../../../assets/icons/arrow-left.png";
import IMGNext from "../../../../assets/icons/arrow-right.png";
import PNGIcon from "../../../../components/Misc/PNGIcon";

export default function CarouselControls({ currentMedia, totalMedia }) {
    return (
        <>
            {currentMedia !== 0 && (
                <button type="button" aria-label="Voltar">
                    <PNGIcon $src={IMGPrev} $size={30} />
                </button>
            )}

            {currentMedia !== totalMedia - 1 && (
                <button type="button" aria-label="Avançar">
                    <PNGIcon $src={IMGNext} $size={30} />
                </button>
            )}

            <div>
                {Array.from({ length: totalMedia }).map((item, index) => (
                    <div
                        key={index}
                        // $active={currentMedia === index}
                    ></div>
                ))}
            </div>
        </>
    );
}
