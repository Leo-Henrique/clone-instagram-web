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
        slideshow: {
            duration: 1500,
            timingFunction: "ease-in",
        },
        loading: {
            duration: 150,
            timingFunction: "ease-in",
        },
    },
    zIndexes: {
        navbar: 5,
        tooltip: 10,
        message: 15,
    },
    containerX: "15px",
};

export default theme;
