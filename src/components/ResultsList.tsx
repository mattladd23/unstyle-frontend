import { fetchData } from "@/utils/api";
import { InitialValue } from "@/types/InitialValue";
import Result from "./Result";

export default async function ResultsList() {

    const results = await fetchData("http:localhost:3001/api/get");

    const resultsList = results.map((result: InitialValue) =>
        <Result url={result.url} initialValue={result.initialValue}></Result>
    )

    return (
        <div>
            <ul>{resultsList}</ul>
        </div>
    )
}