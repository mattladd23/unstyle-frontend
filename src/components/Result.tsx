import { InitialValue } from "@/types/InitialValue";
import getPropertyName from "@/utils/getPropertyName";

export default function Result({ url, initialValue }: InitialValue) {
    return (
        <li className="rounded-md p-4 mb-4 bg-white hover:shadow hover:shadow-teal-700">
            <h2 className="text-xl font-bold text-teal-700 mb-2">
                {getPropertyName(url)}
            </h2>
            <code className="inline-block bg-gray-300 font-black rounded-md mb-2 px-1">{getPropertyName(url)}: {initialValue};</code>
            <small className="block p-1">Read more at <a className="text-orange-600" href={url}>MDN Web Docs</a></small>
        </li>
    );
}