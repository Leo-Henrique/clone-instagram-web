import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "../styles/GlobalStyle";
import styledTheme from "../styles/theme";
import colorScheme from "../styles/theme/colorScheme";
import { setInitialTheme } from "../app/slices/theme";

export default function StylesProvider({ children }) {
    const dispatch = useDispatch();
    const { theme, auth: { isAuthenticated } } = useSelector(state => state);
    const colors = {
        ...colorScheme[theme],
        ...colorScheme.global,
        light: colorScheme.light,
        dark: colorScheme.dark,
    }

    useEffect(() => { dispatch(setInitialTheme()); }, [isAuthenticated]);

    return (
        <ThemeProvider theme={{ ...styledTheme, colors }}>
            <GlobalStyle $isAuthenticated={isAuthenticated} />

            {children}
        </ThemeProvider>
    );
}
