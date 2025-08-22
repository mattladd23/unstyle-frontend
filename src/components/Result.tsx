import { InitialValue } from "../types/InitialValue";
import getPropertyName from "../utils/getPropertyName";
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
        <li className="rounded-xl p-4 mb-4 bg-white dark:bg-gray-950 dark:border dark:border-gray-300 transition-transform shadow shadow-grey-300 hover:shadow-grey-600 hover:scale-102 dark:shadow-none dark:hover:shadow-none">
            <h3 className="text-xl font-bold text-teal-700 mb-2">
                {propertyName}
            </h3>
            <button
                className="mb-2"
                onClick={() => onCopy(codeSnippet)}
                title={isCopied ? "Copied" : "Copy to clipboard"}                
            >
                <code
                    className="inline bg-gray-300 font-black box-decoration-clone rounded-lg p-1 cursor-pointer"
                >
                    {codeSnippet}
                </code>
                <FontAwesomeIcon
                    icon={isCopied ? faCheck : faCopy}
                    className={`inline-block pb-1 pl-1 mr-1 w-3 h-3 cursor-pointer transition-transform ${isCopied ? "text-teal-700" : "text-gray-400 hover:text-gray-800 dark:hover:text-white"}`}
                    data-testid={isCopied ? "copy-success-icon" : "copy-icon"}
                />
            </button>
            <small className="block text-gray-900 dark:text-white p-1">Read more at <MozillaLink url={url}/></small>
        </li>
    );
}