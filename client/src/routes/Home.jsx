import { useSelector } from "react-redux";

import SignIn from "../features/auth/routes/SignIn";
import Feed from "../features/Feed/routes";

export default function Home() {
    const { isAuthenticated } = useSelector(({ auth }) => auth);

    if (isAuthenticated) return <Feed />;
    else return <SignIn />;
}
