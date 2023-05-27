import Layout from "../../components/Layout";
import Navigation from "../../components/Layout/Navigation";
import Logo from "../../components/Misc/Logo";
import useHead from "../../hooks/useHead";
import * as Styled from "./style";

export default function Feed() {
    useHead({});

    return (
        <Layout
            MobileHeader={() => (
                <>
                    <Logo as={Styled.Logo} />

                    <Navigation
                        as={Styled.Navigation}
                        filter={["notifications", "messages"]}
                        reorder={{ messages: 1 }}
                    />
                </>
            )}
        >
            Feed content
        </Layout>
    );
}
