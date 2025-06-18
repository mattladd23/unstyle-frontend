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
            {searchTerm === "" ? (
                    <h3 className="text-lg font-bold text-teal-700 mb-2 text-center">
                        Your results will appear here...
                    </h3>
            ) : filteredResults.length === 0 && searchTerm !== "" ? (
                <>
                    <h3 className="text-lg font-bold text-teal-700 mb-2 text-center">
                        No results found for &ldquo;{searchTerm}&rdquo;
                    </h3>
                    <p className="text-gray-900 text-center">Try a different search term.</p>
                </>                    
            ) : (
            <ul>
                {
                    filteredResults && filteredResults.map((result: InitialValue) => (
                        <Result
                            key={result.id}
                            id={result.id}
                            url={result.url}
                            initialValue={result.initialValue}
                        />
                    ))
                }   
            </ul>
            )}       
        </div>
    )
}