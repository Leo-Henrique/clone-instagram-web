import * as mixins from "../mixins";
import { breakpoints, queries } from "./mediaQueries";

const theme = {
    breakpoints,
    mixins,
    queries,
    fontFamily: "'system-ui', 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    fontSizes: {
        h1: "2.4rem",
        h2: "2rem",
        subh1: "1.6rem",
        body: "1.4rem",
        small: "1.2rem",
    },
    transitions: {
        global: {
            duration: 300,
            timingFunction: "ease-in-out",
        },
        button: {
            duration: 200,
            timingFunction: "ease-in-out",
        },
        loading: {
            duration: 150,
            timingFunction: "ease-in",
        },
        error: {
            duration: 200,
            timingFunction: "ease-in-out",
        },
        slideshow: {
            duration: 1500,
            timingFunction: "ease-in",
        },
        carousel: {
            duration: 200,
            timingFunction: "ease",
        },
        modal: {
            duration: 200,
            timingFunction: "ease-in-out"
        }
    },
    zIndexes: {
        navbar: 5,
        tooltip: 10,
        newPosts: 15,
        modal: {
            default: 20,
            users: 25,
            options: 30,
            confirmation: 35,
        },
        message: 40,
    },
    global: {
        containerPaddingX: "15px",
        containerPaddingY: "20px",
        get container() {
            return `calc(935px + ${this.containerPaddingY} * 2)`
        }
    },
};

export default theme;
