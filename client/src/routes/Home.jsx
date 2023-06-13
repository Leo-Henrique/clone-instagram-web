import { useSelector } from "react-redux";

import SignIn from "../features/auth/routes/SignIn";
import Main from "../features/feed/routes";

export default function Home() {
    const isAuthenticated = useSelector(({ auth }) => auth.isAuthenticated);

    if (isAuthenticated) return <Main />;
    else return <SignIn />;
}
