import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    keepScrollbar,
    resetScrollbar,
    scrollbarScrolling,
} from "../../../../app/slices/modal";

export default function useScrollbar(modalName) {
    const dispatch = useDispatch();
    const modalOpen = useSelector(({ modal }) => modal[modalName].show);
    const { keep, scrolling } = useSelector(({ modal }) => modal.scrollbar);
    const { documentElement: root, body } = document;
    const hasScrollbar = root.scrollHeight > root.clientHeight;
    const styles = {
        position: "fixed",
        inlineSize: "100%",
        top: `-${root.scrollTop}px`,
        get overflowY() {
            return hasScrollbar ? "scroll" : "hidden";
        },
    };

    useEffect(() => {
        const properties = Object.keys(styles);

        if (modalOpen) {
            if (body.style.overflowY) {
                dispatch(keepScrollbar(true));
                return;
            }

            dispatch(scrollbarScrolling(root.scrollTop));
            setTimeout(() =>
                properties.forEach(key => (body.style[key] = styles[key]))
            );
        } else {
            if (keep) {
                dispatch(keepScrollbar(false));
                return;
            }

            properties.forEach(key => {
                const propertyName = key.replace(
                    /[A-Z]/,
                    match => `-${match.toLowerCase()}`
                );

                body.style.removeProperty(propertyName);
            });

            scrollTo({ top: scrolling, behavior: "instant" });
            dispatch(resetScrollbar());
        }
    }, [modalOpen]);
}
