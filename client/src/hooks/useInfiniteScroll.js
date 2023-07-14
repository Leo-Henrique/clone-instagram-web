import { useEffect, useRef, useState } from "react";
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
    const [data, setData] = useState(Array.from({ length: items }));
    const [request, result, { lastArg }] = api.endpoints[endpoint.name].useLazyQuery(
        endpoint.options
    );
    const [scrollFinished, setScrollFinished] = useState(false);
    const triggerRequest = async collection => {
        try {
            const latestData = await request({ items, collection }).unwrap();

            if (collection === initialCollection) setData(latestData);
            else setData([...data, ...latestData]);

            if (latestData.length < items) setScrollFinished(true);
        } catch {}
    };
    const firstRender = useRef(true);

    useEffect(() => {
        if (firstRender.current) {
            triggerRequest(initialCollection);
            firstRender.current = false;
            return;
        }

        if (data.includes(undefined) || scrollFinished) return;

        const loadMore = ([entry], observer) => {
            if (entry.isIntersecting) {
                triggerRequest(lastArg.collection + 1);
                observer.disconnect();
            }
        };
        const observer = new IntersectionObserver(loadMore, { threshold: 0.8 });

        observer.observe(wrapperRef.current.lastElementChild);
        return () => observer.disconnect();
    }, [data]);

    return [data, result, scrollFinished];
}
