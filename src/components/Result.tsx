"use client";

import { InitialValue } from "@/types/InitialValue";
import getPropertyName from "@/utils/getPropertyName";
import MozillaLink from "./MozillaLink";

export default function Result({ url, initialValue }: InitialValue) {
    return (
        <li className="rounded-lg p-4 mb-4 bg-white transition-transform hover:shadow hover:shadow-grey-500 hover:scale-102">
            <h3 className="text-xl font-bold text-teal-700 mb-2">
                {getPropertyName(url)}
            </h3>
            <code className="inline-block bg-gray-300 font-black rounded-md mb-2 px-1 cursor-pointer transition-transform hover:outline hover:outline-gray-600">{getPropertyName(url)}: {initialValue};</code>
            <small className="block text-gray-900 p-1">Read more at <MozillaLink url={url}/></small>
        </li>
    );
}