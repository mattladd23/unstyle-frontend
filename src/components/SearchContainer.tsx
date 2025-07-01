import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faRocket } from "@fortawesome/free-solid-svg-icons";

interface SearchContainerProps {
    searchInput: string;
    setSearchTerm: (term: string) => void;
}

export default function SearchContainer({searchInput, setSearchTerm}: SearchContainerProps) {

    const placeholderText : string = `"background-color"`;

    return (
        <div className="flex flex-col items-center justify-between my-4 p-4">
            <div className="flex">
              <h2 className="text-4xl mb-4 text-gray-900 dark:text-white text-center">Rapidly find CSS initial values</h2>
              <FontAwesomeIcon className="inline-block ml-2 text-2xl  text-teal-700" icon={faRocket} />
            </div>        
            <p className="text-xl mb-4 text-gray-900 dark:text-white text-center">Simply enter a propery name below!</p>
            <div className="flex">                
                <input
                    type="text"
                    placeholder={placeholderText}
                    className="flex-grow p-3 border bg-white dark:bg-gray-950 border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-600 dark:focus:border-gray-800 text-gray-900 dark:text-white hover:shadow hover:shadow-gray-300"
                    value={searchInput}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <FontAwesomeIcon className="inline-block my-auto ml-2 text-2xl text-orange-600" icon={faMagnifyingGlass} />
            </div>
        </div>
    );
}