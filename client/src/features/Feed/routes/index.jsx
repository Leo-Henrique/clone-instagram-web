import { useSelector } from "react-redux";

import useHead from "../../../hooks/useHead";
import Feed from "../components/Feed";
import NewPosts from "../components/NewPosts";
import Template from "../components/Template";
import Welcome from "../components/Welcome";

export default function Main() {
    const hasFeed = useSelector(({ auth }) => auth.user.hasContentInFeed);

    useHead();

    return (
        <>
            <NewPosts />

            <Template>{hasFeed ? <Feed /> : <Welcome />}</Template>
        </>
    );
}
