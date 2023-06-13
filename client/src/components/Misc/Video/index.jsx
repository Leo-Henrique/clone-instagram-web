import IMGPlay from "../../../assets/icons/play.png";

export default function Video(props) {
    const { newProps } = {
        default: {
            autoPlay: false,
            controls: false,
            loop: true,
            muted: true,
            playsInline: true,
            preload: "none",
            poster: IMGPlay,
        },
        get newProps() {
            return { ...this.default, ...props };
        },
    };

    return <video {...newProps}></video>;
}
