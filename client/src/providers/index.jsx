import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { HelmetProvider } from "react-helmet-async";
import store from "../app/store";
import HelpersProvider from "./HelpersProvider";
import MotionProvider from "./MotionProvider";
import StylesProvider from "./StylesProvider";
import AuthProvider from "./AuthProvider";

export default function AppProvider({ children }) {
    return (
        <Provider store={store}>
            <StylesProvider>
                <BrowserRouter>
                    <MotionProvider>
                        <HelmetProvider>
                            <AuthProvider>
                                <HelpersProvider>{children}</HelpersProvider>
                            </AuthProvider>
                        </HelmetProvider>
                    </MotionProvider>
                </BrowserRouter>
            </StylesProvider>
        </Provider>
    );
}
