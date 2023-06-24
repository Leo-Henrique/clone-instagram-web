import { useEffect, useState } from "react";

export default function useDisableScrollbar(state) {
    const { documentElement: root, body } = document;
    const hasScrollbar = root.scrollHeight > root.clientHeight;
    const [scrolling, setScrolling] = useState(root.scrollTop);
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

        if (state) {
            setScrolling(root.scrollTop);
            setTimeout(() => {
                properties.forEach(key => (body.style[key] = styles[key]));
            });
        } else {
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
