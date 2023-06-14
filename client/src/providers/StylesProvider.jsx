import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";

import { watchBreakpoints } from "../app/slices/breakpoints";
import { setDefaultTheme } from "../app/slices/theme";
import GlobalStyle from "../styles/GlobalStyle";
import theme from "../styles/theme";
import colorScheme from "../styles/theme/colorScheme";

export default function StylesProvider({ children }) {
    const dispatch = useDispatch();
    const themeName = useSelector(({ theme }) => theme);
    const isAuthenticated = useSelector(({ auth }) => auth.isAuthenticated);
    const colors = { ...colorScheme[themeName], ...colorScheme.global };

    useEffect(() => {
        dispatch(watchBreakpoints());
    }, []);

    useEffect(() => {
        dispatch(setDefaultTheme());
    }, [isAuthenticated]);

    return (
        <ThemeProvider theme={{ name: themeName, colors, ...theme }}>
            <GlobalStyle $isAuthenticated={isAuthenticated} />

            {children}
        </ThemeProvider>
    );
}
