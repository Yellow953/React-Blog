import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url)
            .then(res => {
                if (!res.ok){
                    throw new Error("Could not fetch data from this url...");
                }
                return res.json();
            }).then((data) => {
                setIsLoading(false);
                setData(data);
                setError(null);
            }).catch((e) => {
                setError(e.message);
                setIsLoading(false);
            });
    }, [url]);

    return { data, isLoading, error };
};

export default useFetch;