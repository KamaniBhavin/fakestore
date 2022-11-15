import {useEffect, useState} from "react";

const BASE_URL = "https://fakestoreapi.com"

const useFetch = <T>(endpoint: string) => {
    const [data, setData] = useState<T>();
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal

        setLoading(true);
        (async () => {
            const url = `${BASE_URL}${endpoint}`;
            const res = await fetch(url, {signal})
            const data = await res.json()
            setData(data)
            setLoading(false)
        })();

        return () => controller.abort()
    }, [endpoint])


    return [loading, data];
}

export default useFetch