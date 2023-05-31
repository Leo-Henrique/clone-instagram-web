import Layout from "../../../../components/Layout";
import * as Styled from "./style";

export default function Template({ children }) {
    return (
        <Layout
            MobileHeader={() => (
                <>
                    <Styled.Logo />

                    <Styled.Navigation
                        filter={["notifications", "messages"]}
                        reorder={{ messages: 1 }}
                    />
                </>
            )}
        >
            {children}
        </Layout>
    );
}
