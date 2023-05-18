import { useState } from "react";

import Wrapper from "./styles";

export default function Input({ label, id, type, form, setForm, ...rest }) {
    const [focused, setFocused] = useState(false);
    const [filled, setFilled] = useState(false);
    const [fieldType, setFieldType] = useState(type);
    const [showPassword, setShowPassword] = useState(false);
    const toggleShowPassword = () => {
        if (fieldType === "password") setFieldType("text");
        else setFieldType("password");
    };

    const change = ({ target: { id, value } }) => {
        setForm({ ...form, [id]: value });

        if (value) {
            setFilled(true);
            id === "password" && setShowPassword(true);
        } else {
            setFilled(false);
            id === "password" && setShowPassword(false);
        }
    };

    return (
        <Wrapper>
            <Wrapper.Label $focused={focused} $filled={filled}>
                <span>{label}</span>
                <input
                    id={id}
                    type={fieldType}
                    onChange={change}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    {...rest}
                />
                {showPassword && (
                    <Wrapper.ShowPassword
                        type="button"
                        onClick={toggleShowPassword}
                    >
                        {fieldType === "password" ? "Exibir" : "Ocultar"}
                    </Wrapper.ShowPassword>
                )}
            </Wrapper.Label>
        </Wrapper>
    );
}