import { useEffect } from "react";

const appName = "Instagram";

export default function useHead({ title = appName, desc = "", index = false }) {
    const getElem = value => document.querySelector(value);
    const getMeta = value => document.querySelector(`meta[name="${value}"]`);
    const getMetaOG = value =>
        document.querySelector(`meta[property="og:${value}"]`);

    useEffect(() => {
        const descriptions = [getMeta("description"), getMetaOG("description")];
        const titleFormatted = title !== appName ? `${title} | ${appName}` : appName;

        document.title = titleFormatted;
        getMetaOG("title")?.setAttribute("content", titleFormatted);
        descriptions.forEach(elem => elem?.setAttribute("content", desc));
        getElem(`link[rel="canonical"]`)?.setAttribute("href", location.href);
        getMetaOG("url")?.setAttribute("content", location.href);
        getMetaOG("image")?.setAttribute(
            "content",
            `${location.origin}/og-image.png`
        );

        if (!index) {
            const meta = document.createElement("meta");

            meta.setAttribute("name", "robots");
            meta.setAttribute("content", "none");
            document.head.appendChild(meta);
        }
    }, []);
}
