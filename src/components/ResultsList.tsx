"use client";

import { useEffect, useState } from "react";
import { fetchResults } from "@/utils/api";
import { InitialValue } from "@/types/InitialValue";
import { useCopyToClipboard } from "usehooks-ts";
import Result from "./Result";
import getPropertyName from "@/utils/getPropertyName";

export default function ResultsList({ searchTerm }: { searchTerm: string }) {

    const [results, setResults] = useState<InitialValue[]>([]);
    const [, copy] = useCopyToClipboard();
    const [copiedSnippet, setCopiedSnippet] = useState<string | null>(null);

    useEffect(() => {
        fetchResults("https://api.unstyle.dev/initial-values")
            .then((data) => setResults(data));
    }, []);

    const filteredResults = results.filter((result : InitialValue) => {
        const name = getPropertyName(result.url);
        return name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    const handleCopy = (codeSnippet: string) => {
        copy(codeSnippet)
           .then(() => {
                setCopiedSnippet(codeSnippet);
            })
    }

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
                            onCopy={handleCopy}
                            copiedSnippet={copiedSnippet}
                        />
                    ))
                }   
            </ul>
            )}       
        </div>
    )
}