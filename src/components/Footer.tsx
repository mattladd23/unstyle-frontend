import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MozillaLink from "./MozillaLink";
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const url: string = "https://developer.mozilla.org/en-US/docs/Web/CSS/";
const githubAPIUrl: string = "https://github.com/mattladd23/unstyle-api";
const githubFrontendUrl: string = "https://github.com/mattladd23/unstyle-frontend";
const githubLambdaUrl: string = "https://github.com/mattladd23/unstyle-lambda";

export default function Footer() {

    return (
        <footer className="grid col-span-12 p-4 gap-4 dark:text-white">
            <small className="col-span-12 md:col-start-1 md:col-end-4">All property and initial value data sourced from <MozillaLink url={url} /> - © Mozilla.</small>
            <small className="col-span-12 md:col-start-12 md: col-end-13">
                Github<FontAwesomeIcon className="col-span-12 md:col-start-11 md:col-end-13 h-5 w-5 my-auto text-gray-900 dark:text-white" icon={faSquareGithub} />:
                <a
                    href={githubAPIUrl}
                    target="_blank"
                    className="text-orange-700 underline underline-offset-1 hover:no-underline mx-1"
                    data-testid="github-api-link"
                >
                    API<FontAwesomeIcon className="inline-block pb-1 pl-1 mr-1 w-3 h-3" icon={faArrowUpRightFromSquare} />
                </a>
                <a
                    href={githubFrontendUrl}
                    target="_blank"
                    className="text-orange-700 underline underline-offset-1 hover:no-underline mr-1"
                    data-testid="github-frontend-link"
                >
                    Frontend<FontAwesomeIcon className="inline-block pb-1 pl-1 mr-1 w-3 h-3" icon={faArrowUpRightFromSquare} />
                </a>
                <a
                    href={githubLambdaUrl}
                    target="_blank"
                    className="text-orange-700 underline underline-offset-1 hover:no-underline mr-1"
                    data-testid="github-lambda-link"
                >
                    Lambda<FontAwesomeIcon className="inline-block pb-1 pl-1 mr-1 w-3 h-3" icon={faArrowUpRightFromSquare} />
                </a>
            </small>
        </footer>
    )
}