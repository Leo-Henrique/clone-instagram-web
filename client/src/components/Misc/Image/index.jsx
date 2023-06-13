import { useState } from "react";

import * as Styled from "./style";

export default function Image(props) {
    const [load, setLoad] = useState(false);

    return <Styled.Image onLoad={() => setLoad(true)} $load={load} {...props} />;
}
