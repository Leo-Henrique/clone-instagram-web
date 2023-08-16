import { useRef } from "react";
import IMGPlay from "../../../assets/icons/play.png";
import SVGAudioMuted from "../../../assets/icons/vectors/audio-silence.svg";
import PostControl from "../PostControl";
import Playback from "./Playback";
import * as Styled from "./style";

export default function Video(receivedSettings) {
    const settings = {
        autoPlay: false,
        controls: false,
        loop: true,
        muted: true,
        playsInline: true,
        preload: "none",
        poster: IMGPlay,
        ...receivedSettings,
    };
    const videoRef = useRef(null);

    return (
        <>
            <Styled.Video ref={videoRef} {...settings} />

            <Playback videoRef={videoRef} />

            <PostControl
                label="Reproduzir áudio do vídeo"
                $positionY="bottom"
                $positionX="right"
            >
                <SVGAudioMuted />
            </PostControl>
        </>
    );
}
