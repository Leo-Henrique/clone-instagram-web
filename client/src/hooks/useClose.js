import { useCallback, useEffect, useRef } from "react";

export default function useClose(state, setState) {
    const notCloseIn = useRef();
    const clickOutside = useCallback(({ target }) => {
        if (target.contains(notCloseIn.current)) setState(false);
    });
    const escapeKey = useCallback(({ key }) => {
        if (key === "Escape") setState(false);
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

        state ? addEvents() : removeEvents();
        return () => removeEvents();
    }, [state]);

    return { notClose: notCloseIn };
}
