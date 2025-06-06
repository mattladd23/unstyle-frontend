import { InitialValue } from "@/types/InitialValue";
import getPropertyName from "@/utils/getPropertyName";

export default function Result({ url, initialValue }: InitialValue) {
    return (
        <li>
            <code>{getPropertyName(url)}: {initialValue}</code>
            <br/>
            <small>Read more at <a href={url}>MDN Web Docs</a></small>
        </li>
    );
}