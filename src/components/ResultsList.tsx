"use client";

import { useEffect, useState } from "react";
import { fetchData } from "@/utils/api";
import { InitialValue } from "@/types/InitialValue";
import Result from "./Result";

export default function ResultsList({ searchTerm }: { searchTerm: string }) {

    const [results, setResults] = useState<InitialValue[]>([]);

    useEffect(() => {
        fetchData("http://localhost:3001/api/get")
            .then((data) => setResults(data));
    }, []);

    const filteredResults = results.filter((result : InitialValue) => {
        return result.url.toLowerCase().includes(searchTerm.toLowerCase());
    });

    return (
        <div>            
            <ul>
                {filteredResults.map((result: InitialValue) => (
                    <Result
                        key={result.id}
                        id={result.id}
                        url={result.url}
                        initialValue={result.initialValue}
                    />
                ))}
            </ul>
        </div>
    )
}