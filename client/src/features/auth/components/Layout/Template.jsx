import { m } from "framer-motion";

import Footer from "../../../../components/misc/Footer";
import useMotion from "../../../../hooks/useMotion";
import Layout from "./style";

export default function Template({ children }) {
    const motionProps = useMotion({
        variants: {
            initial: { opacity: 0, x: 15 },
            animate: { opacity: 1, x: 0 },
        },
    });

    return (
        <Layout>
            <Layout.Column {...motionProps} as={m.main}>
                {children}
            </Layout.Column>

            <Footer />
        </Layout>
    );
}
