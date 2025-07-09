import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export default function MozillaLink({ url }: { url: string }) {
    return (
        <a
            className="text-orange-600 underline underline-offset-1 hover:no-underline"
            href={url}
            target="_blank"
            data-testid="mozilla-link"
        >
            MDN Web Docs
            <FontAwesomeIcon
                className="inline-block pb-1 pl-1 mr-1 w-3 h-3"
                icon={faArrowUpRightFromSquare}
                data-testid="mozilla-link-icon"
            />
        </a>
    )
}