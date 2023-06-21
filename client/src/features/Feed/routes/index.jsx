import { useSelector } from "react-redux";

import Head from "../../../components/Misc/Head";
import Feed from "../components/Feed";
import NewPosts from "../components/NewPosts";
import Template from "../components/Template";
import Welcome from "../components/Welcome";

export default function Main() {
    const hasFeed = useSelector(({ auth }) => auth.user.hasContentInFeed);

    return (
        <>
            <Head />

            <NewPosts />

            <Template>{hasFeed ? <Feed /> : <Welcome />}</Template>
        </>
    );
}
