import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";

import ForgotPassword from "./ForgotPassword";
import ResetPassword from "./ResetPassword";
import SignUp from "./SignUp";

export default function AuthRoutes() {
    const isAuthenticated = useSelector(({ auth }) => auth.isAuthenticated);

    if (isAuthenticated) return <Navigate to="/" />;
    
    return (
        <Routes>
            <Route path="signup" element={<SignUp />} />
            <Route path="forgot_password" element={<ForgotPassword />} />
            <Route path="reset_password" element={<ResetPassword />} />
        </Routes>
    );
}
