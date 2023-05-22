import { useSelector } from "react-redux";

import IMGLogo from "../../assets/images/logo.png";
import useMotion from "../../hooks/useMotion";
import Image from "../Image";
import Wrapper from "./style";

export default function Loading() {
    const { isAuthenticated } = useSelector(({ auth }) => auth);
    const motionProps = useMotion({
        variants: "opacity",
        transition: "loading",
    });

    return (
        <Wrapper $isAuthenticated={isAuthenticated} {...motionProps}>
            <Image src={IMGLogo} alt="Logo do Instagram" />
        </Wrapper>
    );
}
