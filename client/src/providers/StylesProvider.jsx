import { useState } from "react";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "../styles/GlobalStyle";
import theme from "../styles/theme";
import colorScheme from "../styles/theme/colorScheme";

export default function StylesProvider({ children }) {
    const [themePreference, setThemePreference] = useState(() => {
        const lightPreference = "(preferes-color-scheme: light)";

        return matchMedia(lightPreference).matches ? "light" : "dark";
    });
    const colors = {
        ...colorScheme[themePreference],
        ...colorScheme.global,
        light: colorScheme.light,
        dark: colorScheme.dark,
    };
    const { isAuthenticated } = useSelector(({ auth }) => auth);

    return (
        <ThemeProvider theme={{ ...theme, colors }}>
            <GlobalStyle $isAuthenticated={isAuthenticated} />

            {children}
        </ThemeProvider>
    );
}
