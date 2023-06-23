import { useEffect } from "react";

export default function useDisableScrollbar(state) {
    const { documentElement: root, body } = document;
    const hasScrollbar = root.scrollHeight > root.clientHeight;
    const scrolling = root.scrollTop;
    const styles = {
        position: "fixed",
        inlineSize: "100%",
        top: `-${scrolling}px`,
        get overflowY() {
            return hasScrollbar ? "scroll" : "hidden";
        },
    };

    useEffect(() => {
        const properties = Object.keys(styles);

        if (state) properties.forEach(key => (body.style[key] = styles[key]));
        else {
            properties.forEach(key => {
                const propertyName = key.replace(
                    /[A-Z]/,
                    match => `-${match.toLowerCase()}`
                );

                body.style.removeProperty(propertyName);
            });
            scrollTo({ top: scrolling, behavior: "instant" });
        }
    }, [state]);
}
