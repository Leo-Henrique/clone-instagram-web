import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";

import AuthRoutes from "../features/auth/routes";
import Home from "./Home";

export default function AppRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="auth/*" element={<AuthRoutes />} />
            </Routes>
        </AnimatePresence>
    );
}
