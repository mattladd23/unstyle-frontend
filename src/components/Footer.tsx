import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MozillaLink from "./MozillaLink";
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const url: string = "https://developer.mozilla.org/en-US/docs/Web/CSS/";
const githubAPIUrl: string = "https://github.com/mattladd23/unstyle-api";
const githubFrontendUrl: string = "https://github.com/mattladd23/unstyle-frontend";

export default function Footer() {

    return (
        <footer className="grid col-span-12 p-4">
            <small className="col-span-12 md:col-start-1 md:col-end-4">All property and initial value data sourced from <MozillaLink url={url} /> - © Mozilla.</small>
            <small className="col-span-12 md:col-start-12 md: col-end-13">
                <FontAwesomeIcon className="col-span-12 md:col-start-11 md:col-end-13 h-5 w-5 my-auto text-gray-900" icon={faSquareGithub} />
                Github repos: <a href={githubAPIUrl} className="text-orange-600 underline underline-offset-1 hover:no-underline mr-1">API<FontAwesomeIcon className="inline-block pb-1 pl-1 mr-1 w-3 h-3" icon={faArrowUpRightFromSquare} /></a> <a href={githubFrontendUrl} className="text-orange-600 underline underline-offset-1 hover:no-underline">Frontend<FontAwesomeIcon className="inline-block pb-1 pl-1 mr-1 w-3 h-3" icon={faArrowUpRightFromSquare} /></a>
            </small>
        </footer>
    )
}