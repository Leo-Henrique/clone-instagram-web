import React, { useState } from "react";
import SVGAudioMuted from "../../../../assets/icons/vectors/audio-silence.svg";
import SVGAudio from "../../../../assets/icons/vectors/audio.svg";
import PostControl from "../../PostControl";

export default function ControlAudio({ videoRef }) {
    const [muted, setMuted] = useState(true);
    const toggleAudio = () => {
        const video = videoRef.current;

        if (video.muted) {
            setMuted(false);
            video.muted = false;
        } else {
            setMuted(true);
            video.muted = true;
        }
    };

    return (
        <PostControl
            label={muted ? "Reproduzir áudio do vídeo" : "Silenciar áudio do vídeo"}
            $positionY="bottom"
            $positionX="right"
            onClick={toggleAudio}
        >
            {muted ? <SVGAudioMuted /> : <SVGAudio />}
        </PostControl>
    );
}
