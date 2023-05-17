import { Route, Routes } from "react-router-dom";

import Home from "./Home";
import AuthRoutes from "../features/auth/routes";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="auth/*" element={<AuthRoutes />} />
        </Routes>
    );
}
 