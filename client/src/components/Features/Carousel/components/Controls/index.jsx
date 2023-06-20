import { AnimatePresence } from "framer-motion";

import IconPrev from "../../../../../assets/icons/arrow-left.png";
import IconNext from "../../../../../assets/icons/arrow-right.png";
import useMotion from "../../../../../hooks/useMotion";
import PNGIcon from "../../../../Misc/PNGIcon";
import * as Styled from "./style";

export default function Controls({ currentItem, setCurrentItem, items }) {
    const motionProps = useMotion({ transition: "button" });

    return (
        <AnimatePresence>
            {currentItem !== 0 && (
                <Styled.Arrow
                    key="prev"
                    aria-label="Anterior"
                    $position="left"
                    onClick={() => setCurrentItem(currentItem - 1)}
                    {...motionProps}
                >
                    <PNGIcon $src={IconPrev} $size={25} />
                </Styled.Arrow>
            )}

            {currentItem !== items?.length - 1 && (
                <Styled.Arrow
                    key="next"
                    aria-label="Próximo"
                    $position="right"
                    onClick={() => setCurrentItem(currentItem + 1)}
                    {...motionProps}
                >
                    <PNGIcon $src={IconNext} $size={25} />
                </Styled.Arrow>
            )}
        </AnimatePresence>
    );
}
