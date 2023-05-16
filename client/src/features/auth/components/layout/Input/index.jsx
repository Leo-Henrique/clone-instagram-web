import { Wrapper } from "./styles";

export default function Input({ label, ...rest }) {
    return (
        <Wrapper>
            <label>
                <span>{label}</span>
                <input {...rest} />
            </label>
        </Wrapper>
    );
}
