import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import useCopy from "../../../../../../hooks/useCopy";
import AuthUserOptions from "./AuthUserOptions";
import InstagramUserOptions from "./InstagramUserOptions";

export default function ViewMore({ post }) {
    const location = useLocation();
    const authUserId = useSelector(({ auth }) => auth.user?.id);
    const postLink = `/post/${post.id}`;
    const copyPostLink = useCopy({
        text: location.origin + postLink,
        success: "O link da publicação foi copiado para a área de transferência.",
        error: "Não foi possível copiar o link da publicação.",
    });
    const globalOptions = () => {
        const options = [
            {
                name: "Copiar link",
                callback: copyPostLink,
            },
        ];
        const goToPostPage = {
            name: "Ir para a publicação",
            callback: postLink,
        };

        if (location.pathname.startsWith("/post")) return options;

        return [goToPostPage, ...options];
    };

    if (post.user.id === authUserId)
        return <AuthUserOptions post={post} globalOptions={globalOptions()} />;
    else return <InstagramUserOptions post={post} globalOptions={globalOptions()} />;
}
