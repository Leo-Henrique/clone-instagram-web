import { useCallback, useEffect } from "react";

export default function useClose({
    state = null,
    callback,
    clickOutside: { ref, close },
    options: receivedOptions = {},
}) {
    const options = {
        clickOutside: true,
        escapeKey: true,
        ...receivedOptions,
    };
    const clickOutside = useCallback(({ target }) => {
        if (close) target === ref.current && callback();
        else !ref.current.contains(target) && callback();
    });
    const escapeKey = useCallback(({ key }) => {
        if (key === "Escape") callback();
    });

    useEffect(() => {
        const clickEvents = ["touchstart", "mousedown"];
        const addEvents = () => {
            if (options.clickOutside)
                clickEvents.forEach(event =>
                    document.addEventListener(event, clickOutside)
                );

            if (options.escapeKey) document.addEventListener("keydown", escapeKey);
        };
        const removeEvents = () => {
            clickEvents.forEach(event =>
                document.removeEventListener(event, clickOutside)
            );
            document.removeEventListener("keydown", escapeKey);
        };

        if (state !== null) state ? addEvents() : removeEvents();
        else addEvents();

        return () => removeEvents();
    }, [state]);
}
