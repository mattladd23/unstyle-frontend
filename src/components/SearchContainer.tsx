import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

interface SearchContainerProps {
    searchInput: string;
    setSearchTerm: (term: string) => void;
}

export default function SearchContainer({searchInput, setSearchTerm}: SearchContainerProps) {

    const placeholderText : string = `"padding-bottom"`;

    return (
        <div className="flex flex-col items-center justify-between my-4 p-4">
            <h2 className="text-xl mb-4 text-gray-900">Search more than 400 CSS properties...</h2>
            <div className="flex">
                <FontAwesomeIcon className="inline-block my-auto mr-2 text-2xl text-orange-600" icon={faMagnifyingGlass} />
                <input
                    type="text"
                    placeholder={placeholderText}
                    className="flex-grow p-3 border bg-white border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-600 text-gray-900 hover:shadow hover:shadow-gray-300"
                    value={searchInput}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>            
        </div>
    );
}