import IMGLogo from "../../../assets/images/logo.png";
import useHead from "../../../hooks/useHead";
import useMotion from "../../../hooks/useMotion";
import Footer from "../../Layout/Footer";
import Image from "../../Misc/Image";
import * as Styled from "./style";

export default function PageLoading() {
    const motionProps = useMotion({
        variants: "opacity",
        transition: "loading",
    });

    useHead();

    return (
        <Styled.Wrapper {...motionProps}>
            <div>
                <Image src={IMGLogo} alt="Logo do Instagram" />
            </div>

            <Footer pageLoading={true} />
        </Styled.Wrapper>
    );
}
