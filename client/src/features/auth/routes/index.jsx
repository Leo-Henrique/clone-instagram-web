import { Route, Routes } from "react-router-dom";

import SignUp from "./SignUp";
import ForgotPassword from "./ForgotPassword";
import ResetPassword from "./ResetPassword";

export default function AuthRoutes() {
    return (
        <Routes>
            <Route path="signup" element={<SignUp />} />
            <Route path="forgot_password" element={<ForgotPassword />} />
            <Route path="reset_password" element={<ResetPassword />} />
        </Routes>
    );
}
