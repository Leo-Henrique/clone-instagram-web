import { useEffect, useState } from "react";
import { useTheme } from "styled-components";

export default function useBreakpoint(breakpoint) {
    const [condition, setCondition] = useState(null);
    const { breakpoints } = useTheme();
    const mediaQuery = breakpoints[breakpoint];
    const formatName = () => {
        const firstLetter = breakpoint[0];
        const rest = breakpoint.slice(1);

        return `${firstLetter.toUpperCase()}${rest}`;
    };
    const conditionName = `isBreakpoint${formatName()}`;

    if (!mediaQuery) return null;

    useEffect(() => {
        const addBreakpoint = () => {
            const query = mediaQuery.replace("@media ", "");

            matchMedia(query).matches
                ? setCondition(true)
                : setCondition(false);
        };

        addBreakpoint();
        window.addEventListener("resize", addBreakpoint);
        return () => window.removeEventListener("resize", addBreakpoint);
    }, []);

    return {
        mediaQuery,
        [conditionName]: condition,
    };
}
