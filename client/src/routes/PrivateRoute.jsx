import { useSelector } from "react-redux";
import SignIn from "../features/auth/routes/SignIn";

export default function PrivateRoute({
    private: privateElement,
    public: publicElement = <SignIn />,
}) {
    const isAuthenticated = useSelector(({ auth }) => auth.isAuthenticated);

    return isAuthenticated ? privateElement : publicElement;
}
