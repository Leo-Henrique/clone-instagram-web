import { AnimatePresence } from "framer-motion";

import useMotion from "../../../../../../hooks/useMotion";
import { Wrapper } from "./style";

export default function Error({ isError, error, ...rest }) {
    const motionProps = useMotion({ variants: "height" });

    return (
        <AnimatePresence>
            {isError && (
                <Wrapper {...motionProps} {...rest}>
                    <p>
                        {error.data
                            ? error.data.error
                            : "Um erro inesperado ocorreu. Tente novamente."}
                    </p>
                </Wrapper>
            )}
        </AnimatePresence>
    );
}
