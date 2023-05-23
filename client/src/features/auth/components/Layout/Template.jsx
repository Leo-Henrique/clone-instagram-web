import { m } from "framer-motion";

import Footer from "../../../../components/Footer";
import useMotion from "../../../../hooks/useMotion";
import Layout from "./style";

export default function Template({ children }) {
    const motionProps = useMotion({ variants: "authRoutes" });

    return (
        <Layout>
            <Layout.Column {...motionProps} as={m.main}>
                {children}
            </Layout.Column>

            <Footer />
        </Layout>
    );
}
