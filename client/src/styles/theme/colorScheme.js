import { darken, lighten } from "polished";

const colorScheme = {
    light: {
        background: "#FAFAFA",
        block: "#FFF",
        blockSupport1: "#EFEFEF",
        blockSupport2: "#EFEFEF",
        blockSupport3: "#DBDBDB",
        text: "#000",
        textSupport1: "#262626",
        textSupport2: "#737373",
        get textSupport3() {
            return lighten(0.15, this.textSupport2);
        },
        footer: "#C7C7C7",
        separator: "#DBDBDB",
        stroke: "#DBDBDB",
        strokeFocus: "#A8A8A8",
        spinner: "#C7C7C7",
        skeletonBlock: "#DCDCDC",
        skeletonAnimate: "#E3E3E3",
    },
    dark: {
        background: "#000",
        block: "#000",
        blockSupport1: "#262626",
        blockSupport2: "#414141",
        blockSupport3: "#363636",
        text: "#F5F5F5",
        textSupport1: "#FAFAFA",
        textSupport2: "#A8A8A8",
        get textSupport3() {
            return darken(0.17, this.textSupport2);
        },
        footer: "#737373",
        separator: "#131313",
        stroke: "#262626",
        strokeFocus: "#262626",
        spinner: "#737373",
        skeletonBlock: "#262626",
        skeletonAnimate: "#363636",
    },
    global: {
        messageBackground: "#171717",
        messageText: "#F5F5F5",
        postConfig: "rgba(26, 26, 26, .8)",
        postMarked: "rgba(0, 0, 0, .85)",
        postAudio: "rgba(219,219,219,.2)",
        postPlay: "rgba(0,0,0,.5)",
        primaryLight2: "#e0f1ff",
        primaryLight1: "#29a6f9",
        primary: "#0095F6",
        primaryDark1: "#1877F2",
        primaryDark2: "#00376B",
        secondary: "#FF3040",
        danger: "#ED4956",
        white: "#FFF",
        black: "#000",
        gradient: `linear-gradient(
            45deg, 
            #f09433 0%,
            #e6683c 25%,
            #dc2743 50%,
            #cc2366 75%,
            #bc1888 100%
        )`,
    },
};

export default colorScheme;
