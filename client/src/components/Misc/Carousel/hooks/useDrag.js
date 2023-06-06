export default function useDrag({ containerRef, innerRef }) {
    const isTouchEvent = ({ type }) => type.startsWith("touch");
    const getX = e => {
        let X;

        if (isTouchEvent(e)) X = e.changedTouches[0].pageX;
        else X = e.pageX;

        return Math.floor(X);
    };
    const walk = {
        get containerWidth() {
            return containerRef.current.offsetWidth;
        },
        get innerWidth() {
            return innerRef.current.scrollWidth;
        },
        get min() {
            const firstItem = innerRef.current.children[0];
            const itemWidth = firstItem.offsetWidth;

            return this.containerWidth / 2 - itemWidth / 2;
        },
        get max() {
            const items = innerRef.current.children;
            const lastItem = innerRef.current.children[items.length - 1];
            const itemWidth = lastItem.offsetWidth;
            const itemCenter = this.containerWidth / 2 - itemWidth / 2;

            return this.containerWidth - this.innerWidth - itemCenter;
        },
        current(e) {
            const walk = getX(e) - startX;

            if (walk >= this.min) return this.min;
            if (walk <= this.max) return this.max;

            return walk;
        },
    };
    let pressed = false;
    let startX = 0;
    let displacement = 0;
    const addDisplacement = value => {
        displacement = value;
        innerRef.current.style.transform = `translate3d(${value}px, 0, 0)`;
    };
    const start = e => {
        if (!isTouchEvent(e)) e.preventDefault();

        pressed = true;
        startX = getX(e) - displacement;
    };
    const move = e => {
        if (!pressed) return;

        addDisplacement(walk.current(e));
    };
    const end = e => {
        e.preventDefault();
        pressed = false;
    };

    return {
        onTouchStart: start,
        onTouchMove: move,
        onTouchEnd: end,
        onMouseDown: start,
        onMouseMove: move,
        onMouseUp: end,
        onMouseLeave: end,
        initialDisplacement: () => addDisplacement(walk.min),
    };
}
