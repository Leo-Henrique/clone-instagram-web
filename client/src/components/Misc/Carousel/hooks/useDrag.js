import { useTheme } from "styled-components";

export default function useDrag({ containerRef, innerRef, visibleClass }) {
    const theme = useTheme();
    const helpers = {
        isTouchEvent: ({ type }) => type.startsWith("touch"),
        getX(e) {
            let X;

            if (this.isTouchEvent(e)) X = e.changedTouches[0].pageX;
            else X = e.pageX;

            return Math.floor(X);
        },
    };
    const actions = {
        addDisplacement(value) {
            const propertyValue = `translate3d(${value}px, 0, 0)`;

            innerRef.current.style.transform = propertyValue;
        },
        addCenteringTransition(add) {
            const { duration, timingFunction } = theme.transitions.carousel;
            const propertyValue = `transform ${duration}ms ${timingFunction}`;

            if (add) innerRef.current.style.transition = propertyValue;
            else innerRef.current.style.removeProperty("transition");
        },
    };
    const centeredItem = item => {
        const getItem = item => {
            const items = Array.from(innerRef.current.children);

            switch (item) {
                case "first":
                    return items[0];
                case "last":
                    return items[items.length - 1];
                case "current":
                    return items.find(item => item.classList.contains(visibleClass));
            }
        };
        const element = getItem(item) || getItem("first");
        const containerWidth = containerRef.current.offsetWidth;
        const margin = containerWidth - element.offsetWidth;
        const invertSign = num => num * -1;

        return invertSign(element.offsetLeft - margin / 2);
    };
    let pressed = false;
    let startX = 0;
    const start = e => {
        if (!helpers.isTouchEvent(e)) e.preventDefault();

        pressed = true;
        e.currentTarget.style.cursor = "grabbing";
        startX = helpers.getX(e) - centeredItem("current");
        actions.addCenteringTransition(false);
    };
    const move = e => {
        if (!pressed) return;

        const walk = () => {
            const current = helpers.getX(e) - startX;
            const min = centeredItem("first");
            const max = centeredItem("last");

            if (current >= min) return min;
            if (current <= max) return max;

            return current;
        };

        actions.addDisplacement(walk());
    };
    const end = e => {
        e.preventDefault();

        pressed = false;
        e.currentTarget.style.cursor = "grab";
        actions.addCenteringTransition(true);
        actions.addDisplacement(centeredItem("current"));
    };

    return {
        onTouchStart: start,
        onTouchMove: move,
        onTouchEnd: end,
        onMouseDown: start,
        onMouseMove: move,
        onMouseUp: end,
        onMouseLeave: end,
        adjustDisplacement: () => actions.addDisplacement(centeredItem("current")),
    };
}
