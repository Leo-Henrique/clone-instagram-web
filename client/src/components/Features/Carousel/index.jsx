import { memo, useRef, useState } from "react";

import Controls from "./components/Controls";
import Dots from "./components/Dots";
import useDrag from "./hooks/useDrag";
import useVisibility from "./hooks/useVisibility";
import * as Styled from "./style";

const Carousel = ({
    children,
    currentItem: externalCurrentItem,
    drag,
    ...receivedSettings
}) => {
    const defaultSettings = {
        padding: null,
        transition: null,
        drag: {
            active: true,
            mouse: true,
            touch: true,
            ...drag,
        },
        controls: false,
        dots: false,
    };
    const settings = { ...defaultSettings, ...receivedSettings };
    const wrapperRef = useRef(null);
    const innerRef = useRef(null);
    const [items, setItems] = useState(null);
    const [currentItem, setCurrentItem] = useState(
        externalCurrentItem ? externalCurrentItem[0] : 0
    );
    const [displacement, setDisplacement] = useState(0);
    const [pressed, setPressed] = useState(false);
    const states = {
        items,
        setItems,
        currentItem,
        setCurrentItem,
        displacement,
        setDisplacement,
        pressed,
        setPressed,
    };
    const checkCurrentItem = useVisibility({
        wrapperRef,
        innerRef,
        itemsRender: settings.itemsRender,
        externalCurrentItem,
        ...states,
    });
    const dragEvents = useDrag({
        settings: settings.drag,
        checkCurrentItem,
        ...states,
    });

    return (
        <Styled.Wrapper
            ref={wrapperRef}
            $grab={settings.drag.active && settings.drag.mouse}
            $pressed={pressed}
            $padding={settings.padding}
            {...(settings.drag.active && { ...dragEvents })}
        >
            <Styled.Inner
                ref={innerRef}
                $transition={settings.transition}
                $displacement={displacement}
                $droppedDrag={settings.drag.active && !pressed}
            >
                {children}
            </Styled.Inner>

            {settings.controls && (
                <Controls
                    currentItem={currentItem}
                    setCurrentItem={setCurrentItem}
                    items={items}
                />
            )}
            {settings.dots && <Dots currentItem={currentItem} items={items} />}
        </Styled.Wrapper>
    );
};

const handleMemorizedProps = (prevProps, nextProps) => {
    if (!prevProps.currentItem) return false;

    const prevItem = prevProps.currentItem[0];
    const nextItem = nextProps.currentItem[0];

    return prevItem !== nextItem ? true : false;
};

export default memo(Carousel, handleMemorizedProps);
