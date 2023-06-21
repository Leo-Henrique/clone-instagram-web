import { useDispatch } from "react-redux";

import { AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import PageLoading from "../components/Loaders/PageLoading";
import { useAuthQuery } from "../features/auth/api/signIn";
import { signInThunk } from "../features/auth/slices/auth";

export default function AuthProvider({ children }) {
    const dispatch = useDispatch();
    const { token } = localStorage;
    const {
        data: user,
        isLoading,
        isSuccess,
        isError,
        error,
    } = useAuthQuery(null, { skip: !token });
    const firstRender = useRef(true);
    const [persistedLoading, setPersistedLoading] = useState(!!token);

    useEffect(() => {
        if (firstRender.current) {
            if (token) setTimeout(() => setPersistedLoading(false), 1000);

            firstRender.current = false;
            return;
        }

        if (isError && error.status === 401) localStorage.removeItem("token");

        if (isSuccess) dispatch(signInThunk({ user }));
    }, [isError, isSuccess]);

    return (
        <AnimatePresence mode="wait">
            {isLoading || persistedLoading ? (
                <PageLoading key="loading" />
            ) : (
                children
            )}
        </AnimatePresence>
    );
}
