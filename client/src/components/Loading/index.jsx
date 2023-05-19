import { useSelector } from "react-redux";

import Wrapper from "./style";
import Image from "../Image";
import IMGLogo from "../../assets/images/logo.png";

export default function Loading() {
    const { isAuthenticated } = useSelector(({ auth }) => auth);

    return (
        <Wrapper $isAuthenticated={isAuthenticated}>
            <Image src={IMGLogo} alt="Logo do Instagram" />
        </Wrapper>
    );
}
