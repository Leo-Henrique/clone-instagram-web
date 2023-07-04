import { useEffect } from "react";

export default function useVisibility({
    wrapperRef,
    innerRef,
    itemsRender,
    externalCurrentItem,
    items,
    setItems,
    currentItem,
    setCurrentItem,
    displacement,
    setDisplacement,
}) {
    const checkCurrentItem = () => {
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
    };

    useEffect(() => {
        const elements = Array.from(innerRef.current.children);

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
    }, [itemsRender]);

    useEffect(() => {
        if (!items) return;

        const highlightClass = "visible";

        items.forEach(({ element }) => element.classList.remove(highlightClass));
        items[currentItem].element.classList.add(highlightClass);
        setDisplacement(items[currentItem].center);

        if (externalCurrentItem) externalCurrentItem[1](currentItem);
    }, [items, currentItem]);

    return checkCurrentItem;
}
