import { AnimatePresence } from "framer-motion";
import { useState } from "react";

import useMotion from "../../../../../../hooks/useMotion";
import * as Styled from "./style";

export default function Input({ label, id, type, form, setForm, ...rest }) {
    const [focused, setFocused] = useState(false);
    const [filled, setFilled] = useState(false);
    const [fieldType, setFieldType] = useState(type);
    const [showPassword, setShowPassword] = useState(false);
    const toggleShowPassword = () => {
        if (fieldType === "password") setFieldType("text");
        else setFieldType("password");
    };
    const motionProps = useMotion();

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
        <Styled.Wrapper>
            <Styled.Label $focused={focused} $filled={filled}>
                <span>{label}</span>
                <input
                    id={id}
                    type={fieldType}
                    onChange={change}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    {...rest}
                />
                <AnimatePresence>
                    {showPassword && (
                        <Styled.ShowPassword
                            type="button"
                            onClick={toggleShowPassword}
                            {...motionProps}
                        >
                            {fieldType === "password" ? "Exibir" : "Ocultar"}
                        </Styled.ShowPassword>
                    )}
                </AnimatePresence>
            </Styled.Label>
        </Styled.Wrapper>
    );
}
