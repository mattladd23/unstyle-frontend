import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowRotateLeft } from '@fortawesome/free-solid-svg-icons';

export default function Header() {

    return (
        <header className="grid grid-cols-12 col-span-12 bg-gray-100 shadow-xs shadow-gray-300">
            <h1 className="flex col-span-12 md:col-start-0 md:col-end-2 text-2xl font-bold text-teal-700 mx-auto my-0 p-4 grow-0">
                <FontAwesomeIcon className="my-0 w-5 h-5 pr-1" icon={faArrowRotateLeft} />
                unstyle.dev                
            </h1>
            <FontAwesomeIcon className="col-span-12 md:col-start-11 md:col-end-13 h-5 w-5 my-auto text-teal-700" icon={faSquareGithub} />
        </header>
    )
}