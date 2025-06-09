import SearchContainer from "./SearchContainer";
import ResultsList from "@/components/ResultsList";

export default function Main() {

    return (
        <main className="col-span-12 md:col-start-3 md:col-end-11 mx-auto my-0">
            <SearchContainer/>
            <ResultsList/>
        </main>
    )
}