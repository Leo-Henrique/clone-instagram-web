import { useSelector } from "react-redux";

import { AnimatePresence } from "framer-motion";
import Head from "../../../components/Misc/Head";
import Feed from "../components/Feed";
import NewPosts from "../components/NewPosts";
import Template from "../components/Template";
import Welcome from "../components/Welcome";

export default function Main() {
    const hasFeed = useSelector(({ auth }) => auth.user.hasContentInFeed);
    const showNewPosts = useSelector(({ newPosts }) => newPosts.show);

    return (
        <>
            <Head />

            <AnimatePresence>{showNewPosts && <NewPosts />}</AnimatePresence>

            <Template>{hasFeed ? <Feed /> : <Welcome />}</Template>
        </>
    );
}
