import IMGLogo from "../../../assets/images/logo.png";
import Head from "../../../components/Misc/Head";
import useMotion from "../../../hooks/useMotion";
import Footer from "../../Misc/Footer";
import Image from "../../Misc/Image";
import * as Styled from "./style";

export default function PageLoading() {
    const motionProps = useMotion({
        variants: "opacity",
        transition: "loading",
    });

    return (
        <Styled.Wrapper {...motionProps}>
            <Head />

            <Styled.Logo>
                <Image src={IMGLogo} alt="Logo do Instagram" />
            </Styled.Logo>

            <Footer pageLoading={true} />
        </Styled.Wrapper>
    );
}
