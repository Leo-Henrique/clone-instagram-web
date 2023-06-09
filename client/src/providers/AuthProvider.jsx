import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import PageLoading from "../components/Loaders/PageLoading";
import { useAuthQuery } from "../features/auth/api/signIn";
import { signIn } from "../features/auth/slices/auth";

export default function AuthProvider({ children }) {
    const token = useSelector(({ auth }) => auth.token);
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

    useEffect(() => {
        if (token) setTimeout(() => setRender(true), timeLoading);
    }, []);
    useEffect(() => {
        if (isSuccess) dispatch(signIn({ user }));
    }, [isSuccess]);

    if (isError && error.status === 401) localStorage.removeItem("token");

    return (
        <AnimatePresence mode="wait">
            {isLoading || !render ? <PageLoading key="loading" /> : children}
        </AnimatePresence>
    );
}
