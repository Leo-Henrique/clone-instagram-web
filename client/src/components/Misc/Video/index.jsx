import { useRef, useState } from "react";
import ControlAudio from "./ControlAudio";
import ControlPlayback from "./ControlPlayback";
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

            <ControlPlayback videoRef={videoRef} />

            <ControlAudio videoRef={videoRef} />
        </>
    );
}
