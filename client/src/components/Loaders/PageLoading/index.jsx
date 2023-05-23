import { useSelector } from "react-redux";

import IMGLogo from "../../../assets/images/logo.png";
import useMotion from "../../../hooks/useMotion";
import Image from "../../Misc/Image";
import Wrapper from "./style";
import useHead from "../../../hooks/useHead";

export default function PageLoading() {
    const { isAuthenticated } = useSelector(({ auth }) => auth);
    const motionProps = useMotion({
        variants: "opacity",
        transition: "loading",
    });

    useHead({})

    return (
        <Wrapper $isAuthenticated={isAuthenticated} {...motionProps}>
            <Image src={IMGLogo} alt="Logo do Instagram" />
        </Wrapper>
    );
}
