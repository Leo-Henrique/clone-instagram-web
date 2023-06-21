import { Helmet } from "react-helmet-async";

const appName = "Instagram";

export default function Head({ title = appName, description, index }) {
    const titleTemplate = title !== appName ? `${title} | ${appName}` : title;

    return (
        <Helmet>
            <link rel="canonical" href={location.href} />
            <meta property="og:site_name" content={appName} />
            <meta property="og:title" content={titleTemplate} />
            <meta property="og:url" content={location.href} />
            <meta property="og:image" content={`${location.origin}/og-image.png`} />
            <meta property="og:image:alt" content={`Logo do ${appName}`} />
            <meta name="apple-mobile-web-app-title" content={appName} />
            <meta name="application-name" content={appName} />
            <title>{titleTemplate}</title>

            {description && (
                <>
                    <meta name="description" content={description} />
                    <meta property="og:description" content={description} />
                </>
            )}

            {!index && <meta name="robots" content="none" />}
        </Helmet>
    );
}
