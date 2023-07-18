import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";

import AuthRoutes from "../features/auth/routes";
import Feed from "../features/feed/routes";
import PostRoute from "../features/post/routes";
import NotFound from "./NotFound";
import PrivateRoute from "./PrivateRoute";

export default function AppRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<PrivateRoute private={<Feed />} />} />
                <Route path="auth/*" element={<AuthRoutes />} />
                <Route path="post/:postId" element={<PostRoute />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </AnimatePresence>
    );
}
