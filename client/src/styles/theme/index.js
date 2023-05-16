import { breakpoints, queries } from "./mediaQueries";
import * as mixins from "../mixins";

const theme = {
    breakpoints,
    mixins,
    queries,
    fontFamily:
        "'system-ui', 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    fontSizes: {
        h1: "2.4rem",
        h2: "2rem",
        subh1: "1.6rem",
        body: "1.4rem",
        small: "1.2rem",
        input: "16px",
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
    },
};

export default theme;