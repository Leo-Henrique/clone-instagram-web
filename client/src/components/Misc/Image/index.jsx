import { useState } from "react";

import * as Styled from "./style";

export default function Image(props) {
    const [load, setLoad] = useState(false);

    return (
        <Styled.Image
            onDragStart={e => e.preventDefault()}
            onLoad={() => setLoad(true)}
            $load={load}
            {...props}
        />
    );
}
