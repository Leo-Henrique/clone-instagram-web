import { styled } from "styled-components";
import { m } from "framer-motion";

const Column = styled(m.div)`
    max-width: 350px;
    width: 100%;
    flex: 1;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export default Column;
