"use client";

import { useState } from "react";
import useFetch from "../utils/api";
import { InitialValue } from "../types/InitialValue";
import { useCopyToClipboard } from "usehooks-ts";
import Result from "./Result";
import getPropertyName from "../utils/getPropertyName";

export default function ResultsList({ searchTerm }: { searchTerm: string }) {

    const { loading, error, data = [] } = useFetch<InitialValue[]>("https://api.unstyle.dev/initial-values");
    const [, copy] = useCopyToClipboard();
    const [copiedSnippet, setCopiedSnippet] = useState<string | null>(null);

    const filteredResults = data.filter((result : InitialValue) => {
        const name = getPropertyName(result.url);
        return name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    const handleCopy = (codeSnippet: string) => {
        copy(codeSnippet)
           .then(() => {
                setCopiedSnippet(codeSnippet);
            })
    }

    if (loading) return <h3 className="text-lg font-bold text-teal-700 dark:text-white mb-2 text-center">Loading...</h3>;

    if (error) return <h3 className="text-lg font-bold text-teal-700 dark:text-white mb-2 text-center">Oh snap! Something's not quite right...</h3>;

    return (
        <div className="px-4">            
            {searchTerm === "" ? (
                    <h3 className="text-lg font-bold text-teal-700 dark:text-white mb-2 text-center">
                        Your results will appear here...
                    </h3>
            ) : filteredResults.length === 0 && searchTerm !== "" ? (
                <>
                    <h3 className="text-lg font-bold text-teal-700 mb-2 text-center">
                        No results found for &ldquo;{searchTerm}&rdquo;
                    </h3>
                    <p className="text-gray-900 dark:text-white text-center">Try a different search term.</p>
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