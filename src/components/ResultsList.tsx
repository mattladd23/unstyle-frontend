import { fetchData } from "@/utils/api";
import { InitialValue } from "@/types/InitialValue";

export default async function ResultsList() {

    const results = await fetchData("http:localhost:3001/api/get");
    // console.log("Results:", results);

    const resultsList = results.map((result: InitialValue) =>
        <li>{result.url}: {result.initialValue}</li>        
    )
    

    return (
        <div>
            <ul>{resultsList}</ul>
        </div>
    )
}