import { AnimatePresence } from "framer-motion";

import useMotion from "../../../../../../hooks/useMotion";
import * as Styled from "./style";

export default function Error({ isError, error, ...rest }) {
    const motionProps = useMotion({ variants: "height" });

    return (
        <AnimatePresence>
            {isError && (
                <Styled.Wrapper {...motionProps} {...rest}>
                    <p>
                        {error?.data?.error
                            ? error.data.error
                            : "Um erro inesperado ocorreu. Tente novamente."}
                    </p>
                </Styled.Wrapper>
            )}
        </AnimatePresence>
    );
}
