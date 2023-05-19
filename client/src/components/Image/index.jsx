import { useState } from "react";

import Img from "./style";

export default function Image(props) {
    const [load, setLoad] = useState(false);

    return <Img {...props} onLoad={() => setLoad(true)} $load={load} />;
}
