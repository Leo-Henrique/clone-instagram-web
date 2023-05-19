import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";

import theme from "./styles/theme";
import colorScheme from "./styles/theme/colorScheme";
import GlobalStyle from "./styles/GlobalStyle";
import AuthProvider from "./providers/authProvider";
import AppRoutes from "./routes/";

export default function App() {
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

            <BrowserRouter>
                <AuthProvider>
                    <AppRoutes />
                </AuthProvider>
            </BrowserRouter>
        </ThemeProvider>
    );
}
