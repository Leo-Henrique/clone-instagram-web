import { useState, useEffect, useRef } from "react";

import Wrapper from "./style";
import IMGSlide1 from "../../../../assets/images/home-screenshot1.png";
import IMGSlide2 from "../../../../assets/images/home-screenshot2.png";
import IMGSlide3 from "../../../../assets/images/home-screenshot3.png";
import IMGSlide4 from "../../../../assets/images/home-screenshot4.png";
import { useTheme } from "styled-components";

export default function Slideshow() {
    const images = [
        {
            src: IMGSlide1,
            alt: "Captura de tela exibindo publicações do Instagram",
        },
        {
            src: IMGSlide2,
            alt: "Captura de tela exibindo interação com mensagens pelo Instagram",
        },
        {
            src: IMGSlide3,
            alt: "Captura de tela exibindo um perfil de um usuário do Instagram",
        },
        {
            src: IMGSlide4,
            alt: "Captura de tela exibindo uma foto de duas pessoas pela câmera do Instagram",
        },
    ];
    const [currentItem, setCurrentItem] = useState(0);
    const { duration } = useTheme().transitions.slideshow;
    const interval = 6000;
    const container = useRef();

    useEffect(() => {
        const elements = Array.from(container.current.children);
        const current = elements[currentItem];
        const nextItem =
            currentItem !== elements.length - 1 ? currentItem + 1 : 0;
        const nextElement = elements[nextItem];

        setTimeout(() => {
            current.style.opacity = "0";
            nextElement.style.display = "block";
            setTimeout(() => (nextElement.style.opacity = "1"), 20);
            setTimeout(() => {
                current.style.display = "none";
                setCurrentItem(nextItem);
            }, duration + 20);
        }, interval);
    }, [currentItem]);

    return (
        <Wrapper ref={container}>
            {images.map(({ src, alt }, index) => {
                return (
                    <Wrapper.Item
                        key={index}
                        src={src}
                        alt={alt}
                        $currentItem={index === currentItem}
                    />
                );
            })}
        </Wrapper>
    );
}
