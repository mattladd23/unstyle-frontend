"use client";

import { useState } from "react";
import SearchContainer from "./SearchContainer";
import ResultsList from "../components/ResultsList";

export default function Main() {

    const [searchTerm, setSearchTerm] = useState<string>("");

    return (
        <main className="col-span-12 md:col-start-3 md:col-end-11 mx-auto my-0 min-h-screen" data-testid="main">
            <SearchContainer searchInput={searchTerm} setSearchTerm={setSearchTerm}/>
            <ResultsList searchTerm={searchTerm}/>
        </main>
    )
}