import { InitialValue } from "@/types/InitialValue";
import getPropertyName from "@/utils/getPropertyName";
import MozillaLink from "./MozillaLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faCheck } from "@fortawesome/free-solid-svg-icons";

interface ResultProps extends InitialValue {
    onCopy: (codeSnippet: string) => void;
    copiedSnippet: string | null;
}

export default function Result({ url, initialValue, onCopy, copiedSnippet }: ResultProps) {   

    const propertyName: string = getPropertyName(url);
    const codeSnippet: string = `${propertyName}: ${initialValue};`;
    const isCopied: boolean = copiedSnippet === codeSnippet;

    return (
        <li className="rounded-xl p-4 mb-4 bg-white transition-transform hover:shadow hover:shadow-grey-500 hover:scale-102">
            <h3 className="text-xl font-bold text-teal-700 mb-2">
                {propertyName}
            </h3>
            <button
                className="mb-2"
                onClick={() => onCopy(codeSnippet)}
                title={isCopied ? "Copied" : "Copy to clipboard"}                
            >
                <code
                    className="inline-block bg-gray-300 font-black rounded-lg px-2 cursor-pointer"
                >
                    {codeSnippet}
                </code>
                <FontAwesomeIcon
                    icon={isCopied ? faCheck : faCopy}
                    className={`inline-block pb-1 pl-1 mr-1 w-3 h-3 cursor-pointer transition-transform ${isCopied ? "text-teal-700" : "text-gray-400 hover:text-gray-800"}`}
                />
            </button>
            <small className="block text-gray-900 p-1">Read more at <MozillaLink url={url}/></small>
        </li>
    );
}