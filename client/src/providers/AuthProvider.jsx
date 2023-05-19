import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useAuthQuery } from "../features/auth/api/signIn";
import { signIn } from "../features/auth/authSlice";

export default function AuthProvider({ children }) {
    const { token } = useSelector(({ auth }) => auth);
    const {
        data: user,
        isLoading,
        isSuccess,
        isError,
        error,
    } = useAuthQuery(false, { skip: !token });
    const dispatch = useDispatch();

    useEffect(() => { user && dispatch(signIn({ user })) }, [isSuccess])

    if (isLoading) return <>Loading...</>;

    if (isError && error.status === 401) localStorage.removeItem("token");

    return children;
}
