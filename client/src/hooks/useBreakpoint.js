import { useEffect, useState } from "react";
import { useTheme } from "styled-components";





export default function useBreakpoint(breakpoints) {
    const conditionName = breakpoint => {
        const formatName = () => {
            const firstLetter = breakpoint[0];
            const rest = breakpoint.slice(1);

            return `${firstLetter.toUpperCase()}${rest}`;
        };

        return `isBreakpoint${formatName()}`;
    };
    const [conditions, setConditions] = useState(() => {
        const obj = {};

        breakpoints.forEach(breakpoint => {
            obj[conditionName(breakpoint)] = null;
        });

        return obj;
    });
    const theme = useTheme();

    useEffect(() => {
        const observeQuery = () => {
            let newConditions = {};

            breakpoints.forEach(breakpoint => {
                const mediaQuery = theme.breakpoints[breakpoint];
                const query = mediaQuery.replace("@media ", "");
                const condition = conditionName(breakpoint);

                newConditions[condition] = matchMedia(query).matches;
            });

            setConditions(newConditions);
        };

        observeQuery();
        window.addEventListener("resize", observeQuery);
        return () => window.removeEventListener("resize", observeQuery);
    }, []);

    return conditions;
}
