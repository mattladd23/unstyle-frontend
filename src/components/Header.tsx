import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRotateLeft } from '@fortawesome/free-solid-svg-icons';

export default function Header() {

    return (
        <header className="grid grid-cols-12 col-span-12 bg-gray-100 shadow-xs shadow-gray-300">
            <h1 className="flex col-span-12 md:col-start-0 md:col-end-2 text-2xl font-bold text-gray-900 mx-auto my-0 p-4">                
                Unstyle
                <FontAwesomeIcon className="my-0 w-5 h-5 pl-1 text-teal-700" icon={faArrowRotateLeft} />
            </h1>
        </header>
    )
}