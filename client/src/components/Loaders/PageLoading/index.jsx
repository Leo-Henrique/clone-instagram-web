import { useSelector } from "react-redux";

import IMGLogo from "../../../assets/images/logo.png";
import useHead from "../../../hooks/useHead";
import useMotion from "../../../hooks/useMotion";
import Image from "../../Misc/Image";
import * as Styled from "./style";

export default function PageLoading() {
    const { isAuthenticated } = useSelector(({ auth }) => auth);
    const motionProps = useMotion({
        variants: "opacity",
        transition: "loading",
    });

    useHead({});

    return (
        <Styled.Wrapper $isAuthenticated={isAuthenticated} {...motionProps}>
            <Image src={IMGLogo} alt="Logo do Instagram" />
        </Styled.Wrapper>
    );
}
