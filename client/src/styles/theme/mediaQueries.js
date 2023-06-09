const media = "@media";
const property = "max-width";
const sizes = {
    xxl: "1399.98px",
    xl: "1263px",
    lg: "991.98px",
    md: "767.98px",
    sm: "575.98px",
    authSm: "450px",
};

export const breakpoints = {};

Object.keys(sizes).forEach(name => {
    breakpoints[name] = `${media} (${property}: ${sizes[name]})`;
});

export const breakpointsStates = {};

Object.keys(sizes).forEach(name => {
    const upperCaseName = `${name[0].toUpperCase()}${name.slice(1)}`;
    const stateName = `isBreakpoint${upperCaseName}`;

    breakpointsStates[stateName] = `(${property}: ${sizes[name]})`;
});

const desktop = `${media} not all and (hover: none)`;
const animation = `${media} (prefers-reduced-motion: no-preference)`;

export const queries = { desktop, animation };
