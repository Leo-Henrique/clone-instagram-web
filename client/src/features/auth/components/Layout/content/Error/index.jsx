import { Wrapper } from "./style";

export default function Error({ error: { data }, ...rest }) {
    return <Wrapper {...rest}>{data.error}</Wrapper>;
}
