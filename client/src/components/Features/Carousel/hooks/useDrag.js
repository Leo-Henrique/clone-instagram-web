import { useState } from "react";

export default function useDrag({
    settings,
    checkCurrentItem,
    pressed,
    setPressed,
    displacement,
    setDisplacement,
    items,
    currentItem,
}) {
    const [startX, setStartX] = useState(0);
    const getX = e => {
        let x;

        if (e.type.startsWith("touch")) x = e.changedTouches[0].pageX;
        else x = e.pageX;

        return parseInt(x);
    };
    const start = e => {
        if (e.type.startsWith("mouse")) e.preventDefault();

        setPressed(true);
        setStartX(getX(e) - displacement);
    };
    const move = e => {
        const walk = -(startX - getX(e));
        const min = items[0].center;
        const max = items[items.length - 1].center;

        if (walk > min) return setDisplacement(min);
        if (walk < max) return setDisplacement(max);

        setDisplacement(walk);
        checkCurrentItem();
    };
    const end = () => {
        setPressed(false);
        setDisplacement(items[currentItem].center);
    };

    return {
        ...(settings.mouse && {
            onMouseDown: start,
            onMouseMove: pressed ? move : null,
            onMouseUp: end,
            onMouseLeave: end,
        }),
        ...(settings.touch && {
            onTouchStart: start,
            onTouchMove: pressed ? move : null,
            onTouchEnd: end,
        }),
    };
}
