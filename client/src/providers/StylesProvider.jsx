import { useState } from "react";
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
    };

    return (
        <ThemeProvider theme={{ ...theme, colors }}>
            <GlobalStyle />

            {children}
        </ThemeProvider>
    );
}
