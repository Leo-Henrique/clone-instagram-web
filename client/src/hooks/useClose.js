import { useCallback, useEffect, useRef } from "react";

export default function useClose({
    state = null,
    callback,
    clickOutside: { ref, close },
}) {
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
            clickEvents.forEach(event =>
                document.addEventListener(event, clickOutside)
            );
            document.addEventListener("keydown", escapeKey);
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
