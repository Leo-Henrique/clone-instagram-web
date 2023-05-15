import { useState } from "react";
import { ThemeProvider } from "styled-components";

import theme from "./styles/theme";
import colorScheme from "./styles/theme/colorScheme";
import GlobalStyle from "./styles/GlobalStyle";

export default function App() {
    const [themePreference, setThemePreference] = useState(() => {
        const lightPreference = "(preferes-color-scheme: light)";

        return matchMedia(lightPreference).matches ? "light" : "dark";
    });
    const colors = {
        ...colorScheme[themePreference],
        ...colorScheme.global
    };

    return (
        <ThemeProvider theme={{ ...theme, colors }}>
            <GlobalStyle />
        </ThemeProvider>
    )
}
