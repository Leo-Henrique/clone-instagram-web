import { useEffect, useState } from "react";

import { Button } from "./style";
import Spinner from "../../Loaders/Spinner";

export default function SubmitBtn({ text, isLoading, form }) {
    const [filledFields, setFilledFields] = useState(form ? false : true);

    useEffect(() => {
        if (form) {
            const notFilled = Object.values(form).filter(value => !value);

            notFilled.length ? setFilledFields(false) : setFilledFields(true);
        }
    }, [form]);

    return (
        <Button
            disabled={isLoading || !filledFields}
            $filledFields={filledFields}
        >
            {isLoading ? (
                <Spinner $themeColor="white" $padding="1.5px 0" />
            ) : (
                text
            )}
        </Button>
    );
}
