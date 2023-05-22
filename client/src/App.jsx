import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import MotionProvider from "./providers/MotionProvider";
import AuthProvider from "./providers/authProvider";
import AppRoutes from "./routes/";
import GlobalStyle from "./styles/GlobalStyle";
import theme from "./styles/theme";
import colorScheme from "./styles/theme/colorScheme";

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
                <MotionProvider>
                    <AuthProvider>
                        <AppRoutes />
                    </AuthProvider>
                </MotionProvider>
            </BrowserRouter>
        </ThemeProvider>
    );
}
