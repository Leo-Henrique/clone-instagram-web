import { AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";
import Layout from "../../../components/Layout";
import Head from "../../../components/Misc/Head";
import useMotion from "../../../hooks/useMotion";
import Feed from "../components/Feed";
import FeedHeader from "../components/FeedHeader";
import NewPosts from "../components/NewPosts";
import Welcome from "../components/Welcome";

export default function Main() {
    const hasFeed = useSelector(({ auth }) => auth.user.hasContentInFeed);
    const showNewPosts = useSelector(({ newPosts }) => newPosts.show);

    return (
        <>
            <Head />

            <AnimatePresence>{showNewPosts && <NewPosts />}</AnimatePresence>

            <Layout privateHeader={<FeedHeader />}>
                <AnimatePresence mode="wait">
                    {hasFeed ? <Feed key="feed" /> : <Welcome key="welcome" />}
                </AnimatePresence>
            </Layout>
        </>
    );
}
