import Layout from "./style";
import Footer from "../../../../components/Footer";

export default function Template({ children }) {
    return (
        <Layout>
            <Layout.Column>{children}</Layout.Column>

            <Footer />
        </Layout>
    );
}
