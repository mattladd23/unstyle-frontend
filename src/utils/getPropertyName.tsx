export default function getPropertyName(url: string): string {
    const urlParts = url.split("/");
    const propertyName = urlParts[urlParts.length - 1];

    return propertyName;
}