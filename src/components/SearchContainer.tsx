"use client";

import { useRef } from "react";

export default function SearchContainer() {

    const placeholderText : string = `E.g. "padding-bottom"`;
    const userInput = useRef<HTMLInputElement>(null);

    const getUserInput = ():string => {
        if (userInput.current) {
            return userInput.current.value.trim();
        }
        return "";
    }

    const printUserInput = ():void => {
        const input = getUserInput();
        if (input) {
            console.log(`User input: ${input}`);
        } else {
            console.log("No input provided.");
        }
    }

    return (
        <div className="flex flex-col items-center justify-between my-4 p-4">
            <h2 className="text-xl mb-4 text-gray-900">Enter your css property below...</h2>
            <input
                type="text"
                placeholder={placeholderText}
                className="flex-grow p-2 border bg-white border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 text-gray-900 hover:shadow hover:shadow-gray-300"
                ref={userInput}
                onKeyUp={printUserInput}
            />
        </div>
    );
}