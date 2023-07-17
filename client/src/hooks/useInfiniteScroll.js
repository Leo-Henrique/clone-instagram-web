import { useEffect, useState } from "react";
import api from "../app/api";

export default function useInfiniteScroll(receivedSettings = {}) {
    const { endpoint, items, initialCollection, wrapperRef } = {
        endpoint: {
            name: null,
            options: undefined,
            ...receivedSettings.endpoint,
        },
        wrapperRef: null,
        items: 3,
        initialCollection: 1,
        ...receivedSettings,
    };
    const [collection, setCollection] = useState(initialCollection);
    const [scrollFinished, setScrollFinished] = useState(false);
    const [data, setData] = useState(Array.from({ length: items }));
    const result = api.endpoints[endpoint.name].useQuery(
        { items, collection },
        { ...endpoint.options, skip: scrollFinished }
    );

    useEffect(() => {
        if (!result.isSuccess) return;

        if (collection === initialCollection) setData(result.data);
        else setData([...data, ...result.data]);

        if (result.data.length < items) setScrollFinished(true);
        else setScrollFinished(false);
    }, [result.data]);

    useEffect(() => {
        if (!result.isSuccess || scrollFinished) return;

        const loadMore = ([entry], observer) => {
            if (entry.isIntersecting) {
                setCollection(collection + 1);
                observer.disconnect();
            }
        };
        const observer = new IntersectionObserver(loadMore, { threshold: 0.3 });

        observer.observe(wrapperRef.current.lastElementChild);
        return () => observer.disconnect();
    }, [data]);

    return {
        result: { ...result, data },
        scrollFinished,
        resetScroll: () => {
            setScrollFinished(false);
            setCollection(initialCollection);
        },
    };
}
