import { useSelector } from "react-redux";

import useSize from "../../../hooks/useSize";
import * as Styled from "./style";

export default function Footer({ pageLoading, ...rest }) {
    const isAuthenticated = useSelector(({ auth }) => auth.isAuthenticated);
    const [footerRef, footerHeight, footerWidth] = useSize();

    return (
        <Styled.Wrapper
            $isAuthenticated={isAuthenticated}
            $pageLoading={pageLoading}
            {...rest}
        >
            <Styled.Text $pageLoading={pageLoading}>
                {pageLoading ? (
                    <Styled.From>from</Styled.From>
                ) : (
                    <>
                        Feito com <span>&hearts;</span> e React por {"\n"}
                    </>
                )}

                <Styled.Author
                    href="https://www.linkedin.com/in/leonardo-henrique-/"
                    target="_blank"
                    rel="noopener noreferrer"
                    ref={footerRef}
                    $isAuthenticated={isAuthenticated}
                    $width={footerWidth}
                    $pageLoading={pageLoading}
                >
                    Leonardo Henrique
                </Styled.Author>
                {pageLoading || "."}
            </Styled.Text>
        </Styled.Wrapper>
    );
}
