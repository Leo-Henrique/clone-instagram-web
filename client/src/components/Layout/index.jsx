import { useSelector } from "react-redux";
import PrivateLayout from "./PrivateLayout";
import PublicLayout from "./PublicLayout";

export default function Layout({ children, ...rest }) {
    const isAuthenticated = useSelector(({ auth }) => auth.isAuthenticated);

    if (isAuthenticated) return <PrivateLayout {...rest}>{children}</PrivateLayout>;

    return <PublicLayout>{children}</PublicLayout>;
}
