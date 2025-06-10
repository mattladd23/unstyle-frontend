import MozillaLink from "./MozillaLink"

const url: string = "https://developer.mozilla.org/en-US/docs/Web/CSS/";

export default function Footer() {

    return (
        <footer className="col-span-12 p-4">
            <small>All property and initial value data sourced from <MozillaLink url={url} /> - © Mozilla.</small>
        </footer>
    )
}