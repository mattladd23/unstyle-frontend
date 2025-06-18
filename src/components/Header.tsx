import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowRotateLeft } from '@fortawesome/free-solid-svg-icons';

export default function Header() {

    return (
        <header className="grid grid-cols-12 col-span-12 bg-teal-700">
            <h1 className="flex col-span-12 md:col-start-0 md:col-end-2 text-2xl font-bold text-white mx-auto my-0 p-4 grow-0">
                <span className="text-orange-600">un</span>style.io
                <FontAwesomeIcon className="w-5 h-5 pl-1" icon={faArrowRotateLeft} />
            </h1>
            <FontAwesomeIcon className="col-span-12 md:col-start-11 md:col-end-13 h-5 w-5 my-auto text-white" icon={faSquareGithub} />
        </header>
    )
}