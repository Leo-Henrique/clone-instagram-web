import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";

import { startBreakpoints } from "../app/slices/breakpoints";
import { setInitialTheme } from "../app/slices/theme";
import GlobalStyle from "../styles/GlobalStyle";
import styledTheme from "../styles/theme";
import colorScheme from "../styles/theme/colorScheme";

export default function StylesProvider({ children }) {
    const dispatch = useDispatch();
    const {
        theme,
        auth: { isAuthenticated },
    } = useSelector(state => state);
    const colors = { ...colorScheme[theme], ...colorScheme.global };

    useEffect(() => {
        dispatch(startBreakpoints(styledTheme.breakpoints));
    }, []);
    useEffect(() => {
        dispatch(setInitialTheme());
    }, [setInitialTheme, isAuthenticated]);

    return (
        <ThemeProvider theme={{ ...styledTheme, colors }}>
            <GlobalStyle />

            {children}
        </ThemeProvider>
    );
}
