import { useRef, useState } from "react";
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
        ...receivedSettings,
    };
    const [loaded, setLoaded] = useState(false);
    const videoRef = useRef(null);

    return (
        <>
            <Styled.Video
                ref={videoRef}
                onLoadedData={() => setLoaded(true)}
                $isLoaded={loaded}
                {...settings}
            />

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
