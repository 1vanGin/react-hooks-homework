import {useEffect, useState} from "react";
import axios from "axios";

export function useFetch(url) {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    async function fetchHandler(limit) {
        try {
            setIsLoading(true)
            setData(null)
            setError(null)
            const urlWLimit = limit ? `${url}?limit=${limit}` : url

            const response = await axios.get(urlWLimit);
            setIsLoading(false)
            setData(response.data)
        } catch (error) {
            setIsLoading(false)
            setError(error)
        }
    }

    function refetch({params}) {
        fetchHandler(params._limit)
    }

    useEffect(() => {
        if (url) {
            fetchHandler();
        }
    }, []);

    return {
        data,
        isLoading,
        error,
        refetch
    }
}