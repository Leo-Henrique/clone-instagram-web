import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useAuthQuery } from "../features/auth/api/signIn";
import { signIn } from "../features/auth/authSlice";
import Loading from "../components/Loading";

export default function AuthProvider({ children }) {
    const [render, setRender] = useState(true);
    const renderDelay = 1000;
    const { token } = useSelector(({ auth }) => auth);
    const {
        data: user,
        isLoading,
        isSuccess,
        isError,
        error,
    } = useAuthQuery(false, { skip: !token });
    const dispatch = useDispatch();

    useEffect(() => { 
        if (token) {
            setRender(false);
            setTimeout(() => setRender(true), renderDelay);
        }
    }, []);
    useEffect(() => { user && dispatch(signIn({ user })) }, [isSuccess]);

    if (isLoading || !render) return <Loading />;

    if (isError && error.status === 401) localStorage.removeItem("token");

    return children;
}
