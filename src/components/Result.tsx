import { InitialValue } from "@/types/InitialValue";
import getPropertyName from "@/utils/getPropertyName";
import MozillaLink from "./MozillaLink";
import { useCopyToClipboard } from "usehooks-ts";

export default function Result({ url, initialValue }: InitialValue) {
    
    const propertyName: string = getPropertyName(url);
    const codeSnippet: string = `${propertyName}: ${initialValue};`;

    const [copiedCode, copy] = useCopyToClipboard();
    const handleCopy = (code: string) => () => {
        copy(code);
    }

    return (
        <li className="rounded-xl p-4 mb-4 bg-white transition-transform hover:shadow hover:shadow-grey-500 hover:scale-102">
            <h3 className="text-xl font-bold text-teal-700 mb-2">
                {propertyName}
            </h3>
            <code
                className="inline-block bg-gray-300 font-black rounded-lg mb-2 px-2 cursor-pointer transition-transform hover:outline hover:outline-gray-600"
                onClick={handleCopy(codeSnippet)}    
            >
                {codeSnippet}
            </code>
            <small className="block text-gray-900 p-1">Read more at <MozillaLink url={url}/></small>
        </li>
    );
}