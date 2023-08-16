import { AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import SVGPlay from "../../../../assets/icons/vectors/play.svg";
import useMotion from "../../../../hooks/useMotion";
import * as Styled from "./style";

export default function Playback({ videoRef }) {
    const [paused, setPaused] = useState(true);
    const [forcedPause, setForcedPause] = useState(false);
    const motionProps = useMotion({
        variants: {
            initial: { opacity: 0, scale: 0.8, x: "-50%", y: "-50%" },
            animate: { opacity: 1, scale: 1 },
        },
        transition: "button",
    });
    const play = () => {
        setPaused(false);
        videoRef.current.play();
    };
    const pause = () => {
        setPaused(true);
        videoRef.current.pause();
    };
    const togglePlayback = ({ type }) => {
        const isUserInteraction = type === "click";

        if (videoRef.current.paused) {
            play();
            if (isUserInteraction) setForcedPause(false);
        } else {
            pause();
            if (isUserInteraction) setForcedPause(true);
        }
    };

    useEffect(() => {
        const autoPlayback = ([entry]) => (entry.isIntersecting ? play() : pause());
        const observer = new IntersectionObserver(autoPlayback, {
            threshold: 0.3,
        });

        forcedPause ? observer.disconnect() : observer.observe(videoRef.current);
        return () => observer.disconnect();
    }, [forcedPause]);

    return (
        <Styled.Wrapper
            aria-label={paused ? "Reproduzir vídeo" : "Pausar vídeo"}
            onClick={togglePlayback}
        >
            <AnimatePresence>
                {paused && (
                    <Styled.Play {...motionProps}>
                        <SVGPlay />
                    </Styled.Play>
                )}
            </AnimatePresence>
        </Styled.Wrapper>
    );
}
