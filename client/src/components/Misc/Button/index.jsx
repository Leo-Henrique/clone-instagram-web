import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Spinner from "../../Loaders/Spinner";
import * as Styled from "./style";

export default function Button({
    link,
    text,
    isLoading,
    form,
    expand,
    primary,
    ...rest
}) {
    const [filledFields, setFilledFields] = useState(form ? false : true);

    useEffect(() => {
        if (form) {
            const notFilled = Object.values(form).filter(value => !value);

            notFilled.length ? setFilledFields(false) : setFilledFields(true);
        }
    }, [form]);

    return (
        <Styled.Button
            disabled={isLoading || !filledFields}
            $expand={expand}
            $primary={primary}
            {...(link && { as: Link })}
            {...rest}
        >
            {isLoading ? <Spinner $themeColor="white" $padding="1.5px 0" /> : text}
        </Styled.Button>
    );
}
