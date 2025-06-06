import { InitialValue } from "@/types/InitialValue";

export default function Result({ url, initialValue }: InitialValue) {
    return (
        <li>
            <p>{url}: <code>{initialValue}</code></p> 
            <small>Read more at <a href={url}>MDN Web Docs</a></small>
        </li>
    );
}