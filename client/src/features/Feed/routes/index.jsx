import { useSelector } from "react-redux";

import { AnimatePresence } from "framer-motion";
import Layout from "../../../components/Layout";
import Head from "../../../components/Misc/Head";
import Feed from "../components/Feed";
import LayoutHeader from "../components/LayoutHeader";
import NewPosts from "../components/NewPosts";
import Welcome from "../components/Welcome";

export default function Main() {
    const hasFeed = useSelector(({ auth }) => auth.user.hasContentInFeed);
    const showNewPosts = useSelector(({ newPosts }) => newPosts.show);

    return (
        <>
            <Head />

            <AnimatePresence>{showNewPosts && <NewPosts />}</AnimatePresence>

            <Layout PrivateHeader={<LayoutHeader />}>
                {hasFeed ? <Feed /> : <Welcome />}
            </Layout>
        </>
    );
}
