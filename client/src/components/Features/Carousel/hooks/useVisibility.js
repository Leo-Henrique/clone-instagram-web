import { useEffect } from "react";

export default function useVisibility({
    wrapperRef,
    innerRef,
    children,
    externalCurrentItem,
    items,
    setItems,
    currentItem,
    setCurrentItem,
    displacement,
    setDisplacement,
    pressed,
}) {
    const centerCurrentItem = () => setDisplacement(items[currentItem].center);

    useEffect(() => {
        const elements = Array.from(innerRef.current.children);

        if (elements.length <= 1) return;

        const definePositions = () => {
            const getPositions = element => ({
                element,
                get center() {
                    const wrapperWidth = wrapperRef.current.offsetWidth;
                    const leftover = wrapperWidth - element.offsetWidth;

                    return -(element.offsetLeft - leftover / 2);
                },
            });
            const elementsWithPosition = elements.map(getPositions);

            setItems(elementsWithPosition);
        };
        const observer = new ResizeObserver(definePositions);

        observer.observe(wrapperRef.current);
        return () => observer.disconnect();
    }, [children]);

    useEffect(() => {
        if (!items) return;

        const positions = items.map(({ center }) => center);
        const nearestPosition = positions.reduce((acc, position) =>
            Math.abs(position - displacement) < Math.abs(acc - displacement)
                ? position
                : acc
        );
        const nearestIndex = positions.findIndex(
            position => position === nearestPosition
        );

        if (nearestIndex !== currentItem) setCurrentItem(nearestIndex);
        if (!pressed) centerCurrentItem();
    }, [items, displacement]);

    useEffect(() => {
        if (!items) return;

        const highlightClass = "visible";

        items.forEach(({ element }) => element.classList.remove(highlightClass));
        items[currentItem].element.classList.add(highlightClass);
        centerCurrentItem();
        
        if (externalCurrentItem) externalCurrentItem[1](currentItem);
    }, [items, currentItem]);
}
