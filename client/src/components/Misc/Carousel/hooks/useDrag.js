import { useEffect, useRef } from "react";

export default function useDrag(active) {
    const containerRef = useRef(null);
    const innerRef = useRef(null);
    const isTouchEvent = ({ type }) => type.startsWith("touch");
    const getX = e => {
        let X;

        if (isTouchEvent(e)) X = e.changedTouches[0].pageX;
        else X = e.pageX;

        return Math.floor(X);
    };
    let pressed = false;
    let startX = 0;
    let displacement = 0;
    const start = e => {
        if (!isTouchEvent(e)) e.preventDefault();

        pressed = true;
        startX = getX(e) - displacement;
    };
    const move = e => {
        if (!pressed) return;

        const { walk } = {
            min: 0,
            current: getX(e) - startX,
            max: containerRef.current.offsetWidth - innerRef.current.scrollWidth,
            get walk() {
                console.log(this.current)

                if (this.current >= this.min) return this.min;
                if (this.max >= this.current) return this.max;
                return this.current;
            },
        };

        displacement = walk;
        innerRef.current.style.transform = `translate3d(${walk}px, 0, 0)`;
    };
    const end = e => {
        e.preventDefault();
        pressed = false;
    };

    useEffect(() => {
        const { current: container } = containerRef;

        if (container) {
            const resetDisplacement = () => {
                displacement = 0;
                innerRef.current.style.transform = "initial";
            }
            const observer = new ResizeObserver(resetDisplacement);
            
            observer.observe(container);
            return () => observer.disconnect();
        }
    }, [active])

    return {
        containerRef,
        innerRef,
        events: {
            onTouchStart: start,
            onTouchMove: move,
            onTouchEnd: end,
            onMouseDown: start,
            onMouseMove: move,
            onMouseUp: end,
            onMouseLeave: end,
        },
    };
}
