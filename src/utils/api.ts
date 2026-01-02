import { useState, useEffect } from 'react';
import { InitialValue } from '@/types/InitialValue';

export default function useFetch<T>(url: string) {

    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [data, setData] = useState<InitialValue[] | []>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
                const data = await response.json();
                setData(data.data);
            } catch (err) {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError("Unknown error");
                }
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [url])

    return { loading, error, data };
}
