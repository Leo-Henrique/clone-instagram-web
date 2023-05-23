import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import PageLoading from "../components/Loaders/PageLoading";
import { useAuthQuery } from "../features/auth/api/signIn";
import { signIn } from "../features/auth/authSlice";

export default function AuthProvider({ children }) {
    const { token } = useSelector(({ auth }) => auth);
    const [render, setRender] = useState(!token);
    const timeLoading = 1000;
    const {
        data: user,
        isLoading,
        isSuccess,
        isError,
        error,
    } = useAuthQuery(false, { skip: !token });
    const dispatch = useDispatch();

    useEffect(() => { token && setTimeout(() => setRender(true), timeLoading) }, []);
    useEffect(() => { user && dispatch(signIn({ user })) }, [isSuccess]);

    if (isError && error.status === 401) localStorage.removeItem("token");

    return (
        <AnimatePresence mode="wait">
            {isLoading || !render ? <PageLoading key="loading" /> : children}
        </AnimatePresence>
    )
}
